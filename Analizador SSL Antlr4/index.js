// index.js — Punto de entrada del Analizador Sintáctico
// Sintaxis y Semántica de Lenguajes — SSL UTN FRM
// Tema: 25914_11 | Gramática: lenguaje de texto con funciones

import fs from 'fs';
import readline from 'readline';
import antlr4 from 'antlr4';
import LenguajeLexer  from './generated/LenguajeLexer.js';
import LenguajeParser from './generated/LenguajeParser.js';
import CustomVisitor   from './CustomVisitor.js';

const { InputStream, CommonTokenStream, error, tree } = antlr4;

// ─── LISTENER DE ERRORES PERSONALIZADO ──────────────────────────────────────

class ErrorListener extends error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errores.push({ line, column, msg });
    }
}

// ─── LEER ENTRADA DESDE CONSOLA (fallback) ──────────────────────────────────

async function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        let lines = [];
        console.log('Ingrese el código (línea vacía + Enter para terminar):');
        rl.on('line', line => {
            if (line === '') { rl.close(); resolve(lines.join('\n')); }
            else lines.push(line);
        });
    });
}

// ─── ÁRBOL DE DERIVACIÓN EN TEXTO ────────────────────────────────────────────

function arbolATexto(nodo, parser, indent) {
    indent = indent || 0;
    const pad = '  '.repeat(indent);

    if (nodo instanceof tree.TerminalNode) {
        const tok = nodo.symbol;
        const tipoNombre = parser.symbolicNames
            ? (parser.symbolicNames[tok.type] || String(tok.type))
            : String(tok.type);
        if (tipoNombre === 'EOF' || tipoNombre === '<EOF>') return '';
        return pad + '[' + tipoNombre + '] "' + tok.text + '"';
    }

    const nombreRegla = parser.ruleNames && parser.ruleNames[nodo.ruleIndex]
        ? parser.ruleNames[nodo.ruleIndex]
        : '?';

    let lineas = [pad + '(' + nombreRegla + ')'];
    for (let i = 0; i < nodo.getChildCount(); i++) {
        const sub = arbolATexto(nodo.getChild(i), parser, indent + 1);
        if (sub) lineas.push(sub);
    }
    return lineas.join('\n');
}

// ─── TABLA DE LEXEMAS Y TOKENS ───────────────────────────────────────────────

function generarTablaTokens(input) {
    const stream2 = new InputStream(input);
    const lexer2  = new LenguajeLexer(stream2);
    lexer2.removeErrorListeners();

    const tokens = [];
    let tok = lexer2.nextToken();
    while (tok.type !== antlr4.Token.EOF) {
        const nombre = LenguajeLexer.symbolicNames
            ? (LenguajeLexer.symbolicNames[tok.type] || String(tok.type))
            : String(tok.type);
        tokens.push({ lexema: tok.text, token: nombre, linea: tok.line, col: tok.column });
        tok = lexer2.nextToken();
    }
    return tokens;
}

function imprimirTabla(tokens) {
    if (tokens.length === 0) { console.log('(sin tokens)\n'); return; }
    const aL = Math.max(8, ...tokens.map(t => t.lexema.length)) + 2;
    const aT = Math.max(8, ...tokens.map(t => t.token.length))  + 2;
    const sep = '+' + '-'.repeat(aL) + '+' + '-'.repeat(aT) + '+------+-------+';

    console.log('\n╔══════════════════════════════════════════╗');
    console.log('║       TABLA DE LEXEMAS Y TOKENS          ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log(sep);
    console.log('| ' + 'LEXEMA'.padEnd(aL-2) + ' | ' + 'TOKEN'.padEnd(aT-2) + ' | LIN. |  COL. |');
    console.log(sep);

    for (const { lexema, token, linea, col } of tokens) {
        const lex = lexema.length > aL-2 ? lexema.slice(0, aL-5) + '...' : lexema;
        console.log('| ' + lex.padEnd(aL-2) + ' | ' + token.padEnd(aT-2) +
            ' | ' + String(linea).padStart(4) + ' | ' + String(col).padStart(5) + ' |');
    }
    console.log(sep);
    console.log('Total de tokens: ' + tokens.length + '\n');
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main() {
    // 1. Leer entrada
    let input;
    const archivoArg = process.argv[2] || 'input.txt';
    try {
        input = fs.readFileSync(archivoArg, 'utf8');
        console.log('\n📄 Archivo de entrada: ' + archivoArg + '\n');
    } catch {
        console.log("⚠  No se encontró '" + archivoArg + "'. Ingrese el código por consola.\n");
        input = await leerCadena();
    }

    const sep = '─'.repeat(50);
    console.log(sep);
    console.log('CÓDIGO FUENTE:');
    console.log(sep);
    console.log(input);
    console.log(sep);

    // 2. Tabla de tokens (usando InputStream 4.11)
    const tablaTokens = generarTablaTokens(input);
    imprimirTabla(tablaTokens);

    // 3. Parser
    const inputStream = new InputStream(input);
    const lexer       = new LenguajeLexer(inputStream);
    const errLexer    = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errLexer);

    const tokenStream = new CommonTokenStream(lexer);
    const parser      = new LenguajeParser(tokenStream);
    const errParser   = new ErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errParser);

    const parseTree = parser.programa();

    // 4. Reporte de errores
    const todosErrores = [...errLexer.errores, ...errParser.errores];

    if (todosErrores.length > 0) {
        console.log('\n╔══════════════════════════════════════════╗');
        console.log('║         ERRORES DETECTADOS               ║');
        console.log('╚══════════════════════════════════════════╝');
        for (const { line, column, msg } of todosErrores) {
            console.error('  ✗ Línea ' + line + ', columna ' + column + ': ' + msg);
        }
        console.log('\n❌ La entrada contiene errores. Análisis detenido.\n');
        process.exit(1);
    }

    console.log('\n✅ Análisis léxico y sintáctico: ENTRADA VÁLIDA\n');

    // 5. Árbol de análisis sintáctico
    console.log('╔══════════════════════════════════════════╗');
    console.log('║      ÁRBOL DE ANÁLISIS SINTÁCTICO        ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log(arbolATexto(parseTree, parser));

    // 6. Interpretación
    console.log('\n╔══════════════════════════════════════════╗');
    console.log('║       EJECUCIÓN (INTERPRETACIÓN)         ║');
    console.log('╚══════════════════════════════════════════╝');

    const visitor = new CustomVisitor();
    try {
        visitor.visit(parseTree);
    } catch (e) {
        if (e && e.__retorno__) {
            // retorno en nivel superior: ignorar
        } else {
            console.error('\n❌ Error durante la interpretación: ' + e.message);
            process.exit(1);
        }
    }

    // 7. Traducción a JavaScript
    console.log('\n╔══════════════════════════════════════════╗');
    console.log('║       TRADUCCIÓN A JAVASCRIPT            ║');
    console.log('╚══════════════════════════════════════════╝');
    console.log(visitor.codigoJS.join('\n'));
    console.log('');
}

main();
