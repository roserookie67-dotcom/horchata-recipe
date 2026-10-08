// ================================
// HORCHATA MOD :3
// ================================

// Condensed Milk
elements.condensed_milk = {
    color: "#c9a27f",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1100,
    viscosity: 2500,

    reactions: {}
};

// Rice Milk
elements.rice_milk = {
    color: "#e8e1cf",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020,
    viscosity: 1800,

    reactions: {
        "cinnamon": {
            elem1: "horchata",
            elem2: null
        }
    }
};

// Horchata
elements.horchata = {
    color: "#bda98f",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1030,
    viscosity: 2000
};


// ================================
// RICE + MILK = RICE MILK
// ================================

// Add the reaction to rice...
elements.rice.reactions ??= {};

elements.rice.reactions["milk"] = {
    elem1: null,
    elem2: "rice_milk"
};

// ...and milk gets the matching reaction.
// This makes the result work regardless of which
// ingredient is considered the first pixel.
elements.milk.reactions ??= {};

elements.milk.reactions["rice"] = {
    elem1: "rice_milk",
    elem2: null
};
