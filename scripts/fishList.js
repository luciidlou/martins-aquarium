// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()
    // Start building a string filled with HTML syntax
    const htmlString = `<article class="fishList">`;
    // Create HTMl representations of each fish here 
    for (const fish of fishes) {
        htmlString += 
        `<section class = "fish-card">
            <div> <img class="fish__img" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString

};
