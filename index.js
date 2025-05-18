import RegexLexer from "./generated/RegexLexer.js";
import RegexParser from "./generated/RegexParser.js";
import CustomRegexVisitor from "./CustomRegexVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input en forma sincrónica.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        if(input.trim() === ''){
            throw new Error('El archivo está vacio') //Fuerza un error cuando el archivo "input.txt" está vacio
        }
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura sincróna
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new RegexLexer(inputStream);

    // Guardar errores léxicos
    const lexerErrors = [];
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            lexerErrors.push(`Error léxico en línea ${line}: ${msg}`);
        }
    });

    // Obtener tokens (esto vacía el lexer, así que después hay que regenerarlo)
    const tokens = lexer.getAllTokens();

    if (lexerErrors.length > 0) {
        console.error("Errores léxicos encontrados:");
        console.error(lexerErrors.join("\n"));
        return;
    }

    // Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    for (let token of tokens) {
        const tokenType = RegexLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Vuelve a procesar la entrada para crear el parser
    inputStream = CharStreams.fromString(input);
    lexer = new RegexLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new RegexParser(tokenStream);

    // Guardar errores sintácticos
    const parserErrors = [];
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
            parserErrors.push(`Error sintáctico en línea ${line}: ${msg}`);
        }
    });

    const tree = parser.regex();

    if (parserErrors.length > 0) {
        console.error("\nErrores sintácticos encontrados:");
        console.error(parserErrors.join("\n"));
        return;
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);
        
        const visitor = new CustomRegexVisitor();
        visitor.visit(tree);
        
        // Interpretacion o traduccion a js
        const regexJS = visitor.visit(tree);
        console.log(`\nTraducción JavaScript:\nconst regex = /${regexJS}/;`);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();