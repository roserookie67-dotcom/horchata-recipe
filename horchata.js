elements.condensed_milk = {
    color: "#c9aa8d",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1050,
    viscosity: 2000
};

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

elements.horchata = {
    color: "#bca98f",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1030,
    viscosity: 2000
};

if (!elements.rice.reactions) {
    elements.rice.reactions = {};
}

if (!elements.milk.reactions) {
    elements.milk.reactions = {};
}

elements.rice.reactions["milk"] = {
    elem1: null,
    elem2: "rice_milk"
};

elements.milk.reactions["rice"] = {
    elem1: "rice_milk",
    elem2: null
};
