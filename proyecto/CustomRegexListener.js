import RegexListener from "./generated/RegexListener.js";

export class CustomRegexListener extends RegexListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}