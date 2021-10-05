// Import the fuction into the main module. Invoke the
// function and sotre the fish collection in a variable
// that is scoped to the main module. log each fish to the 
// dev tools console.



// FISHSES IMPORTS!!

import { getFish } from "./fish/database.js";

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
};

import { fishList } from "./fish/fishList.js";

const parentFishElement = document.querySelector(".fish-container")

parentFishElement.innerHTML = fishList();



// LOCATIONS IMPORTS!!

import { getLocation } from "./locations/database.js";

const allLocations = getLocation()

for (const location of allLocations) {
    console.log(location)
};

import { locationList } from "./locations/locationList.js";

const parentLocationElement = document.querySelector(".locations-container")

parentLocationElement.innerHTML = locationList();


// TIP IMPORTS!!

import { getTip } from "./tips/database.js";

const allTips = getTip()

for (const tip of allTips) {
    console.log(tip)
};

import { tipList } from "./tips/tipList.js";

const parentTipElement = document.querySelector(".tip-container")

parentTipElement.innerHTML = tipList();


// FILTER FUNC IMPORTS

// import { mostHolyFish } from "./fish/filterFunc.js";

// mostHolyFish();




