///////////////////////////////////////////////////////////////////
//11
function eleven({age, gender, city}: { age: number; gender: string; city: string }): void {

    let destructuring = { age: 32, gender: "W", city: "Somewhere" };

    console.log("-- EJERCICIO 11 --");
    console.log("Age: " + destructuring.age);
    console.log("Gender: " + destructuring.gender);
    console.log("City: " + destructuring.city);
    console.log("");
    console.log("");
}

eleven(human);