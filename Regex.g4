grammar Regex;

regex: term ('|' regex)?;
term: (factor)+;
factor: base (quantifier)?;
base: character
    | group
    | clase
    ;
group: '(' regex ')';
clase: '[' ('^')? (range | character)+ ']';
range: character '-' character
     | number '-' number;
quantifier:   '*'
            | '+'
            | '?'
            | '{' number (',' (number)? )? '}'
            ;
character: CARACTER;
number: INT;


//Tokens

LPARENS: '(';
RPARENS: ')';
LBRACK: '[';
RBRACK: ']';
LBRACE: '{';
RBRACE: '}';
OR: '|';
QMARK: '?';
SUM: '+';
SUB: '-';
MUL: '*';
COMA: ',';
CARET: '^'; 
INT: [0-9][0-9]*;
CARACTER: [a-zA-Z0-9];
WS: [ \t\n\r]+ -> skip;