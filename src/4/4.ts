///////////////////////////////////////////////////////////////////
//4
function four(): void{

    let dontknow: string = "Hola";
    let arrayed: string[] = [];

    for (let x = 0; x < dontknow.length; x++) {

        arrayed.push(dontknow[x]);
    }

    let reversedArray: string[] = arrayed.reverse();

    console.log("-- EJERCICIO 4 --");
    console.log("Hola");
    console.log(reversedArray);
    console.log("");
    console.log("");
}

four();