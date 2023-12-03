"use strict";
///////////////////////////////////////////////////////////////////
//8
let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
function eight(array1, array2) {
    let commonArray = [];
    for (let element of array1) {
        if (array2.indexOf(element) !== -1) {
            commonArray.push(element);
        }
    }
    if (commonArray.length > 0) {
        console.log("-- EJERCICIO 8 --");
        console.log("Common:" + commonArray);
        console.log("");
        console.log("");
    }
    else {
        console.log("-- EJERCICIO 8 --");
        console.log("Nothing in common :(");
        console.log("");
        console.log("");
    }
}
eight(javascript1, javascript2);
