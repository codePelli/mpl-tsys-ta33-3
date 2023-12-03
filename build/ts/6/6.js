"use strict";
///////////////////////////////////////////////////////////////////
//6
let arrayTenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function six(splitNums) {
    let notPair = [];
    let pair = [];
    for (let number of splitNums) {
        if (number % 2 === 0) {
            pair.push(number);
        }
        else {
            notPair.push(number);
        }
    }
    let arraySplit = pair.concat(notPair);
    console.log("-- EJERCICIO 6 --");
    console.log("Pair:" + pair);
    console.log("Not Pair:" + notPair);
    console.log("Arrays together:" + arraySplit);
    console.log("");
    console.log("");
}
six(arrayTenNums);
