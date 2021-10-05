
// This is the basic structure of an object stored in an array 
// called fish that is stored in an object called database
const database = {
    fish: [
        {
            name: "Clownfish",
            image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_400_q85.jpg",
            species: "Anenomefish",
            location: "Indian Ocean",
            length: 6,
            diet: "Omnivore"
        },
        {
            name: "Blue Spotted Ribbontail Ray",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Taeniura_lymma2a.jpg/1200px-Taeniura_lymma2a.jpg",
            species: "Taeniura",
            location: "Pacific Coastline",
            length: 12,
            diet: "Crustaceans / small fish"
        },
        {
            name: "Mandarinfish",
            image: "https://dtmag.com/wp-content/uploads/2019/06/mandarinfish-1050x700.jpg",
            species: "Synciropus",
            location: "Indonesia",
            length: 15,
            diet: "worms, fish eggs, snails"
        },
        {
            name: "Rainbow Parrot Fish",
            image: "https://media.istockphoto.com/photos/this-parrotfish-asks-the-underwater-photographer-for-a-portrait-i-picture-id1219191989?k=20&m=1219191989&s=612x612&w=0&h=Isa3WzLZ5G2ImWerM9BmMz8TPAVr3kIkfAKhog38py4=",
            species: "Guacamaia",
            location: "Atlantic Ocean",
            length: 55,
            diet: "worms, fish eggs, snails"
        },
        {
            name: "Regal Blue Tang",
            image: "https://oceana.org/sites/default/files/shutterstock_40322791.jpg",
            species: "Hepatus",
            location: "Australia",
            length: 11,
            diet: "Omnivore"
        },
        {
            name: "Clown Triggerfish",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Balistoides_conspicillum_2607.jpg/1024px-Balistoides_conspicillum_2607.jpg",
            species: "Balistoides",
            location: "Indian Ocean",
            length: 20,
            diet: "Molluscs / crustaceans / echinoderms"
        }
    ]
};
// This copies the objects in an array
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
};