// Tipos de Datos y Estructuras básicas
// Tipos de Datos primitivos
/* let valor1 = 10 // Number
let valor2 =  "hola"; // String
let valor3 = true // Boolean
console.log(valor3);
console.log(typeof(valor3)); */

// Otros tipos de Datos
/* let valor4 = Infinity;
let valor5 = -Infinity;
console.log(valor4 == valor5); */
/* let valor6 = parseInt(prompt("Ingrese un valor"));
let valor7 = valor6 * 10;
console.log(valor6); // NaN (Not a Number)
console.log(valor7); */

// Validando los tipos de datos
/* let valor8 = {id:1, nombre:"Coca Cola"};
console.log(valor8);
console.log(typeof valor8); */
//console.log(Number.isInteger(valor8)); // para validar si es Number
//console.log(isNaN(valor8)); // para validar si es NaN
//console.log(Array.isArray(valor8)); // Para validar si es Array

// Método del objeto Math
// Generar un número random
/* let valor9 = Math.random(); // Genera numero random entre 0 y 1
let valor10 = Math.random() * 3 // Entre 0 y 3
let valor11 = (Math.random() * 3) + 1 // Entre 1 y 3
console.log(valor11);
console.log("Redondeo:", Math.round(valor11)); // Redondeo, para arriba y abajo cuando llega a 0.5 redondea para arriba
console.log("Redondeo para abajo:", Math.floor(valor11)); // Redondeo para abajo
console.log("Redondeo para arriba:", Math.ceil(valor11)); // Redondeo para arriba */

// Operaciones matemáticas
/* const suma = 10 + 10;
const resta = 20 - 10;
const division = 30 / 2;
const multi = 20 * 2;
const resto = 20 % 2; // 0

const esPar = (numero) => {
    if ((numero % 2) == 0) {
        console.log(numero + " => Es Par!");
    } else {
        console.log(numero + " => Es ImPar!");
    }
}

esPar(7); */

// Calculadora IMC
/* const calcularIMC = () => {
    let altura = parseFloat(document.getElementById("altura").value) / 100;    
    let peso = parseFloat(document.getElementById("peso").value);    
    let resultado = document.getElementById("resultado");
    let imc = peso / (altura * altura);    
    resultado.innerHTML = `<div class="alert alert-primary" role="alert">Tu IMC es: <b>${imc.toFixed(2)}%<br />${calcularEstadoSalud(imc)}</div>`;
}

const calcularEstadoSalud = (imc) => {
    let resultado;

    if (imc < 18.5) {
        resultado = "Peso inferior al normal";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Peso superior al normal";
    } else {
        resultado = "Obesidad";
    }

    return resultado;
}

document.getElementById("btnCalcular").addEventListener("click", calcularIMC); */


// Funciones de String
const registrarEmail = () => {
    let email = document.getElementById("email").value.toUpperCase().trim();
    let resultado = document.getElementById("resultado");

    if (email.length > 4 && email.includes("@")) {
        if (email.charAt(1) == "A") {            
            if (email.indexOf("GMAIL") > 0) {                
                resultado.innerHTML = `<div class="alert alert-primary" role="alert">El email registrado es <b>${email}</b></div>`;
            } else {
                email = email.replaceAll(".", "[punto]");
                let recomendado = email.split("@");
                console.log(recomendado);
                
                resultado.innerHTML = `<div class="alert alert-danger" role="alert">Solo se permiten emails Gmail! ${email}</b><br />Recomendado: ${recomendado[0]}@GMAIL.COM</div>`;
            }
        } else {
            resultado.innerHTML = `<div class="alert alert-danger" role="alert">El segundo caracter no es una A! ${email.slice(0, 5)}</b></div>`;
        }
    } else {
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">Ingrese un email correctamente!</b></div>`;
    }
}

// Ejemplo 1
/* function saludar() {
    return "hola";
} */
// Ejemplo 2
/* const saludar = () => {
    return "hola";
} */
/* const saludar = () => "hola!!!"; // versión simplificada de una arrow function

console.log(saludar()); */

document.getElementById("btnRegistrar").addEventListener("click", registrarEmail);


// Estructura de datos y manipulación
const productos = ["manzana", "pera", "naranaja"]
/* console.log(productos);
productos.push("uva"); // Agrega un elemento al final del array
console.log(productos);
let elementoEliminado = productos.pop(); // Quitar el último elemento y lo devuelve
console.log(elementoEliminado);
console.log(productos);
//console.log("Total:", productos.length);
productos.unshift("banana"); // Agrega un elemento al comienzo del array
console.log(productos);
productos.shift(); // Elimina un elemento al comienzo del array
console.log(productos); */

// Métodos avanzados de Arrays
const productos2 = [
    {id:1, nombre:"Coca Cola 2 lts", precio:5500, cantidad:1},
    {id:2, nombre:"Coca Cola Zero 2 lts", precio:5400, cantidad:2},
    {id:3, nombre:"Coca Cola Zero 1.5 lts", precio:4900, cantidad:2},
    {id:4, nombre:"Pepsi 2 lts", precio:5200, cantidad:3}
]

// Verificar
/* let existe = productos.includes("tomates"); // Devuelve true o false (se utiliza cuando tenes un array simple)
console.log(existe); */
//let existe = productos2.includes("Pepsi"); // true
/* let existe = productos2.some(item => item.nombre == "Pepsi"); // true (se utiliza cuando tenemos un array de objetos)
console.log(existe); */

// Buscar
/* let producto = productos2.find(item => item.nombre == "Coca Cola Zero")
producto = productos2.find(item => item.precio > 5000)
producto = productos2.find(item => item.nombre.includes("Zero"))
console.log(producto); */

// Filtrar
/* let productosFiltro = productos2.filter(item => item.nombre == "Coca Cola Zero 2 lts")
productosFiltro = productos2.filter(item => item.precio >= 5000)
console.log(productosFiltro); */

// Reverse (invierte el orden, modifica el array original)
/* productos.reverse();
console.log(productos);
productos2.reverse();
console.log(productos2); */

// Sort (ordenar, modifica el array original)
/* productos.sort((a, b) => {
    if (a > b) {
        return 1; // Ascendente (1)
    } else if (a < b) {
        return -1; // Descendente (-1)
    } else {
        return 0
    }
})
console.log(productos); */

/* productos2.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return -1; // Ascendente (1)
    } else if (a.nombre < b.nombre) {
        return 1; // Descendente (-1)
    } else {
        return 0
    }
})
console.log(productos2); */

// Reduce (permite realizar un calculo y devuelve un valor final)
/* let total = productos2.reduce((acum, item) => acum += item.precio, 0);
let totalConCantidad = productos2.reduce((acum, item) => acum += item.precio * item.cantidad, 0);
console.log("Total", total);
console.log("Total con Cantidad", totalConCantidad); */

// Eliminar elementos de un array
/* productos.splice(1, 2); // modifica el array original
console.log(productos); */
/* const nuevosProductos = productos.filter(item => item != "pera");
console.log(nuevosProductos); */
//const nuevosProductos = productos2.filter(item => !item.nombre.includes("Zero"));
//const nuevosProductos = productos2.filter(item => item.cantidad != 2);
/* const nuevosProductos = productos2.filter(item => item.id != 3);
console.log(nuevosProductos); */

// Convertir a string
console.log(productos.join("*"));
console.log(productos.join(" / "));

// Queda pendiente los Objetos Iterables