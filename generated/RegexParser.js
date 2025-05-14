// Generated from c:/Users/nicol/GIT/51889/Regex.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RegexListener from './RegexListener.js';
import RegexVisitor from './RegexVisitor.js';

const serializedATN = [4,1,16,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,3,0,24,8,0,1,1,4,1,27,
8,1,11,1,12,1,28,1,2,1,2,3,2,33,8,2,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,4,1,
4,1,5,1,5,3,5,46,8,5,1,5,1,5,4,5,50,8,5,11,5,12,5,51,1,5,1,5,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,67,8,7,3,7,69,8,7,1,7,1,7,3,7,73,8,7,
1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,0,81,0,20,1,0,0,0,
2,26,1,0,0,0,4,30,1,0,0,0,6,37,1,0,0,0,8,39,1,0,0,0,10,43,1,0,0,0,12,55,
1,0,0,0,14,72,1,0,0,0,16,74,1,0,0,0,18,76,1,0,0,0,20,23,3,2,1,0,21,22,5,
7,0,0,22,24,3,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,27,3,4,2,
0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,
32,3,6,3,0,31,33,3,14,7,0,32,31,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,38,
3,16,8,0,35,38,3,8,4,0,36,38,3,10,5,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,
1,0,0,0,38,7,1,0,0,0,39,40,5,1,0,0,40,41,3,0,0,0,41,42,5,2,0,0,42,9,1,0,
0,0,43,45,5,3,0,0,44,46,5,13,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,49,1,0,0,
0,47,50,3,12,6,0,48,50,3,16,8,0,49,47,1,0,0,0,49,48,1,0,0,0,50,51,1,0,0,
0,51,49,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,53,54,5,4,0,0,54,11,1,0,0,0,
55,56,3,16,8,0,56,57,5,10,0,0,57,58,3,16,8,0,58,13,1,0,0,0,59,73,5,11,0,
0,60,73,5,9,0,0,61,73,5,8,0,0,62,63,5,5,0,0,63,68,3,18,9,0,64,66,5,12,0,
0,65,67,3,18,9,0,66,65,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,64,1,0,0,0,
68,69,1,0,0,0,69,70,1,0,0,0,70,71,5,6,0,0,71,73,1,0,0,0,72,59,1,0,0,0,72,
60,1,0,0,0,72,61,1,0,0,0,72,62,1,0,0,0,73,15,1,0,0,0,74,75,5,14,0,0,75,17,
1,0,0,0,76,77,5,15,0,0,77,19,1,0,0,0,10,23,28,32,37,45,49,51,66,68,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RegexParser extends antlr4.Parser {

    static grammarFileName = "Regex.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "'{'", "'}'", 
                            "'|'", "'?'", "'+'", "'-'", "'*'", "','", "'^'" ];
    static symbolicNames = [ null, "LPARENS", "RPARENS", "LBRACK", "RBRACK", 
                             "LBRACE", "RBRACE", "OR", "QMARK", "SUM", "SUB", 
                             "MUL", "COMA", "CARET", "CARACTER", "INT", 
                             "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "class", 
                         "range", "quantifier", "char", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RegexParser.ruleNames;
        this.literalNames = RegexParser.literalNames;
        this.symbolicNames = RegexParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RegexParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.term();
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 21;
	            this.match(RegexParser.OR);
	            this.state = 22;
	            this.regex();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RegexParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 25;
	            this.factor();
	            this.state = 28; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16394) !== 0));
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RegexParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.base();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2848) !== 0)) {
	            this.state = 31;
	            this.quantifier();
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



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RegexParser.RULE_base);
	    try {
	        this.state = 37;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.char_();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.group();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.class_();
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



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RegexParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(RegexParser.LPARENS);
	        this.state = 40;
	        this.regex();
	        this.state = 41;
	        this.match(RegexParser.RPARENS);
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



	class_() {
	    let localctx = new ClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RegexParser.RULE_class);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(RegexParser.LBRACK);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 44;
	            this.match(RegexParser.CARET);
	        }

	        this.state = 49; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 49;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 47;
	                this.range();
	                break;

	            case 2:
	                this.state = 48;
	                this.char_();
	                break;

	            }
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 53;
	        this.match(RegexParser.RBRACK);
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RegexParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.char_();
	        this.state = 56;
	        this.match(RegexParser.SUB);
	        this.state = 57;
	        this.char_();
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



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RegexParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.match(RegexParser.MUL);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(RegexParser.SUM);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.match(RegexParser.QMARK);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 62;
	            this.match(RegexParser.LBRACE);
	            this.state = 63;
	            this.number();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 64;
	                this.match(RegexParser.COMA);
	                this.state = 66;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===15) {
	                    this.state = 65;
	                    this.number();
	                }

	            }

	            this.state = 70;
	            this.match(RegexParser.RBRACE);
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



	char_() {
	    let localctx = new CharContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, RegexParser.RULE_char);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(RegexParser.CARACTER);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, RegexParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(RegexParser.INT);
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

