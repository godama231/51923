# Analizador Sintáctico — SSL UTN FRM
**Tema:** 25914_11 | **Materia:** Sintaxis y Semántica de Lenguajes de Programación | **Legajo:** 51923

Analizador léxico y sintáctico construido con **ANTLR4** y **JavaScript (Node.js)** para un lenguaje de manipulación de texto con declaración de variables y funciones.

---

## Requisitos previos

| Herramienta | Versión mínima | Verificación |
|---|---|---|
| Java (JRE) | 8 o superior | `java -version` |
| Node.js | 14 o superior | `node -v` |
| npm | 6 o superior | `npm -v` |

> **Nota:** el jar incluido es `antlr-4.9.3-complete.jar`, compatible con **Java 8**. Si tenés Java 11 o superior también funciona.

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/godama231/51923.git
cd 51923

# 2. Abrir en Visual Studio Code
code .

# 3. Instalar dependencias (terminal bash)
npm install
```

> La carpeta `generated/` ya viene incluida. **No es necesario regenerar** para ejecutar el analizador.

Si modificás `Lenguaje.g4` y necesitás regenerar:

```bash
npm run generar
```

---

## Ejecución

```bash
# Archivo por defecto (input.txt)
node index.js

# Archivo específico
node index.js ejemplos/valido1.txt
node index.js ejemplos/valido2.txt
node index.js ejemplos/error1.txt
node index.js ejemplos/error2.txt
```

---

## Archivos de ejemplo

| Archivo | Tipo | Descripción |
|---|---|---|
| `ejemplos/valido1.txt` | ✅ Válido | Ejemplo del enunciado: `mayusculas()` e `imprimir()` |
| `ejemplos/valido2.txt` | ✅ Válido | Variables con `invertir` y `longitud`, función con `devolver` |
| `ejemplos/error1.txt` | ❌ Error | Falta `;` al final de la primera declaración |
| `ejemplos/error2.txt` | ❌ Error | Función sin cerrar la llave `}` |

---

## Salida del analizador

Para cada entrada el programa produce cuatro secciones:

**1. Tabla de lexemas y tokens** — todos los tokens reconocidos con lexema, tipo, línea y columna.

**2. Árbol de análisis sintáctico** — árbol de derivación concreto en formato texto indentado.

**3. Ejecución (interpretación)** — resultado de ejecutar el código, mostrando la salida de cada `imprimir()`.

**4. Traducción a JavaScript** — equivalente JavaScript del código fuente.

En caso de error léxico o sintáctico se muestra la línea, columna y causa, y el análisis se detiene.

---

## Ejemplo completo (valido1.txt)

**Entrada:**
```
variable saludo = "hola mundo";
variable enMayusculas = mayusculas(saludo);
imprimir(enMayusculas);
```

**Salida:**
```
✅ Análisis léxico y sintáctico: ENTRADA VÁLIDA

╔══════════════════════════════════════════╗
║       TABLA DE LEXEMAS Y TOKENS          ║
╚══════════════════════════════════════════╝
+--------------+---------------+------+-------+
| LEXEMA       | TOKEN         | LIN. |  COL. |
+--------------+---------------+------+-------+
| variable     | VARIABLE      |    1 |     0 |
| saludo       | IDENTIFICADOR |    1 |     9 |
| =            | ASIGN         |    1 |    16 |
| "hola mundo" | TEXTO         |    1 |    18 |
| ;            | PUNTO_COMA    |    1 |    30 |
...
+--------------+---------------+------+-------+

╔══════════════════════════════════════════╗
║      ÁRBOL DE ANÁLISIS SINTÁCTICO        ║
╚══════════════════════════════════════════╝
(programa)
  (sentencia)
    (declaracion)
      [VARIABLE] "variable"
      (nombre)
        [IDENTIFICADOR] "saludo"
      ...

╔══════════════════════════════════════════╗
║       EJECUCIÓN (INTERPRETACIÓN)         ║
╚══════════════════════════════════════════╝
  → HOLA MUNDO

╔══════════════════════════════════════════╗
║       TRADUCCIÓN A JAVASCRIPT            ║
╚══════════════════════════════════════════╝
let saludo = "hola mundo";
let enMayusculas = saludo.toUpperCase();
console.log(enMayusculas);
```

---

## Gramática implementada (Lenguaje.g4)

```
<programa>      ::= { <declaración> | <función> | <impresión> | <ejecución> }
<declaración>   ::= "variable" <nombre> [ "=" <asignable> ] ";"
<asignable>     ::= <transformación> "(" <cadena> ")"
                 |  <cadena> "+" <cadena>
                 |  <valor>
<función>       ::= "funcion" <nombre> [ "(" <argumentos> ")" ] "{" <instrucciones> "}"
<argumentos>    ::= <nombre> { "," <nombre> }
<instrucciones> ::= { <declaración> | <asignación> | <impresión> | <retorno> }
<transformación>::= "mayusculas" | "minusculas" | "longitud" | "invertir" | "reemplazar"
<impresión>     ::= "imprimir" "(" <valor> ")" ";"
<retorno>       ::= "devolver" <valor> ";"
<valor>         ::= <texto> | <número> | <nombre>
<nombre>        ::= [a-zA-Z_][a-zA-Z0-9_]*
```

---

## Visualización del árbol en VS Code (opcional)

Con el plugin **ANTLR4 grammar syntax support** instalado en VS Code:

1. Abrí la carpeta del proyecto en VS Code
2. Abrí `Lenguaje.g4`
3. Editá `input.txt` con el código a analizar
4. Presioná **F5** — aparece el parse tree gráfico

---

## Estructura del proyecto

```
.
├── .vscode/
│   └── launch.json              ← Configuración para parse tree visual (F5)
├── generated/                   ← Lexer y parser autogenerados por ANTLR
│   ├── LenguajeLexer.js
│   ├── LenguajeParser.js
│   ├── LenguajeVisitor.js
│   └── LenguajeListener.js
├── ejemplos/
│   ├── valido1.txt
│   ├── valido2.txt
│   ├── error1.txt
│   └── error2.txt
├── node_modules/
├── .gitignore
├── CustomVisitor.js             ← Visitor: interpretación + traducción JS
├── Lenguaje.g4                  ← Gramática ANTLR4
├── antlr-4.9.3-complete.jar     ← Jar de ANTLR compatible con Java 8+
├── index.js                     ← Punto de entrada principal
├── input.txt                    ← Entrada por defecto
├── package.json
├── package-lock.json
└── README.md
```
