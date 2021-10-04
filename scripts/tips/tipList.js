import { getTip } from "./database.js";

export const tipList = () => {

    const tips = getTip()

    let htmlString = `<article class="tipList">`;

    for (const tip of tips) {
        htmlString += 
        `<section class="tip">
            <h4>${tip.title}</h4>
            <p>${tip.text}</p>
        </section>`
    }
    htmlString += `</article>`

    return htmlString

};