RegexParser.EOF = antlr4.Token.EOF;
RegexParser.LPARENS = 1;
RegexParser.RPARENS = 2;
RegexParser.LBRACK = 3;
RegexParser.RBRACK = 4;
RegexParser.LBRACE = 5;
RegexParser.RBRACE = 6;
RegexParser.OR = 7;
RegexParser.QMARK = 8;
RegexParser.SUM = 9;
RegexParser.SUB = 10;
RegexParser.MUL = 11;
RegexParser.COMA = 12;
RegexParser.CARET = 13;
RegexParser.CARACTER = 14;
RegexParser.INT = 15;
RegexParser.WS = 16;

RegexParser.RULE_regex = 0;
RegexParser.RULE_term = 1;
RegexParser.RULE_factor = 2;
RegexParser.RULE_base = 3;
RegexParser.RULE_group = 4;
RegexParser.RULE_class = 5;
RegexParser.RULE_range = 6;
RegexParser.RULE_quantifier = 7;
RegexParser.RULE_char = 8;
RegexParser.RULE_number = 9;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	OR() {
	    return this.getToken(RegexParser.OR, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_base;
    }

	char_() {
	    return this.getTypedRuleContext(CharContext,0);
	};

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(ClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_group;
    }

	LPARENS() {
	    return this.getToken(RegexParser.LPARENS, 0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	RPARENS() {
	    return this.getToken(RegexParser.RPARENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_class;
    }

	LBRACK() {
	    return this.getToken(RegexParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(RegexParser.RBRACK, 0);
	};

	CARET() {
	    return this.getToken(RegexParser.CARET, 0);
	};

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	char_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharContext);
	    } else {
	        return this.getTypedRuleContext(CharContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_range;
    }

	char_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CharContext);
	    } else {
	        return this.getTypedRuleContext(CharContext,i);
	    }
	};

	SUB() {
	    return this.getToken(RegexParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_quantifier;
    }

	MUL() {
	    return this.getToken(RegexParser.MUL, 0);
	};

	SUM() {
	    return this.getToken(RegexParser.SUM, 0);
	};

	QMARK() {
	    return this.getToken(RegexParser.QMARK, 0);
	};

	LBRACE() {
	    return this.getToken(RegexParser.LBRACE, 0);
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	RBRACE() {
	    return this.getToken(RegexParser.RBRACE, 0);
	};

	COMA() {
	    return this.getToken(RegexParser.COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_char;
    }

	CARACTER() {
	    return this.getToken(RegexParser.CARACTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_number;
    }

	INT() {
	    return this.getToken(RegexParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RegexParser.RegexContext = RegexContext; 
RegexParser.TermContext = TermContext; 
RegexParser.FactorContext = FactorContext; 
RegexParser.BaseContext = BaseContext; 
RegexParser.GroupContext = GroupContext; 
RegexParser.ClassContext = ClassContext; 
RegexParser.RangeContext = RangeContext; 
RegexParser.QuantifierContext = QuantifierContext; 
RegexParser.CharContext = CharContext; 
RegexParser.NumberContext = NumberContext; 
