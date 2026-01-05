"use strict"

/*Ej 1.1*/

/*1*/
let add = (a, b) => a * b;

/*2*/
let randomNumber = () => Math.floor(Math.random() * 101)


/*3*/
class person {
    constructor(name){
    this.name = name;

    }

 greet = () => console.log(`Hola, ${this.name}`);
}

/*4*/

const arrNumbers = [1, 2, 3, 4]

function printNumbers(numbers){

 numbers.forEach(number => console.log(number))

}  

printNumbers(arrNumbers)

/*5*/

setTimeout(() => console.log("Hi"), 3000)


/*Ej 1.2*/

/*1*/

let proofAge = age => age >= 18 ? console.log("Puedes conducir")
                                : console.log("No puedes conducir")


/*2*/

let compare = (num1, num2) => num1 > num2 ? console.log("num1 es mayor")
                                          : console.log("num2 es mayor")


/*3*/

let typeOfNum = num => (num > 0) ? "the number is positive" : (num < 0) ? "the number is negative" : "the number is 0"
  

let encontrarMaximo = (a, b, c) => (a >= b && a >= c) ? `${a} is the biggest value` : (b >= c) ? `${b} is the biggest value` : `${c} is the biggest value`

/*4*/

let parOimpar = arrNumbers.forEach(number => number % 2 == 0 ? console.log("par") : console.log("impar"))

/*Ej 1.3*/