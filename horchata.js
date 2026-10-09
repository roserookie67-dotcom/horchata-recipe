// HORCHATA RECIPE MOD
// Rice + Milk = Rice Milk
// Rice Milk + Cinnamon = Horchata

console.log("Loading Horchata Recipe Mod...");

// Check that the custom elements exist
console.log("rice_milk exists:", !!elements.rice_milk);
console.log("horchata exists:", !!elements.horchata);
console.log("rice exists:", !!elements.rice);
console.log("milk exists:", !!elements.milk);
console.log("cinnamon exists:", !!elements.cinnamon);

// RECIPE 1: RICE + MILK = RICE MILK
if (elements.rice && elements.milk && elements.rice_milk) {
    elements.rice.reactions = elements.rice.reactions || {};

    elements.rice.reactions.milk = {
        elem1: null,
        elem2: "rice_milk",
        chance: 1
    };

    console.log("Rice + milk recipe registered!");
} else {
    console.error("Rice + milk recipe failed: an element ID is missing.");
}

// RECIPE 2: RICE MILK + CINNAMON = HORCHATA
if (elements.rice_milk && elements.cinnamon && elements.horchata) {
    elements.rice_milk.reactions =
        elements.rice_milk.reactions || {};

    elements.rice_milk.reactions.cinnamon = {
        elem1: "horchata",
        elem2: null,
        chance: 1
    };

    console.log("Rice milk + cinnamon recipe registered!");
} else {
    console.error("Horchata recipe failed: an element ID is missing.");
}

console.log("Horchata Recipe Mod finished loading!");
