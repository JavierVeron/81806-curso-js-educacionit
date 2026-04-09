// Programación asíncrona y modularidad
// Generadores e Iteradores
// Iterador asincrónico
/* const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        
        return {
            async next() {
                if (i < 3) {
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula retardo
                    
                    return { value: i++, done: false };
                }

                return { done: true };
            }
        };
    }
};

// Uso del iterador asíncrono con `for await...of`
(async () => {
    for await (const value of asyncIterable) {
        console.log(value); // Se imprimen 0, 1, 2 con 1 segundo de intervalo
    }
})(); */

// Mismo ejemplo en secuencial
/* for (let i=0; i<3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 4000)
} */


// Generadores
/* async function * contadorAsincrono() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula retardo
        yield i;
    }
}

// Uso del generador asíncrono
(async () => {
    for await (const num of contadorAsincrono()) {
        console.log(num); // Se imprimen 0, 1, 2 con 1 segundo de intervalo
    }
})(); */


// Ejemplo
/* async function* fetchPaginas(urlBase) {
    let usuario = 1;
    let limite = 10;

    while (usuario <= limite) {
        const respuesta = await fetch(`${urlBase}/${usuario}`);
        const datos = await respuesta.json();
       
        if (!datos) {
            break;
        }

        yield datos;
        usuario++;
    }
}

// Uso del generador para consumir la API de manera eficiente
(async () => {
    for await (const datos of fetchPaginas('https://jsonplaceholder.typicode.com/users')) {
        console.log(datos);
    }
})(); */


// Utilizando WebSockets
/* async function* recibirMensajes(socket) {
    while (true) {
        yield new Promise(resolve => socket.onmessage = event => resolve(event.data));
    }
}
// Uso del generador con WebSockets
const socket = new WebSocket('wss://ws.bitmex.com/realtime');
(async () => {
    for await (const mensaje of recibirMensajes(socket)) {
        console.log('Mensaje recibido:', mensaje);
    }
})(); */

// Exportando e Importando
//import {sumar, PI} from "./matematicas.js";
//import Calculadora from "./matematicas2.js";
//import * as Mate from "./matematicas.js";

/* let resultado = sumar(10, 20);
console.log(resultado);
console.log("PI:", PI); */

//console.log(Calculadora.sumar(20, 50));

//console.log(Mate.restar(50, 20));


// Lazy Loading
/* document.getElementById("btnCargarUsuarios").addEventListener("click", async () => {
    const { saludar } = await import("../js/prueba.js");
    //const usuarios = await obtenerUsuarios();

    console.log(saludar);    
}); */


// Objetos
/* const producto = {id:1, nombre:"Coca Cola", precio:5000}
producto.nombre = "Pepsi";
producto.precio = producto.precio * 2;
producto.categoria = "Bebidas"
console.log(producto); */

// Proxy
/* const handler = {
    get(target, prop) {
        return prop in target ? target[prop] : `La propiedad "${prop}" no existe`;
    }
};

const persona = { nombre: "Juan", edad: 30 };
const proxyPersona = new Proxy(persona, handler);
console.log(proxyPersona.nombre); // "Juan"
console.log(proxyPersona.apellido); // "La propiedad 'apellido' no existe" */

/* const proxyDatos = new Proxy(
    { nombre: "Sofía", edad: 25 },
    { get: (target, prop) => (console.log(`Accediendo a la propiedad: ${prop}`), target[prop]) }
);
console.log(proxyDatos.nombre); // "Accediendo a la propiedad: nombre" → "Sofía" */


/* const proxyUsuario = new Proxy(
    { nombre: "Luis" },
    { set: (target, prop, value) => typeof value === "string" ? target[prop] = value : console.log(`Error: El valor de ${prop} debe ser una cadena`)
 }
);
//proxyUsuario.nombre = 123; // "Error: El valor de nombre debe ser una cadena"
proxyUsuario.nombre = "Orlando Vargas";
console.log(proxyUsuario.id); // undefined
console.log(proxyUsuario.nombre); // "Carlos" */


// Validando si existe una propiedad en un objeto tradicional
/* const persona = { nombre: "Juan", edad: 30 };

if (persona.name) {
    console.log(persona.name);
} else {
    console.log("No existe un valor para esa propiedad!");
} */


// Validando propiedades en los Proxies
/* const handler = {
    has(target, prop) {
        return prop in target ? true : false;
    }
};

const persona = { nombre: "María", edad: 40 };
const proxyPersona = new Proxy(persona, handler);
console.log("nombre" in proxyPersona); // true
console.log("apellido" in proxyPersona); // false */


/* const proxyPersona = new Proxy(
    { nombre: "Sara", edad: 28 },
    { deleteProperty: (target, prop) => prop in target ? (console.log(`Eliminando propiedad: ${prop}`), delete target[prop], true) : (console.log(`No se puede eliminar: ${prop}, no existe`), true)
 }
);
//delete proxyPersona.nombre; // "Eliminando propiedad: nombre"
delete proxyPersona.apellido; // "No se puede eliminar: apellido, no existe"
console.log(proxyPersona); */


