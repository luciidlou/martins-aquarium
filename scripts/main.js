// Import the fuction into the main module. Invoke the
// function and sotre the fish collection in a variable
// that is scoped to the main module. log each fish to the 
// dev tools console.
import { getFish } from "./database.js";

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
};

import { fishList } from "./fishList.js";

const parentHTMLElement = document.querySelector(".fish-container")

parentHTMLElement.innerHTML = fishList();