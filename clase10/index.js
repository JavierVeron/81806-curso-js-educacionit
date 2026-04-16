"use strict";
// validación de variables
/* const numero1: number = 10;
const numero2: string = "Veinte";
const productos: Object = ["orlando", "agustina", "juan"];
console.log(numero1);
console.log(numero2); */
// validación de funciones
/* const sumar: (n1: number, n2: number) => number = function (n1, n2) {
    return n1 + n2;
}

console.log(sumar(10, 20)); */
// Validación de Objetos
/* interface Post {
    title: string;
    body: string;
    cantidad: number;
}

const miPost: Post = {
    title: "Educación IT",
    body: "Viendo Typescript en el Curso de JavaScript",
    cantidad: 1000
}

console.log(miPost); */
// Rest Parameters
function sumarTodo(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
}
//const numeros = ["a", "b", "c"];
const resultado = sumarTodo(1, 2, 3);
