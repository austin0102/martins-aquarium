const database = {
    fish: [
        {   
            id: 1,
            species: "Parrotfish",
            length: 3,
            name: "Bluey",
            location: "Bermuda",
            food: "Algea off coral reefs",
            imgUrl: "https://i.natgeofe.com/k/1608a24e-6982-4b25-9212-f82408a05347/parrotfish-colors.jpg"
            
        },
        {
            id: 2,
            species: "Red-Lipped Batfish",
            length: 1,
            name: "Ms. Monroe",
            location: "Galapagos",
            food: "Smaller fish, crustaceans, mollusks, and marine worms",
            imgUrl: "https://cdn.vox-cdn.com/thumbor/VffHXK61T5i4VkqGYS53zb-maHU=/0x0:1280x938/2000x1333/filters:focal(640x469:641x470)/cdn.vox-cdn.com/uploads/chorus_asset/file/15835620/red-lipped-batfish.0.0.1465399406.jpg"
        },
        {
            id: 3,
            species: "Wobbegong",
            length: 5,
            name: "Baby",
            location: "Indonesia",
            food: "Bottom-dwelling fishes and invertebrates like small octopuses or crabs and lobsters",
            imgUrl: "https://media.australian.museum/media/dd/images/Some_image.width-800.2073a76.jpg"
        },
        {   
            id: 4,
            species: "Atlantic Bluefin Tuna",
            length: 7,
            name: "Joeseph",
            location: "Mexico",
            food: "Small fish, squid, crabs, lobster, and other crustaceans",
            imgUrl: "https://files.worldwildlife.org/wwfcmsprod/images/Atlantic_bluefin_tuna_253467_Tuna_Species/hero_small/925cryk2za_Bluefin_tuna_253467.jpg"
        },
        {
            id: 5,
            species: "Mekong Giant Catfish",
            length: 10,
            name: "Gumpy",
            location: "Thailand",
            food: "Plant and algae",
            imgUrl: "https://www.shutterstock.com/image-photo/mekong-giant-catfish-freshwater-aquarium-260nw-1154010571.jpg"
        },
    ],
    TipList: [
        {
            id: 1,
            tip: "Use a Proper Filter. The best way to keep an aquarium clean is with a proper filter for the tank's type and size.",
        },
        {
            id: 2,
            tip: "Change the Water Regularly.",
            
        },
        {
            id: 3,
            tip: "Feed Fish Correctly.",
        },
        {
            id: 4,
            tip: "Take Time to Clean the Tank.",
        },
        {
            id: 5,
            tip: "Clean the Outside of the Tank.",
        },
        {
            id: 6,
            tip: "Avoid placing your aquarium near sunny windows, exterior doorways, heating and air conditioning vents, fireplaces and drafty areas that can affect water temperature.",
        },
        {
            id: 7,
            tip: "As a general guideline, it is best to maintain a salinity of 1.026 (or 35ppt or 53 mS/cm conductivity)",
        },
    ]
}


  

export const getFish = () => {
    return database.fish.map(fishes =>({ ...fishes}))
}

export const getTips = () => {
    return database.TipList.map(goodTips => ({ ...goodTips}))
}

export const getLocations = () => {
    const locations = new Set(database.fish.map((fish) => fish.location));
    return Array.from(locations);
  };
  
