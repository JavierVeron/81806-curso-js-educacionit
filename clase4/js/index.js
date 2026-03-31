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
/* console.log(productos.join("*"));
console.log(productos.join(" / ")); */

// Queda pendiente los Objetos Iterables
/* const iterable = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index],
                done: index++ >= this.data.length
            })
        };
    }
};

console.log(iterable);

for (const value of iterable) {
    console.log(value); // 10, 20, 30
} */

// Iterar Array
const frutas = ["manzana", "naranja", "pera", "banana"];

// Opción #1 => Función For
/* for (let i=0; i<frutas.length; i++) {
    console.log("1- " + frutas[i]);
} */

// Opción #2 => Método foreach
/* frutas.forEach(item => {
    console.log("2- " + item);
}) */

// Opción #3 => Función for..of
/* for (const fruta of frutas) {
    console.log("3- " + fruta);
} */

/* const renderFrutas = (frutas) => {
    const contenido = document.getElementById("resultado");
    let contenidoHTML = `<ul class="list-group">`;

    for (const fruta of frutas) {
        contenidoHTML += `<li class="list-group-item">${fruta}</li>`
    }

    contenidoHTML += `</ul>`;
    contenido.innerHTML = contenidoHTML;
}

renderFrutas(frutas); */

// Iterar Strings
/* let texto = "Argentina";
console.log(texto[0] + texto[1]);

const renderTexto = (texto) => {
    const contenido = document.getElementById("resultado");
    let output = "";

    for (let i=0; i<texto.length; i++) {
        if (i%2 != 0) {
            output += "<span class='text-primary p-3'>" + texto[i].toUpperCase() + "</span>";
        } else {
            output += "<span class='text-white bg-primary p-3'>" + texto[i].toUpperCase() + "</span>";
        }
    }

    contenido.innerHTML = `<div class="alert alert-secondary" role="alert">${output}</div>`;
}

renderTexto(texto); */

// Iterar Objetos
const producto = {id:1, nombre:"Coca Cola", precio:5000, categoria:"bebidas", cantidad:3};

/* for (const propiedad in producto) {
    console.log("Propiedad", propiedad);
    console.log("Valor", producto[propiedad]);  
} */


// Set
/* const conjunto = new Set([1, 2, 3, 3, 4]); // No permite valores duplicados
for (const num of conjunto) {
    console.log(num); // 1, 2, 3
} */

// Map
/* const mapa = new Map([
    ["a", 1],
    ["b", 2]
]);
for (const [clave, valor] of mapa) {
    console.log(clave, valor); // a 1, b 2
} */

/* const mapa2 = [1, 2, [3, [4, 5]]].flat(2);
console.log(mapa2); */


// Colecciones y Objetos
/* const usuario = {
    nombre: "Ana",
    edad: 25,
    activo: true
};

console.log(usuario.nombre) */

/* const mapa = new Map();
mapa.set("nombre", "Carlos");
mapa.set("numero", 10);
mapa.set("club", "Real Madrid");
console.log(mapa.get("nombre")); // "Carlos"
console.log(mapa.get("numero")); // "10"
//mapa.delete("club");

if (mapa.has("club")) {
    console.log(mapa.get("club")); // "Real Madrid" => undefined
}

console.log(mapa.size); // 2 */

// Set
/* const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(2); // Ignorado, ya existe
conjunto.add(2); // Ignorado, ya existe
conjunto.add(2); // Ignorado, ya existe
conjunto.add(2); // Ignorado, ya existe
conjunto.delete(2); // Elimina el valor 2
//conjunto.clear(); // Vacía el set

if (conjunto.has(2)) {
    console.log("Tiene el Valor 2!");
}

console.log(conjunto); // Set { 1, 2, 3 } */


// Objeto Object (3 métodos más utilizados)
// Obtener Claves y Valores
/* const claveValores = Object.entries(producto);
console.log(claveValores);
// Obtener un array de Claves
const claves = Object.keys(producto);
console.log(claves);
// Obtener un array de Valores
const valores = Object.values(producto);
console.log(valores); */


// Desestructuración de Objetos, Array y Parámetros de Funciones
const usuario = { nombre: "Ana", edad: 25, ciudad: "Madrid" };
// Antes
/* let nombre = usuario.nombre;
let edad = usuario.edad; */
// Desestructuración por nombre (la variable tienen que coincidir con el nombre de la propiedad)
/* const { nombre, edad, city } = usuario;
console.log(nombre); // "Ana"
console.log(edad); // 25
console.log(city); // undefined */

