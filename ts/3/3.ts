///////////////////////////////////////////////////////////////////
//3
function three(): void{

    let javascript1: string[] = ["DOM", "BOM", "Funciones", "Arrays"];

    javascript1.splice(javascript1.indexOf("DOM"), 1, "Objetos");
    javascript1.splice(javascript1.indexOf("Arrays"), 1, "ArraysDificiles");

    let minusTwo: string[] = javascript1.slice(-2);
    let funIndex: number = javascript1.indexOf("Funciones");

    console.log("-- EJERCICIO 3 --");
    console.log("Result 1:" + javascript1);
    console.log("Result 2:" + minusTwo);
    console.log("Result 3:" + funIndex);
    console.log("");
    console.log("");
}

three();