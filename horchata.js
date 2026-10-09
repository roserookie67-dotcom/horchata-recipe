// HORCHATA RECIPES
// Rice + Milk = Rice Milk
// Rice Milk + Cinnamon = Horchata

function addReaction(elementName, targetName, resultSelf, resultTarget) {
    if (!elements[elementName] || !elements[targetName]) {
        console.warn("Horchata recipe missing element:", elementName, targetName);
        return;
    }

    elements[elementName].reactions =
        elements[elementName].reactions || {};

    elements[elementName].reactions[targetName] = {
        elem1: resultSelf,
        elem2: resultTarget,
        chance: 1
    };
}

// Rice + Milk -> Rice Milk
addReaction("rice", "milk", null, "rice_milk");
addReaction("milk", "rice", "rice_milk", null);

// Rice Milk + Cinnamon -> Horchata
addReaction("rice_milk", "cinnamon", "horchata", null);
addReaction("cinnamon", "rice_milk", null, "horchata");

console.log("Horchata recipes registered!");
