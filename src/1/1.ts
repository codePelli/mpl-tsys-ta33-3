///////////////////////////////////////////////////////////////////
//1
let array : string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function oneOne(arrayLong: string[]): void{

    let len = array.length;

    console.log("-- EJERCICIO 1 --");
    console.log("Longitude: " + len);
    console.log("");
    console.log("");
}

oneOne(array);

function oneTwo(arrayLong: string[]): void {

    let rndString = arrayLong[Math.floor(Math.random() * arrayLong.length)];

    console.log("Random: " + rndString);
}

oneTwo(array);
