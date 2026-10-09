// horchata.js
// Adds recipes for your existing custom elements:
// Rice + Milk = Rice Milk
// Rice Milk + Cinnamon = Horchata

// RECIPE 1: Rice + Milk = Rice Milk
if (elements.rice && elements.milk && elements.rice_milk) {
    if (!elements.rice.reactions) {
        elements.rice.reactions = {};
    }

    elements.rice.reactions.milk = {
        elem1: null,
        elem2: "rice_milk"
    };
}

// RECIPE 2: Rice Milk + Cinnamon = Horchata
if (elements.rice_milk && elements.cinnamon && elements.horchata) {
    if (!elements.rice_milk.reactions) {
        elements.rice_milk.reactions = {};
    }

    elements.rice_milk.reactions.cinnamon = {
        elem1: "horchata",
        elem2: null
    };
}

console.log("Horchata recipes loaded!");
