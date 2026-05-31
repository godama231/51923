// CustomVisitor.js
// Visitor personalizado: interpreta el código y genera traducción a JavaScript.

import LenguajeVisitor from './generated/LenguajeVisitor.js';

export default class CustomVisitor extends LenguajeVisitor {

    constructor() {
        super();
        this.memoria   = new Map();  // variables en scope actual
        this.funciones = new Map();  // funciones definidas { nombre -> {params, instrCtx} }
        this.codigoJS  = [];         // líneas JS del nivel superior
        this.salida    = [];         // valores impresos
    }

    // ═══════════════════════════════════════════════════════════════════════
    // PROGRAMA
    // ═══════════════════════════════════════════════════════════════════════

    visitPrograma(ctx) {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const hijo = ctx.getChild(i);
            if (hijo.symbol) continue; // EOF
            this.visit(hijo);
        }
    }

    visitSentencia(ctx) {
        this.visit(ctx.getChild(0));
    }

    // ═══════════════════════════════════════════════════════════════════════
    // DECLARACIÓN (nivel superior)
    // ═══════════════════════════════════════════════════════════════════════

    visitDeclConAsign(ctx) {
        const dest = ctx.nombre().getText();
        const { val, jsExpr } = this._evalAsignable(ctx.asignable(), this.memoria);
        this.memoria.set(dest, val);
        this.codigoJS.push('let ' + dest + ' = ' + jsExpr + ';');
    }

    visitDeclSinAsign(ctx) {
        const dest = ctx.nombre().getText();
        this.memoria.set(dest, undefined);
        this.codigoJS.push('let ' + dest + ';');
    }

    // ═══════════════════════════════════════════════════════════════════════
    // FUNCIÓN
    // ═══════════════════════════════════════════════════════════════════════

    visitFuncion(ctx) {
        const nombre = ctx.nombre().getText();
        const params = ctx.argumentos() ? ctx.argumentos().nombre().map(n => n.getText()) : [];
        this.funciones.set(nombre, { params, instrCtx: ctx.instrucciones() });

        // Traducción JS — solo sintaxis, sin ejecutar
        const cuerpoJS = this._traducirInstrucciones(ctx.instrucciones());
        const indentado = cuerpoJS.map(l => '    ' + l).join('\n');
        this.codigoJS.push(
            'function ' + nombre + '(' + params.join(', ') + ') {\n' + indentado + '\n}'
        );
    }

    // ═══════════════════════════════════════════════════════════════════════
    // IMPRESIÓN (nivel superior)
    // ═══════════════════════════════════════════════════════════════════════

    visitImpresion(ctx) {
        const val    = this._evalValor(ctx.valor(), this.memoria);
        const jsExpr = this._jsValorExpr(ctx.valor());
        this.salida.push(String(val));
        console.log('  →', val);
        this.codigoJS.push('console.log(' + jsExpr + ');');
    }

    // ═══════════════════════════════════════════════════════════════════════
    // EJECUCIÓN DE FUNCIÓN (nivel superior)
    // ═══════════════════════════════════════════════════════════════════════

    visitEjecucion(ctx) {
        const nombre = ctx.nombre().getText();
        if (!this.funciones.has(nombre)) {
            throw new Error('Función no definida: \'' + nombre + '\'');
        }
        const args = ctx.valor().map(v => this._evalValor(v, this.memoria));
        this._ejecutarFuncion(nombre, args);

        const argJS = ctx.valor().map(v => this._jsValorExpr(v)).join(', ');
        this.codigoJS.push(nombre + '(' + argJS + ');');
    }

    // ═══════════════════════════════════════════════════════════════════════
    // RETORNO (solo dentro de función — lanzamos señal)
    // ═══════════════════════════════════════════════════════════════════════

    visitRetorno(ctx) {
        // Este método solo se llama cuando ejecutamos instrucciones directamente
        // (debería cubrirlo _ejecutarFuncion vía visit, pero por seguridad lo dejamos)
        throw { __retorno__: true, valor: null };
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HELPERS: EVALUACIÓN EN TIEMPO DE EJECUCIÓN
    // ═══════════════════════════════════════════════════════════════════════

    _ejecutarFuncion(nombre, args) {
        const fn     = this.funciones.get(nombre);
        const backup = new Map(this.memoria);

        // Crear scope local con parámetros
        fn.params.forEach((p, i) => this.memoria.set(p, args[i]));

        let retVal = undefined;
        try {
            this._ejecutarInstrucciones(fn.instrCtx);
        } catch (e) {
            if (e && e.__retorno__) {
                retVal = e.valor;
            } else {
                throw e;
            }
        } finally {
            this.memoria = backup;
        }
        return retVal;
    }

    _ejecutarInstrucciones(instrCtx) {
        for (let i = 0; i < instrCtx.getChildCount(); i++) {
            const instrNode = instrCtx.getChild(i); // instruccionContext
            const hijo      = instrNode.getChild(0);
            const tipo      = hijo.constructor.name;

            if (tipo === 'DeclConAsignContext') {
                const dest = hijo.nombre().getText();
                const { val } = this._evalAsignable(hijo.asignable(), this.memoria);
                this.memoria.set(dest, val);

            } else if (tipo === 'DeclSinAsignContext') {
                this.memoria.set(hijo.nombre().getText(), undefined);

            } else if (tipo === 'AsignacionContext') {
                const dest = hijo.nombre().getText();
                const { val } = this._evalAsignable(hijo.asignable(), this.memoria);
                this.memoria.set(dest, val);

            } else if (tipo === 'ImpresionContext') {
                const val = this._evalValor(hijo.valor(), this.memoria);
                this.salida.push(String(val));
                console.log('  →', val);

            } else if (tipo === 'RetornoContext') {
                const val = this._evalValor(hijo.valor(), this.memoria);
                throw { __retorno__: true, valor: val };
            }
        }
    }

    _evalAsignable(asigCtx, mem) {
        const tipo = asigCtx.constructor.name;

        if (tipo === 'AsignTransformContext') {
            const transf  = this._normTransf(asigCtx.transformacion().getText());
            const cadVal  = this._evalCadena(asigCtx.cadena(), mem);
            const val     = this._aplicarTransf(transf, cadVal);
            const jsExpr  = this._jsTransfExpr(transf, this._jsCadenaExpr(asigCtx.cadena()));
            return { val, jsExpr };

        } else if (tipo === 'AsignConcatContext') {
            const izq    = this._evalCadena(asigCtx.cadena(0), mem);
            const der    = this._evalCadena(asigCtx.cadena(1), mem);
            const val    = String(izq) + String(der);
            const jsExpr = this._jsCadenaExpr(asigCtx.cadena(0)) + ' + ' +
                           this._jsCadenaExpr(asigCtx.cadena(1));
            return { val, jsExpr };

        } else {
            // AsignValorContext
            const val    = this._evalValor(asigCtx.valor(), mem);
            const jsExpr = this._jsValorExpr(asigCtx.valor());
            return { val, jsExpr };
        }
    }

    _evalValor(valCtx, mem) {
        if (valCtx.texto())  return valCtx.texto().TEXTO().getText().slice(1, -1);
        if (valCtx.numero()) return Number(valCtx.numero().NUMERO().getText());
        if (valCtx.nombre()) {
            const id = valCtx.nombre().IDENTIFICADOR().getText();
            return mem.has(id) ? mem.get(id) : id;
        }
    }

    _evalCadena(cadCtx, mem) {
        if (cadCtx.texto())  return cadCtx.texto().TEXTO().getText().slice(1, -1);
        if (cadCtx.nombre()) {
            const id = cadCtx.nombre().IDENTIFICADOR().getText();
            return mem.has(id) ? mem.get(id) : id;
        }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HELPERS: TRANSFORMACIONES
    // ═══════════════════════════════════════════════════════════════════════

    _normTransf(texto) {
        return texto.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }

    _aplicarTransf(transf, s) {
        s = String(s);
        switch (transf) {
            case 'mayusculas': return s.toUpperCase();
            case 'minusculas': return s.toLowerCase();
            case 'longitud':   return s.length;
            case 'invertir':   return s.split('').reverse().join('');
            case 'reemplazar': return s;
            default: throw new Error('Transformación desconocida: \'' + transf + '\'');
        }
    }

    _jsTransfExpr(transf, expr) {
        switch (transf) {
            case 'mayusculas': return expr + '.toUpperCase()';
            case 'minusculas': return expr + '.toLowerCase()';
            case 'longitud':   return expr + '.length';
            case 'invertir':   return expr + ".split('').reverse().join('')";
            case 'reemplazar': return expr;
            default: return expr;
        }
    }

    // ═══════════════════════════════════════════════════════════════════════
    // HELPERS: GENERACIÓN DE EXPRESIONES JS (para traducción)
    // ═══════════════════════════════════════════════════════════════════════

    _jsValorExpr(valCtx) {
        if (valCtx.texto())  return '"' + valCtx.texto().TEXTO().getText().slice(1, -1) + '"';
        if (valCtx.numero()) return valCtx.numero().NUMERO().getText();
        if (valCtx.nombre()) return valCtx.nombre().IDENTIFICADOR().getText();
        return 'undefined';
    }

    _jsCadenaExpr(cadCtx) {
        if (cadCtx.texto())  return '"' + cadCtx.texto().TEXTO().getText().slice(1, -1) + '"';
        if (cadCtx.nombre()) return cadCtx.nombre().IDENTIFICADOR().getText();
        return '""';
    }

    // Genera las líneas JS del cuerpo de una función (sin ejecutar)
    _traducirInstrucciones(instrCtx) {
        const lineas = [];
        for (let i = 0; i < instrCtx.getChildCount(); i++) {
            const instrNode = instrCtx.getChild(i);
            const hijo      = instrNode.getChild(0);
            const tipo      = hijo.constructor.name;

            if (tipo === 'DeclConAsignContext') {
                const dest    = hijo.nombre().getText();
                const asig    = hijo.asignable();
                const jsExpr  = this._jsAsignableExpr(asig);
                lineas.push('let ' + dest + ' = ' + jsExpr + ';');

            } else if (tipo === 'DeclSinAsignContext') {
                lineas.push('let ' + hijo.nombre().getText() + ';');

            } else if (tipo === 'AsignacionContext') {
                const dest   = hijo.nombre().getText();
                const jsExpr = this._jsAsignableExpr(hijo.asignable());
                lineas.push(dest + ' = ' + jsExpr + ';');

            } else if (tipo === 'ImpresionContext') {
                lineas.push('console.log(' + this._jsValorExpr(hijo.valor()) + ');');

            } else if (tipo === 'RetornoContext') {
                lineas.push('return ' + this._jsValorExpr(hijo.valor()) + ';');
            }
        }
        return lineas;
    }

    _jsAsignableExpr(asigCtx) {
        const tipo = asigCtx.constructor.name;
        if (tipo === 'AsignTransformContext') {
            const transf = this._normTransf(asigCtx.transformacion().getText());
            return this._jsTransfExpr(transf, this._jsCadenaExpr(asigCtx.cadena()));
        } else if (tipo === 'AsignConcatContext') {
            return this._jsCadenaExpr(asigCtx.cadena(0)) + ' + ' +
                   this._jsCadenaExpr(asigCtx.cadena(1));
        } else {
            return this._jsValorExpr(asigCtx.valor());
        }
    }
}
