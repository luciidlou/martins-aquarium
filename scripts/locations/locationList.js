import { getLocation } from "./database.js"

export const locationList = () => {

    const locations = getLocation()

    let htmlString = `<article class="locationList">`;

    for (const location of locations) {
        htmlString +=
        `<section class="location">
            <div class="location__name">${location.name}</div>
            <div class="location__img"><img src="${location.image}"></div>
            <div class="location__info">${location.info}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString

};