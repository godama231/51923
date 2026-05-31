// Generated from d:\User\OneDrive\Desktop\proyecto-final\proyecto-final\Lenguaje.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0018\u009c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0003\u0002\u0007\u0002(\n\u0002\f\u0002\u000e\u0002+\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00033\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004?\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005K\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006S\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\\",
    "\n\u0007\f\u0007\u000e\u0007_\u000b\u0007\u0003\b\u0007\bb\n\b\f\b\u000e",
    "\be\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tk\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0081\n\r\f\r\u000e\r\u0084",
    "\u000b\r\u0005\r\u0086\n\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0090\n\u000f",
    "\u0003\u0010\u0003\u0010\u0005\u0010\u0094\n\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0002",
    "\u0002\u0014\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$\u0002\u0003\u0003\u0002\u0005\t\u0002\u009b\u0002",
    ")\u0003\u0002\u0002\u0002\u00042\u0003\u0002\u0002\u0002\u0006>\u0003",
    "\u0002\u0002\u0002\bJ\u0003\u0002\u0002\u0002\nL\u0003\u0002\u0002\u0002",
    "\fX\u0003\u0002\u0002\u0002\u000ec\u0003\u0002\u0002\u0002\u0010j\u0003",
    "\u0002\u0002\u0002\u0012l\u0003\u0002\u0002\u0002\u0014q\u0003\u0002",
    "\u0002\u0002\u0016w\u0003\u0002\u0002\u0002\u0018{\u0003\u0002\u0002",
    "\u0002\u001a\u008a\u0003\u0002\u0002\u0002\u001c\u008f\u0003\u0002\u0002",
    "\u0002\u001e\u0093\u0003\u0002\u0002\u0002 \u0095\u0003\u0002\u0002",
    "\u0002\"\u0097\u0003\u0002\u0002\u0002$\u0099\u0003\u0002\u0002\u0002",
    "&(\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002\u0002(+\u0003\u0002",
    "\u0002\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*,",
    "\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002,-\u0007\u0002\u0002",
    "\u0003-\u0003\u0003\u0002\u0002\u0002.3\u0005\u0006\u0004\u0002/3\u0005",
    "\n\u0006\u000203\u0005\u0014\u000b\u000213\u0005\u0018\r\u00022.\u0003",
    "\u0002\u0002\u00022/\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u0002",
    "21\u0003\u0002\u0002\u00023\u0005\u0003\u0002\u0002\u000245\u0007\u0003",
    "\u0002\u000256\u0005$\u0013\u000267\u0007\f\u0002\u000278\u0005\b\u0005",
    "\u000289\u0007\r\u0002\u00029?\u0003\u0002\u0002\u0002:;\u0007\u0003",
    "\u0002\u0002;<\u0005$\u0013\u0002<=\u0007\r\u0002\u0002=?\u0003\u0002",
    "\u0002\u0002>4\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002?\u0007",
    "\u0003\u0002\u0002\u0002@A\u0005\u001a\u000e\u0002AB\u0007\u000f\u0002",
    "\u0002BC\u0005\u001e\u0010\u0002CD\u0007\u0010\u0002\u0002DK\u0003\u0002",
    "\u0002\u0002EF\u0005\u001e\u0010\u0002FG\u0007\u0013\u0002\u0002GH\u0005",
    "\u001e\u0010\u0002HK\u0003\u0002\u0002\u0002IK\u0005\u001c\u000f\u0002",
    "J@\u0003\u0002\u0002\u0002JE\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002",
    "\u0002K\t\u0003\u0002\u0002\u0002LM\u0007\u0004\u0002\u0002MR\u0005",
    "$\u0013\u0002NO\u0007\u000f\u0002\u0002OP\u0005\f\u0007\u0002PQ\u0007",
    "\u0010\u0002\u0002QS\u0003\u0002\u0002\u0002RN\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0007\u0011\u0002",
    "\u0002UV\u0005\u000e\b\u0002VW\u0007\u0012\u0002\u0002W\u000b\u0003",
    "\u0002\u0002\u0002X]\u0005$\u0013\u0002YZ\u0007\u000e\u0002\u0002Z\\",
    "\u0005$\u0013\u0002[Y\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002",
    "][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\r\u0003\u0002",
    "\u0002\u0002_]\u0003\u0002\u0002\u0002`b\u0005\u0010\t\u0002a`\u0003",
    "\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002",
    "cd\u0003\u0002\u0002\u0002d\u000f\u0003\u0002\u0002\u0002ec\u0003\u0002",
    "\u0002\u0002fk\u0005\u0006\u0004\u0002gk\u0005\u0012\n\u0002hk\u0005",
    "\u0014\u000b\u0002ik\u0005\u0016\f\u0002jf\u0003\u0002\u0002\u0002j",
    "g\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002ji\u0003\u0002\u0002",
    "\u0002k\u0011\u0003\u0002\u0002\u0002lm\u0005$\u0013\u0002mn\u0007\f",
    "\u0002\u0002no\u0005\b\u0005\u0002op\u0007\r\u0002\u0002p\u0013\u0003",
    "\u0002\u0002\u0002qr\u0007\n\u0002\u0002rs\u0007\u000f\u0002\u0002s",
    "t\u0005\u001c\u000f\u0002tu\u0007\u0010\u0002\u0002uv\u0007\r\u0002",
    "\u0002v\u0015\u0003\u0002\u0002\u0002wx\u0007\u000b\u0002\u0002xy\u0005",
    "\u001c\u000f\u0002yz\u0007\r\u0002\u0002z\u0017\u0003\u0002\u0002\u0002",
    "{|\u0005$\u0013\u0002|\u0085\u0007\u000f\u0002\u0002}\u0082\u0005\u001c",
    "\u000f\u0002~\u007f\u0007\u000e\u0002\u0002\u007f\u0081\u0005\u001c",
    "\u000f\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0084\u0003\u0002",
    "\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\u0082\u0083\u0003\u0002",
    "\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002",
    "\u0002\u0002\u0085}\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u0010",
    "\u0002\u0002\u0088\u0089\u0007\r\u0002\u0002\u0089\u0019\u0003\u0002",
    "\u0002\u0002\u008a\u008b\t\u0002\u0002\u0002\u008b\u001b\u0003\u0002",
    "\u0002\u0002\u008c\u0090\u0005 \u0011\u0002\u008d\u0090\u0005\"\u0012",
    "\u0002\u008e\u0090\u0005$\u0013\u0002\u008f\u008c\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u001d\u0003\u0002\u0002\u0002\u0091\u0094\u0005 \u0011",
    "\u0002\u0092\u0094\u0005$\u0013\u0002\u0093\u0091\u0003\u0002\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u001f\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007\u0014\u0002\u0002\u0096!\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\u0015\u0002\u0002\u0098#\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0007\u0016\u0002\u0002\u009a%\u0003\u0002\u0002",
    "\u0002\u000e)2>JR]cj\u0082\u0085\u008f\u0093"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'variable'", null, null, null, "'longitud'", 
                            "'invertir'", "'reemplazar'", "'imprimir'", 
                            "'devolver'", "'='", "';'", "','", "'('", "')'", 
                            "'{'", "'}'", "'+'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "MAYUSCULAS", 
                             "MINUSCULAS", "LONGITUD", "INVERTIR", "REEMPLAZAR", 
                             "IMPRIMIR", "DEVOLVER", "ASIGN", "PUNTO_COMA", 
                             "COMA", "LPAREN", "RPAREN", "LLAVE_IZQ", "LLAVE_DER", 
                             "MAS", "TEXTO", "NUMERO", "IDENTIFICADOR", 
                             "WS", "COMENTARIO" ];
    static ruleNames = [ "programa", "sentencia", "declaracion", "asignable", 
                         "funcion", "argumentos", "instrucciones", "instruccion", 
                         "asignacion", "impresion", "retorno", "ejecucion", 
                         "transformacion", "valor", "cadena", "texto", "numero", 
                         "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LenguajeParser.VARIABLE) | (1 << LenguajeParser.FUNCION) | (1 << LenguajeParser.IMPRIMIR) | (1 << LenguajeParser.IDENTIFICADOR))) !== 0)) {
	            this.state = 36;
	            this.sentencia();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(LenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_sentencia);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LenguajeParser.VARIABLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaracion();
	            break;
	        case LenguajeParser.FUNCION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.funcion();
	            break;
	        case LenguajeParser.IMPRIMIR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.impresion();
	            break;
	        case LenguajeParser.IDENTIFICADOR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.ejecucion();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_declaracion);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclConAsignContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(LenguajeParser.VARIABLE);
	            this.state = 51;
	            this.nombre();
	            this.state = 52;
	            this.match(LenguajeParser.ASIGN);
	            this.state = 53;
	            this.asignable();
	            this.state = 54;
	            this.match(LenguajeParser.PUNTO_COMA);
	            break;

	        case 2:
	            localctx = new DeclSinAsignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(LenguajeParser.VARIABLE);
	            this.state = 57;
	            this.nombre();
	            this.state = 58;
	            this.match(LenguajeParser.PUNTO_COMA);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignable() {
	    let localctx = new AsignableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_asignable);
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AsignTransformContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.transformacion();
	            this.state = 63;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 64;
	            this.cadena();
	            this.state = 65;
	            this.match(LenguajeParser.RPAREN);
	            break;

	        case 2:
	            localctx = new AsignConcatContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.cadena();
	            this.state = 68;
	            this.match(LenguajeParser.MAS);
	            this.state = 69;
	            this.cadena();
	            break;

	        case 3:
	            localctx = new AsignValorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.valor();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LenguajeParser.RULE_funcion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(LenguajeParser.FUNCION);
	        this.state = 75;
	        this.nombre();
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LenguajeParser.LPAREN) {
	            this.state = 76;
	            this.match(LenguajeParser.LPAREN);
	            this.state = 77;
	            this.argumentos();
	            this.state = 78;
	            this.match(LenguajeParser.RPAREN);
	        }

	        this.state = 82;
	        this.match(LenguajeParser.LLAVE_IZQ);
	        this.state = 83;
	        this.instrucciones();
	        this.state = 84;
	        this.match(LenguajeParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LenguajeParser.RULE_argumentos);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.nombre();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LenguajeParser.COMA) {
	            this.state = 87;
	            this.match(LenguajeParser.COMA);
	            this.state = 88;
	            this.nombre();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_instrucciones);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LenguajeParser.VARIABLE) | (1 << LenguajeParser.IMPRIMIR) | (1 << LenguajeParser.DEVOLVER) | (1 << LenguajeParser.IDENTIFICADOR))) !== 0)) {
	            this.state = 94;
	            this.instruccion();
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LenguajeParser.VARIABLE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.declaracion();
	            break;
	        case LenguajeParser.IDENTIFICADOR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.asignacion();
	            break;
	        case LenguajeParser.IMPRIMIR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.impresion();
	            break;
	        case LenguajeParser.DEVOLVER:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.retorno();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.nombre();
	        this.state = 107;
	        this.match(LenguajeParser.ASIGN);
	        this.state = 108;
	        this.asignable();
	        this.state = 109;
	        this.match(LenguajeParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LenguajeParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(LenguajeParser.IMPRIMIR);
	        this.state = 112;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 113;
	        this.valor();
	        this.state = 114;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 115;
	        this.match(LenguajeParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LenguajeParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(LenguajeParser.DEVOLVER);
	        this.state = 118;
	        this.valor();
	        this.state = 119;
	        this.match(LenguajeParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LenguajeParser.RULE_ejecucion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.nombre();
	        this.state = 122;
	        this.match(LenguajeParser.LPAREN);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LenguajeParser.TEXTO) | (1 << LenguajeParser.NUMERO) | (1 << LenguajeParser.IDENTIFICADOR))) !== 0)) {
	            this.state = 123;
	            this.valor();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LenguajeParser.COMA) {
	                this.state = 124;
	                this.match(LenguajeParser.COMA);
	                this.state = 125;
	                this.valor();
	                this.state = 130;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 133;
	        this.match(LenguajeParser.RPAREN);
	        this.state = 134;
	        this.match(LenguajeParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LenguajeParser.RULE_transformacion);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LenguajeParser.MAYUSCULAS) | (1 << LenguajeParser.MINUSCULAS) | (1 << LenguajeParser.LONGITUD) | (1 << LenguajeParser.INVERTIR) | (1 << LenguajeParser.REEMPLAZAR))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LenguajeParser.RULE_valor);
	    try {
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LenguajeParser.TEXTO:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.texto();
	            break;
	        case LenguajeParser.NUMERO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.numero();
	            break;
	        case LenguajeParser.IDENTIFICADOR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LenguajeParser.RULE_cadena);
	    try {
	        this.state = 145;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LenguajeParser.TEXTO:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.texto();
	            break;
	        case LenguajeParser.IDENTIFICADOR:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.nombre();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LenguajeParser.RULE_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(LenguajeParser.TEXTO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LenguajeParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(LenguajeParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LenguajeParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(LenguajeParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.VARIABLE = 1;
LenguajeParser.FUNCION = 2;
LenguajeParser.MAYUSCULAS = 3;
LenguajeParser.MINUSCULAS = 4;
LenguajeParser.LONGITUD = 5;
LenguajeParser.INVERTIR = 6;
LenguajeParser.REEMPLAZAR = 7;
LenguajeParser.IMPRIMIR = 8;
LenguajeParser.DEVOLVER = 9;
LenguajeParser.ASIGN = 10;
LenguajeParser.PUNTO_COMA = 11;
LenguajeParser.COMA = 12;
LenguajeParser.LPAREN = 13;
LenguajeParser.RPAREN = 14;
LenguajeParser.LLAVE_IZQ = 15;
LenguajeParser.LLAVE_DER = 16;
LenguajeParser.MAS = 17;
LenguajeParser.TEXTO = 18;
LenguajeParser.NUMERO = 19;
LenguajeParser.IDENTIFICADOR = 20;
LenguajeParser.WS = 21;
LenguajeParser.COMENTARIO = 22;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_sentencia = 1;
LenguajeParser.RULE_declaracion = 2;
LenguajeParser.RULE_asignable = 3;
LenguajeParser.RULE_funcion = 4;
LenguajeParser.RULE_argumentos = 5;
LenguajeParser.RULE_instrucciones = 6;
LenguajeParser.RULE_instruccion = 7;
LenguajeParser.RULE_asignacion = 8;
LenguajeParser.RULE_impresion = 9;
LenguajeParser.RULE_retorno = 10;
LenguajeParser.RULE_ejecucion = 11;
LenguajeParser.RULE_transformacion = 12;
LenguajeParser.RULE_valor = 13;
LenguajeParser.RULE_cadena = 14;
LenguajeParser.RULE_texto = 15;
LenguajeParser.RULE_numero = 16;
LenguajeParser.RULE_nombre = 17;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeParser.EOF, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_sentencia;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	funcion() {
	    return this.getTypedRuleContext(FuncionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	ejecucion() {
	    return this.getTypedRuleContext(EjecucionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclConAsignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(LenguajeParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	ASIGN() {
	    return this.getToken(LenguajeParser.ASIGN, 0);
	};

	asignable() {
	    return this.getTypedRuleContext(AsignableContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterDeclConAsign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitDeclConAsign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitDeclConAsign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.DeclConAsignContext = DeclConAsignContext;

class DeclSinAsignContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VARIABLE() {
	    return this.getToken(LenguajeParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterDeclSinAsign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitDeclSinAsign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitDeclSinAsign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.DeclSinAsignContext = DeclSinAsignContext;

class AsignableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignable;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignConcatContext extends AsignableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(LenguajeParser.MAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignConcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignConcat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignConcat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AsignConcatContext = AsignConcatContext;

class AsignTransformContext extends AsignableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignTransform(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignTransform(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignTransform(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AsignTransformContext = AsignTransformContext;

class AsignValorContext extends AsignableContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

LenguajeParser.AsignValorContext = AsignValorContext;

class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(LenguajeParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(LenguajeParser.LLAVE_IZQ, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(LenguajeParser.LLAVE_DER, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_argumentos;
    }

	nombre = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NombreContext);
	    } else {
	        return this.getTypedRuleContext(NombreContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.COMA);
	    } else {
	        return this.getToken(LenguajeParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignacion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	ASIGN() {
	    return this.getToken(LenguajeParser.ASIGN, 0);
	};

	asignable() {
	    return this.getTypedRuleContext(AsignableContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(LenguajeParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(LenguajeParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_ejecucion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LPAREN() {
	    return this.getToken(LenguajeParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(LenguajeParser.RPAREN, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(LenguajeParser.PUNTO_COMA, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LenguajeParser.COMA);
	    } else {
	        return this.getToken(LenguajeParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(LenguajeParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(LenguajeParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(LenguajeParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(LenguajeParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(LenguajeParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_cadena;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_texto;
    }

	TEXTO() {
	    return this.getToken(LenguajeParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_nombre;
    }

	IDENTIFICADOR() {
	    return this.getToken(LenguajeParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.SentenciaContext = SentenciaContext; 
LenguajeParser.DeclaracionContext = DeclaracionContext; 
LenguajeParser.AsignableContext = AsignableContext; 
LenguajeParser.FuncionContext = FuncionContext; 
LenguajeParser.ArgumentosContext = ArgumentosContext; 
LenguajeParser.InstruccionesContext = InstruccionesContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.AsignacionContext = AsignacionContext; 
LenguajeParser.ImpresionContext = ImpresionContext; 
LenguajeParser.RetornoContext = RetornoContext; 
LenguajeParser.EjecucionContext = EjecucionContext; 
LenguajeParser.TransformacionContext = TransformacionContext; 
LenguajeParser.ValorContext = ValorContext; 
LenguajeParser.CadenaContext = CadenaContext; 
LenguajeParser.TextoContext = TextoContext; 
LenguajeParser.NumeroContext = NumeroContext; 
LenguajeParser.NombreContext = NombreContext; 
