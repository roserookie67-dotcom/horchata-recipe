// horchata.js mod for Sandboxels
// Adds horchata and its ingredients
const horchata_version = "1.0.0";

behaviors.VLIQUID = [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2"
];

// Condensed Milk
elements.condensed_milk = {
    color: ["#f5ead2", "#fff2d9", "#ead9b9"],
    behavior: behaviors.VLIQUID,
    category: "food",
    state: "liquid",
    density: 1280,
    viscosity: 20,
    tempHigh: 110,
    stateHigh: ["steam", "sugar"],
    tempLow: 0,
    stateLow: "ice",
    conduct: 0.02,
    stain: 0.1,
    flippableX: true,
    desc: "Thick, sweetened condensed milk."
};

// Rice Milk
elements.rice_milk = {
    color: ["#f5f0df", "#eae3ce", "#fff8e8"],
    behavior: behaviors.VLIQUID,
    category: "food",
    reactions: {
        rice: {
            elem1: "rice_milk",
            elem2: null
        },
        cinnamon: {
            elem1: "horchata",
            elem2: null
        },
        condensed_milk: {
            elem1: "horchata",
            elem2: null
        }
    },
    state: "liquid",
    density: 1030,
    viscosity: 5,
    tempHigh: 100,
    stateHigh: ["steam", "steam"],
    tempLow: 0,
    stateLow: "ice",
    conduct: 0.02,
    flippableX: true,
    desc: "A milky drink made from rice."
};

// Horchata
elements.horchata = {
    color: ["#f5e8d0", "#ead9b8", "#fff0d6"],
    behavior: behaviors.VLIQUID,
    category: "food",
    reactions: {
        cinnamon: {
            elem1: "horchata",
            elem2: null
        }
    },
    state: "liquid",
    density: 1050,
    viscosity: 8,
    tempHigh: 100,
    stateHigh: ["steam", "steam"],
    tempLow: 0,
    stateLow: "ice",
    conduct: 0.02,
    stain: 0.05,
    extinguish: true,
    flippableX: true,
    desc: "A sweet, creamy horchata drink, traditionally flavored with cinnamon."
};

console.log("horchata.js successfully loaded");
console.log("horchata.js is running version " + horchata_version);
