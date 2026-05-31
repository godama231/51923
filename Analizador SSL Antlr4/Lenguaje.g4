grammar Lenguaje;

// ─── REGLAS SINTÁCTICAS ───────────────────────────────────────────────────

programa
    : sentencia* EOF
    ;

sentencia
    : declaracion
    | funcion
    | impresion
| ejecucion
    ;

// variable x;
// variable x = valor;
// variable x = transformacion(cadena);
// variable x = cadena + cadena;
declaracion
    : VARIABLE nombre ASIGN asignable PUNTO_COMA   #declConAsign
    | VARIABLE nombre PUNTO_COMA                   #declSinAsign
    ;

asignable
    : transformacion LPAREN cadena RPAREN   #asignTransform
    | cadena MAS cadena                     #asignConcat
    | valor                                 #asignValor
    ;

funcion
    : FUNCION nombre ( LPAREN argumentos RPAREN )? LLAVE_IZQ instrucciones LLAVE_DER
    ;

argumentos
    : nombre ( COMA nombre )*
    ;

instrucciones
    : instruccion*
    ;

instruccion
    : declaracion
    | asignacion
    | impresion
    | retorno
    ;

// Asignación interna a variable existente: nombre = asignable;
asignacion
    : nombre ASIGN asignable PUNTO_COMA
    ;

impresion
    : IMPRIMIR LPAREN valor RPAREN PUNTO_COMA
    ;

retorno
    : DEVOLVER valor PUNTO_COMA
    ;

// Llamada a función definida por el usuario
ejecucion
    : nombre LPAREN ( valor ( COMA valor )* )? RPAREN PUNTO_COMA
    ;

transformacion
    : MAYUSCULAS
    | MINUSCULAS
    | LONGITUD
    | INVERTIR
    | REEMPLAZAR
    ;

valor
    : texto
    | numero
    | nombre
    ;

cadena
    : texto
    | nombre
    ;

texto  : TEXTO ;
numero : NUMERO ;
nombre : IDENTIFICADOR ;

// ─── REGLAS LÉXICAS ───────────────────────────────────────────────────────

VARIABLE    : 'variable' ;
FUNCION     : 'función' | 'funcion' ;
MAYUSCULAS  : 'mayúsculas' | 'mayusculas' ;
MINUSCULAS  : 'minúsculas' | 'minusculas' ;
LONGITUD    : 'longitud' ;
INVERTIR    : 'invertir' ;
REEMPLAZAR  : 'reemplazar' ;
IMPRIMIR    : 'imprimir' ;
DEVOLVER    : 'devolver' ;

ASIGN       : '=' ;
PUNTO_COMA  : ';' ;
COMA        : ',' ;
LPAREN      : '(' ;
RPAREN      : ')' ;
LLAVE_IZQ   : '{' ;
LLAVE_DER   : '}' ;
MAS         : '+' ;

TEXTO       : '"' ( ~["\r\n\\] | '\\' . )* '"' ;
NUMERO      : '-'? [0-9]+ ( '.' [0-9]+ )? ;

IDENTIFICADOR : [a-zA-Z_\u00C0-\u024F] [a-zA-Z0-9_\u00C0-\u024F]* ;

WS          : [ \t\r\n]+ -> skip ;
COMENTARIO  : '//' ~[\r\n]* -> skip ;
