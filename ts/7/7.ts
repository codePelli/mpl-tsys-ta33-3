///////////////////////////////////////////////////////////////////
//7
function seven(fiveNums: number[]): void{

    const arrayFive: number[] = fiveNums.filter(number => number > 5);

    console.log("-- EJERCICIO 7 --");
    console.log("Higher than five:" + arrayFive);
    console.log("");
    console.log("");
}

seven(arrayTenNums);