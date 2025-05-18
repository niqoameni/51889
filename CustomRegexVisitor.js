import RegexVisitor from './generated/RegexVisitor.js';
import RegexParser from './generated/RegexParser.js';

class CustomRegexVisitor extends RegexVisitor {
    constructor() {
        super();
        this.memory = {}; // Almacén de variables
    }

    visitRegex(ctx) {
        const term = this.visit(ctx.term());
        const alt = ctx.regex() ? this.visit(ctx.regex()) : '';
        return alt ? `${term}|${alt}` : term;
    }

    visitTerm(ctx) {
        return ctx.factor().map(f => this.visit(f)).join('');
    }

    visitFactor(ctx) {
        const base = this.visit(ctx.base());
        const quant = ctx.quantifier() ? this.visit(ctx.quantifier()) : '';
        return base + quant;
    }

    visitBase(ctx) {
        if (ctx.character()) {
            return this.visit(ctx.character());
        } else if (ctx.group()) {
            return this.visit(ctx.group());
        } else if (ctx.clase()) {
            return this.visit(ctx.clase());
        }
        return '';
    }

    visitGroup(ctx) {
        const content = this.visit(ctx.regex());
        return `(${content})`;
    }

    visitClase(ctx) {
        const negated = ctx.CARET() ? '^' : '';
        const elements = ctx.children
            .slice(1, -1) // eliminar corchetes
            .map(child => child.getText()) // tomar texto literal
            .join('');
        return `[${negated}${elements}]`;
    }

    visitRange(ctx) {
        return `${this.visit(ctx.character(0))}-${this.visit(ctx.character(1))}`;
    }

    visitQuantifier(ctx) {
        return ctx.getText(); // devuelve '*', '+', '?', '{n}', etc.
    }

    visitCharacter(ctx) {
        return ctx.CARACTER().getText(); // solo un carácter simple
    }

    visitNumber(ctx) {
        return ctx.INT().getText();
    }
}

export default CustomRegexVisitor;
