"use strict";
///////////////////////////////////////////////////////////////////
//14
let allRecipe = [
    {
        name: "Soup",
        time: "3 hours",
        ingredients: ["Soup broth", "Meat", "Veggies"]
    }, {
        name: "Cannelloni",
        time: "30 minutes",
        ingredients: ["Pasta", "Meat", "Tomatoes"]
    }, {
        name: "Spaghetti",
        time: "30 minutes",
        ingredients: ["Spaghetti", "Cheese", "Tomatoes"]
    }
];
function printRecipes() {
    console.log("-- EJERCICIO 14 --");
    for (let x = 0; x < allRecipe.length; x++) {
        const recipe = allRecipe[x];
        console.log("Recipe: " + recipe.name);
        console.log("Time: " + recipe.time);
        console.log("Ingredients: " + recipe.ingredients.join(", "));
        console.log("");
    }
}
printRecipes();
