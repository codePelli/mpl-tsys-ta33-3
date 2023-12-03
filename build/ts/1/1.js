"use strict";
///////////////////////////////////////////////////////////////////
//1
let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
function oneOne(arrayLong) {
    let len = array.length;
    console.log("-- EJERCICIO 1 --");
    console.log("Longitude: " + len);
    console.log("");
    console.log("");
}
oneOne(array);
function oneTwo(arrayLong) {
    let rndString = arrayLong[Math.floor(Math.random() * arrayLong.length)];
    console.log("Random: " + rndString);
}
oneTwo(array);
