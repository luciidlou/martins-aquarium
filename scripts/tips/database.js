const database = {
    tip: [
        {
            title: "Use the right size tank",
            text: `First, be sure your tank is the proper size for the fish you keep. If your tank is too small, the fish will be stressed and the tank will get dirty much faster. Your tank should not be overly large, however, or the fish will be uncomfortable and it will be much more space to keep clean`
        },
        {
            title: "Change the Water Regularly",
            text: `Slight water changes on a regular schedule can help keep your tank clean by removing dirty, spent water and replacing it with clean water. To keep the tank balanced and your fish comfortable, only change 10-20 percent of the water every 2-3 weeks.`
        },
        {
            title: "Trim Plants",
            text: `Live plants can be beautiful and functional accents in your fish tank, providing places for bashful fish to hide and offering a natural source of nutrition. If you notice any leaves or grasses turning brown or decaying, however, trim those dead bits away to keep the tank clean.`
        },
        {
            title: "Scrape the glass",
            text: `Algae can easily be removed from the sides of your tank with a simple scraper or razor blade. Scrape the sides regularly to keep algae growth to a minimum and you’ll more easily be able to see all the colors and details of your tank.`
        },
        {
            title: "Feed Your Fish Appropriately",
            text: `Offer your fish the highest quality food so their digestion will be more efficient, and only feed them the proper amount of food on a strict schedule. Any food uneaten after 5-10 minutes should be strained out and removed so it does not foul the tank.`
        },
        {
            title: "Clean Props",
            text: `Props such as rocks, logs, castles, sunken ships, and other accents can add a bit of structure and whimsy to your tank, but they don’t look nearly as nice if they’re covered with algae. Rinse them with hot water and wipe them off to remove algae buildup and keep them clean.`
        },
        {
            title: "Vaccuum the gravel",
            text: `Fish feces, shed scales, uneaten food, dead bits of plants, and other debris will settle to the bottom of your tank. Vacuuming the gravel every week will remove much of this debris and refresh the tank, brightening the gravel and keeping the tank healthier.`
        },
        {
            title: "Ideal Water Temperature",
            text: `Ideal Water Temp for Reef Fish: 78-80F`
        },
        {
            title: "Water salinity",
            text: `Saltwater aquarium salinity is usually kept between 1.020-1.028sg. Some aquarists like to keep fish only aquariums at lower levels (1.017+) to keep salt costs low and to reduce problems with parasites, which don't survive as well in lower salinity.`
        }
    ]
};

export const getTip = () => {
    return database.tip.map(tip => ({...tip}))
};