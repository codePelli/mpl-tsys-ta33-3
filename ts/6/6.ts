///////////////////////////////////////////////////////////////////
//6
let arrayTenNums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function six(splitNums: number[]): void{

    let notPair: number[] = [];
    let pair: number[] = [];

    for (let number of splitNums) {

        if (number % 2 === 0) {

            pair.push(number);

        } else {

            notPair.push(number);
        }
    }

    let arraySplit: number[] = pair.concat(notPair);

    console.log("-- EJERCICIO 6 --");
    console.log("Pair:" + pair);
    console.log("Not Pair:" + notPair);
    console.log("Arrays together:" + arraySplit);
    console.log("");
    console.log("");
}

six(arrayTenNums);