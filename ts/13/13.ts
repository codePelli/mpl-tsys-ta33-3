///////////////////////////////////////////////////////////////////
//13
let recipe: {
    
    name: string,
    time: string,
    ingredients: string[];

} = {
    
    name: "Soup",
    time: "3 hours",
    ingredients: ["Soup broth", "Meat", "Veggies"]
};

function thirteen(recipe: {name: string; time: string, ingredients: string[]}): void{

    console.log("-- EJERCICIO 13 --");
    console.log("Recipe: " + recipe.name);
    console.log("Time: " + recipe.time);
    console.log("Ingredients: " + recipe.ingredients);
    console.log("");
    console.log("");
}

thirteen(recipe);