// Reflect
/* const handler = {
    get(target, prop, receiver) {
        console.log(`Accediendo a la propiedad: ${prop}`);
        return Reflect.get(target, prop, receiver); // Mantiene el comportamiento original
    },
    set(target, prop, value, receiver) {
        console.log(`Modificando la propiedad: ${prop}`);
        return Reflect.set(target, prop, value, receiver);
    }
};

const persona = { nombre: "Andrés", edad: 35 };
const proxyPersona = new Proxy(persona, handler);
console.log(proxyPersona.nombre); // "Accediendo a la propiedad: nombre" → "Andrés"
console.log(proxyPersona.apellido);
proxyPersona.edad = 40; // "Modificando la propiedad: edad"
console.log(proxyPersona.edad); // 40 */

// Reflect (get)
/* const persona = { nombre: "Elena", edad: 22 };
console.log(Reflect.get(persona, "nombre")); // "Elena"
console.log(persona.nombre); */

// Reflect (set)
/* const persona = { nombre: "Elena", edad: 22 };
console.log(Reflect.set(persona, "edad", 30)); // "30"
//persona.edad = 40;
console.log(persona.edad); */

// Reflect (has)
/* const persona = { nombre: "Elena", edad: 22 };
console.log(Reflect.has(persona, "nombre")); // true
console.log(Reflect.has(persona, "apellido")); // false */

// Reflect (deleteProperty)
/* const persona = { nombre: "Elena", edad: 22 };
console.log(Reflect.deleteProperty(persona, "nombre")); // true
console.log(Reflect.deleteProperty(persona, "apellido")); // true
console.log(Reflect.get(persona, "nombre"));
console.log(Reflect.get(persona, "apellido")); */


// Currififación
// Antes
/* function sumar(a, b, c) {
 return a + b + c;
} */

// Con Currificación
/* const sumar = (a) => (b) => (c) => a + b + c;
console.log(sumar(2)(3)(4)); // 9 */


// Otro ejemplo
/* function multiplicar(a, b, c) {
    return a * b * c;
}

console.log(multiplicar(2, 3, 4)); // 24 */

/* const multiplicar = (a) => (b) => (c) => a * b * c;
console.log(multiplicar(2)(3)(4)); // 24 */

/* const multiplicarPor2 = multiplicar(2); // (b) => (c) => a * b * c; // 3 => (c) => a * b * c; // 3 => 4 => 2 * 3 * 4;
console.log(multiplicarPor2(3)(4)); // 24 */


/* const filtrarPor = (prop) => (valor) => (obj) => obj[prop] === valor;
const usuarios = [
    { nombre: "Ana", edad: 30, pais:"Argentina" },
    { nombre: "Carlos", edad: 25, pais:"Argentina" },
    { nombre: "Elena", edad: 30, pais:"Chile" }
];
const filtrarPorEdad30 = filtrarPor("edad")(30);
const filtrarPorPaisArgentina = filtrarPor("pais")("Argentina");
console.log(usuarios.filter(filtrarPorEdad30));
console.log(usuarios.filter(filtrarPorPaisArgentina));
// [{ nombre: "Ana", edad: 30 }, { nombre: "Elena", edad: 30 }]

const usuariosFiltradosPorEdad = usuarios.filter(item => item.edad == 30);
console.log(usuariosFiltradosPorEdad);
const usuariosFiltradosPorPais = usuarios.filter(item => item.pais == "Argentina");
console.log(usuariosFiltradosPorPais); */


// Loadsh
//_.chunk(['a', 'b', 'c', 'd'], 2);
/* console.log(_.chunk(['a', 'b', 'c', 'd'], 3)); */

/* const nombres = ["Orlando", "Alan", "Enzo", "Pablo", "Tomas"];
console.log(_.join(nombres, " / "));
document.getElementById("resultado").innerHTML = (_.join(nombres, " / ")); */

// Función tradicional
/* function resta(a, b) {
    return a - b;
}
console.log(resta(10, 5)); // 5

const restaCurried = (a) => (b) => a - b;
console.log(restaCurried(10)(5)); // 5 */

// Tipo de Referencia (this)
/* class Persona {
    constructor(valor1, valor2) {
        this.nombre = valor1;
        this.edad = valor2
    }

    saludar() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años!");
    }
}

const p1 = new Persona("Orlando", 24);
const p2 = new Persona("Tomas", 23);
p1.saludar();
p2.saludar(); */


/* function mostrarNombre() {
 console.log(this);
}
mostrarNombre(); // window (en navegadores) o global (en Node.js) */

/* "use strict";
function mostrarNombre() {
    console.log(this);
}
mostrarNombre(); // undefined */

// Queda pendiente En funciones dentro de objetos (THIS)