// Desestructuración por alias (a la variable ponemos 2 puntos con el nombre de la variable deseada)
/* const { nombre:name, edad:age, ciudad:city } = usuario;
console.log(name); // "Ana"
console.log(age); // 25
console.log(city); // Madrid */

// Desestructuración anidada
/* const empleado = {
    nombre: "Carlos",
    puesto: "Desarrollador",
    direccion: { ciudad: "Bogotá", pais: "Colombia" }
};
const { nombre, direccion:{ciudad, pais} } = empleado;
console.log(nombre, ciudad, pais); // "Bogotá Colombia" */

// Desestructuración de arrays
const colores = ["rojo", "verde", "azul"];
// Antes
/* const colorRojo = colores[0];
console.log(colorRojo); */

/* const [a,,b] = colores;
console.log(a);
console.log(b); */
/* const [,,tercero] = colores;
console.log(tercero); */

/* const [a, b, c = "negro"] = ["blanco", "gris"];
console.log(a, b, c); // "blanco gris negro" */

// Intercambiar valores
/* let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y); // 10, 5 */

// Operador ...rest
/* const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero, segundo); // 1 2
console.log(resto); // [3, 4, 5]
const numeros2 = [primero, segundo, ...resto]; // Crear un array y en la posición 2 utilice el operador "Spread"
console.log(numeros2);
const numeros3 = [...resto, ...resto];
console.log(numeros3); // [3,4,5,3,4,5] */

// Desestructurando parámetros de funciones
/* function mostrar({ nombre, edad }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
    nombre:"Pablo Sasowski",
    edad:25,
    email:"pablo.saso@gmail.com"
}

mostrar(persona); */


// Fundamentos Web Fechas, JSON y almacenamiento de datos
/* const fecha = new Date();
console.log(fecha.toString());
console.log(fecha.toLocaleDateString());
console.log("Día", fecha.getDate());
console.log("Mes", (fecha.getMonth()+1));
console.log("Año", fecha.getFullYear());
console.log(`${fecha.getDate()}-${(fecha.getMonth()+1)}-${fecha.getFullYear()}`);
console.log(fecha.toLocaleDateString().replaceAll("/", "-")); */

/* const fecha = new Date();
console.log(fecha.getTime());
const fecha2 = new Date(1770000000000);
console.log(fecha2);
console.log(fecha.toLocaleDateString("es-AR"));
console.log(fecha.toLocaleDateString("en-US"));
console.log(fecha.toLocaleDateString("en-UK")); */

// Diferencia de Fechas
/* const fechaActual = new Date().getTime();
const fechaCumple = new Date("2026-05-21").getTime();
const diferencia = fechaCumple - fechaActual;
console.log(fechaActual);
console.log(fechaCumple);
const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
console.log("Faltan " + dias + " días para tu Cumpleaños!"); */


// localStorage y sessionStorage
/* localStorage.setItem("nombre", "Orlando");
localStorage.setItem("nombre", "Orlando Bloom"); */
/* let name = localStorage.getItem("nombre");
console.log(name); */

//localStorage.setItem("numero1", 20); // Crear o pisar una localStorage
//localStorage.setItem("numero2", 30);
/* localStorage.setItem("sosRico", false);
let resultado = parseInt(localStorage.getItem("numero1")) + parseInt(localStorage.getItem("numero2"));
console.log(resultado);
console.log(localStorage.getItem("sosRico")); */

//localStorage.setItem("producto", JSON.stringify(producto)); // getItem para obtener el valor
//localStorage.setItem("colores", JSON.stringify(colores));

/* console.log(JSON.parse(localStorage.getItem("producto")));
console.log(JSON.parse(localStorage.getItem("colores")));

localStorage.removeItem("colores"); // Elimino la localStorage "colores"
localStorage.clear(); // Elimina TODAS las localStorage */

localStorage.setItem("nombre", "Orlando Vargas");
sessionStorage.setItem("nombre", "Orlando Bloom");
console.log(localStorage.getItem("nombre"));
console.log(sessionStorage.getItem("nombre"));

/* const fechaActual = new Date();
console.log(fechaActual.toJSON()); */