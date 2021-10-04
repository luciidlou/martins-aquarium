
// This is the basic structure of an object stored in an array 
// called fish that is stored in an object called database
const database = {
    fish: [
        {
            name: "Mandarinfish",
            species: "Synciropus",
            location: "Indonesia",
            length: 3,
            diet: "worms, fish eggs, snails"
        }
    ]
};
// This copies the objects in an array
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};