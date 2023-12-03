"use strict";
///////////////////////////////////////////////////////////////////
//9
let arrayNames = ["Marc", "Juanca", "Alejandro", "Ainara", "Carla"];
function nine(arrayNames) {
    let [winner, loser, ...losers] = arrayNames;
    console.log("-- EJERCICIO 9 --");
    console.log("Winner:" + winner);
    console.log("Second:" + loser);
    console.log("Losers:" + losers);
    console.log("");
    console.log("");
}
nine(arrayNames);
