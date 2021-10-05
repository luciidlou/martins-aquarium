import { getFish } from "./database.js";


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    const soldierFish = []

    const nonHolyFish = []

    for (const fish of holyFish) {
        if(fish.length % 3 === 0) {
            holyFish.push(fish)
        } else if (fish.length % 5 === 0) {
            soldierFish.push(fish)
        } else {
            nonHolyFish.push(fish)
        }
    }
};

// export const soldierFish = () => {
//     // 5, 10, 15, 20, 25, etc... fish
//     return soldiers
// }

// export const nonHolyFish = () => {
//     // Any fish not a multiple of 3 or 5
//     return regularFish
// }