const database = {
    location: [
        {
            name: "Indian Ocean",
            image: "https://www.snorkeling-report.com/wp-content/uploads/2018/11/blue-ring-angelfish-great-pomacanthidae-blue-ring-angelfish-pomacanthus-annularis-blue-of-blue-ring-angelfish.jpg",
            info: `The world's 3rd largest ocean, covering 20% of the Earth's surface, located between Africa and the Austral-Asia and Southern Oceans. Home to many endangered species including turtles, seals, and dugongs.`
        },
        {
            name: "Pacific Coastline",
            image: "https://www.hakaimagazine.com/wp-content/uploads/header-hk-fish-smuggling.jpg",
            info: `The shallower waters along the coasts of East Africa, Southern Asia, the Pacific Islands, and Northern Australia, including hundreds of islands are archipelagos, are home to numerous coral reefs and abundant fish life.`
        },
        {
            name: "Indonesia",
            image: "https://www.superadventure.co.id/uploads/news/2019/06/24/03a4bec557d9.jpg",
            info: `Indonesia’s immense coastline territory provides ideal conditions for fish harvesting. The work may be intense, but the opportunity to view an exotic locale and walk along black sand beaches make it all worthwhile.`
        },
        {
            name: "Western Atlantic",
            image: "https://i.guim.co.uk/img/media/3fb15ea685f3241b468972779a6a629554ff4fbf/0_33_5400_3247/master/5400.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=714041d1e2e16f92eb8ff0267a17b0c6",
            info: `The Western Atlantic provides a bevy of experiences – from the clear waters of Bermuda to several untouched islands in the Bahamas, you can find yourself amongst a variety of sharks, rays, turtles, dolphins, and so much more marine life.`
        }
    ]
};

export const getLocation = () => {
    return database.location.map(location => ({...location}))
};