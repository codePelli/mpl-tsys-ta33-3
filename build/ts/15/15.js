"use strict";
///////////////////////////////////////////////////////////////////
//15
class Recipe {
    constructor(name, time, ingredients) {
        this.name = name;
        this.time = time;
        this.ingredients = ingredients;
    }
}
let allRecipes = [
    new Recipe("Soup", "3 hours", ["Soup broth", "Meat", "Veggies"]),
    new Recipe("Cannelloni", "30 minutes", ["Pasta", "Meat", "Tomatoes"]),
    new Recipe("Spaghetti", "30 minutes", ["Spaghetti", "Cheese", "Tomatoes"])
];
function printAllRecipes(recipes) {
    console.log("-- EJERCICIO 15 --");
    for (let x = 0; x < recipes.length; x++) {
        const recipe = recipes[x];
        console.log("Recipe: " + recipe.name);
        console.log("Time: " + recipe.time);
        console.log("Ingredients: " + recipe.ingredients.join(", "));
        console.log("");
    }
}
printAllRecipes(allRecipes);
