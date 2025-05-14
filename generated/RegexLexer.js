// Generated from c:/Users/nicol/GIT/51889/Regex.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,75,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,
13,1,13,1,14,1,14,5,14,64,8,14,10,14,12,14,67,9,14,1,15,4,15,70,8,15,11,
15,12,15,71,1,15,1,15,0,0,16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
10,21,11,23,12,25,13,27,14,29,15,31,16,1,0,3,3,0,48,57,65,90,97,122,1,0,
48,57,3,0,9,10,13,13,32,32,76,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,35,1,0,0,0,5,37,1,0,0,0,7,39,1,0,0,0,9,41,
1,0,0,0,11,43,1,0,0,0,13,45,1,0,0,0,15,47,1,0,0,0,17,49,1,0,0,0,19,51,1,
0,0,0,21,53,1,0,0,0,23,55,1,0,0,0,25,57,1,0,0,0,27,59,1,0,0,0,29,61,1,0,
0,0,31,69,1,0,0,0,33,34,5,40,0,0,34,2,1,0,0,0,35,36,5,41,0,0,36,4,1,0,0,
0,37,38,5,91,0,0,38,6,1,0,0,0,39,40,5,93,0,0,40,8,1,0,0,0,41,42,5,123,0,
0,42,10,1,0,0,0,43,44,5,125,0,0,44,12,1,0,0,0,45,46,5,124,0,0,46,14,1,0,
0,0,47,48,5,63,0,0,48,16,1,0,0,0,49,50,5,43,0,0,50,18,1,0,0,0,51,52,5,45,
0,0,52,20,1,0,0,0,53,54,5,42,0,0,54,22,1,0,0,0,55,56,5,44,0,0,56,24,1,0,
0,0,57,58,5,94,0,0,58,26,1,0,0,0,59,60,7,0,0,0,60,28,1,0,0,0,61,65,7,1,0,
0,62,64,7,1,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,
66,30,1,0,0,0,67,65,1,0,0,0,68,70,7,2,0,0,69,68,1,0,0,0,70,71,1,0,0,0,71,
69,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,6,15,0,0,74,32,1,0,0,0,3,0,
65,71,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class RegexLexer extends antlr4.Lexer {

    static grammarFileName = "Regex.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", 
                         "'|'", "'?'", "'+'", "'-'", "'*'", "','", "'^'" ];
	static symbolicNames = [ null, "LPARENS", "RPARENS", "LBRACK", "RBRACK", 
                          "LBRACE", "RBRACE", "OR", "QMARK", "SUM", "SUB", 
                          "MUL", "COMA", "CARET", "CARACTER", "INT", "WS" ];
	static ruleNames = [ "LPARENS", "RPARENS", "LBRACK", "RBRACK", "LBRACE", 
                      "RBRACE", "OR", "QMARK", "SUM", "SUB", "MUL", "COMA", 
                      "CARET", "CARACTER", "INT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

RegexLexer.EOF = antlr4.Token.EOF;
RegexLexer.LPARENS = 1;
RegexLexer.RPARENS = 2;
RegexLexer.LBRACK = 3;
RegexLexer.RBRACK = 4;
RegexLexer.LBRACE = 5;
RegexLexer.RBRACE = 6;
RegexLexer.OR = 7;
RegexLexer.QMARK = 8;
RegexLexer.SUM = 9;
RegexLexer.SUB = 10;
RegexLexer.MUL = 11;
RegexLexer.COMA = 12;
RegexLexer.CARET = 13;
RegexLexer.CARACTER = 14;
RegexLexer.INT = 15;
RegexLexer.WS = 16;



