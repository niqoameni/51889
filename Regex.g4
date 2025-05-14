grammar Regex;

regex: term ('|' regex)?;
term: (factor)+;
factor: base (quantifier)?;
base: char
    | group
    | class
    ;
group: '(' regex ')';
class: '[' '^'? (range | char)+ ']';
range: char '-' char;
quantifier:   '*'
            | '+'
            | '?'
            | '{' number (',' (number)? )? '}'
            ;
char: CARACTER;
number: INT;


//Token

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
CARACTER: [a-zA-Z0-9];
INT: [0-9][0-9]*;
WS: [ \t\n\r]+ -> skip;