///////////////////////////////////////////////////////////////////
//10
let human: {
    name: string;
    surname: string;
    age: number;
    gender: string;
    city: string;
    country: string;
} = {
    name: "Marc",
    surname: "Pellicer",
    age: 31,
    gender: "M",
    city: "Reus",
    country: "Spain",
};

function ten(human: {name: string; surname: string}): void{

    let fullName: string = human.name + human.surname;

    console.log("-- EJERCICIO 10 --");
    console.log("Full name: " + fullName);
    console.log("");
    console.log("");
}

ten(human);