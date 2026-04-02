// Operador Spread y Parámetro Rest
/* let valor1 = 10;
let valor2 = valor1; // Es una variable por copia
console.log(valor1);
console.log(valor2);
valor1 = 20;
console.log(valor1);
console.log(valor2); */

// Arrays, Objetos y Funciones en JS se copian por referencia
// Spread con Arrays
/* const productos = ["Coca Cola", "Pepsi", "Sprite", "Seven Up"];
const productos2 = productos; // Copia es por referencia
//console.log(productos);
//console.log(productos2);
productos.push("Manaos");
productos[1] = "Pepsi Max";
productos2[0] = "Coca Cola Zero";
//console.log(productos);
//console.log(productos2);
const productos3 = [...productos]; // Creando un nuevo array, desparramando los elementos del array productos
productos[0] = "Coca Cola Zero 2 lts";
console.log(productos);
console.log(productos2);
console.log(productos3);
const productos4 = ["Cunnington", ...productos];
console.log(productos4); */

// Spread con Objetos
/* const producto = {id:1, nombre:"Coca Cola", precio:5500};
const producto2 = producto; // Copia por referencia
producto.precio = 6000;
//console.log(producto);
//console.log(producto2);
const producto3 = {...producto}; // Creando un nuevo objeto, desparramando las propiedades del objeto producto
producto3.precio = 4500;
console.log(producto);
console.log(producto2);
console.log(producto3);
const producto4 = {id:10, ...producto, nombre:"Coca Cola Zero 1.5 lts", categoria:"bebidas"};
console.log(producto4);

const propiedadesBebidas = {diet:true, tieneAzucar:false, calorias:30}
const producto5 = {...producto, ...propiedadesBebidas};
console.log(producto5); */

// Parámetros Rest
/* function sumar(a, b) {
    console.log(a);
    console.log(b);
    
    return a + b
} */

//function sumar(...numeros) {
    // Función original
    /* let resultado = 0;
    
    for (const numero of numeros) {
        resultado += numero
    }
        
    return resultado */
    
    // Usando el metodo reduce, simplificamos todo en una sola linea
    //return numeros.reduce((total, num) => total + num, 0);
//}

/* console.log(sumar(2, 5, 7)); // 14
console.log(sumar(10, 20, 30, 40)); // 100
console.log(sumar(10)); // 10 */


// Agrupar elementos en una función
/* function mostrarNombres(primerNombre, ...otrosNombres) {
    console.log(`Primer nombre: ${primerNombre}`);
    console.log(`Otros nombres: ${otrosNombres.join(', ')}`);
}

mostrarNombres("Orlando");
mostrarNombres("Enzo", "Alejandro");
mostrarNombres("Ana", "Luis", "Carlos", "María"); */

// Desestructuración de parámetros Rest
/* function procesarDatos(id, ...datos) {
    console.log(`ID: ${id}`);
    console.log(`Datos adicionales:`, datos);
}

procesarDatos(101, "Orlando", 25, "Argentina");
procesarDatos(102, "Enzo", "Alejandro", 24, "Argentina"); */

// Uso en clases y métodos
/* class Calculadora {
    static multiplicar(factor, ...numeros) {
        return numeros.map(num => num * factor);
    }
}
console.log(Calculadora.multiplicar(2, 3, 5, 7)); // [6, 10, 14] */


// Ambito de una variable (scope)
// Ejemplo #1 (variable global)
/* let valor = 10; // variable global

function sumar(valor2) {
    return valor + valor2
}

console.log("Suma:", sumar(50));
console.log("Valor:", valor); */


// Ejemplo #2 (variable local)
/* let valor = 10; // variable global

function sumar(valor2) {
    let valor = 20; // variable local, el ambito de esa variable solo es dentro de esa función
    return valor + valor2
}

console.log("Suma:", sumar(50));
console.log("Valor:", valor); */

// Ambito de bloque
/* if (true) {
    let mensaje = "Dentro del bloque"; // Variable con ámbito de bloque
    console.log(mensaje); // Dentro del bloque
}

console.log(mensaje); // Error: mensaje no está definida fuera del bloque */


// Closure
/* function crearUsuario(nombre) {
    let saldo = 1000; // Variable privada dentro del closure
    
    return {
        mostrarSaldo: function() {
            console.log(`${nombre} tiene un saldo de $${saldo}`);
        },
    
        depositar: function(cantidad) {
            saldo += cantidad;
            console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
        }
    };
}
const usuario1 = crearUsuario("Ana");
usuario1.mostrarSaldo(); // Ana tiene un saldo de $1000
usuario1.depositar(500); // Depósito exitoso. Nuevo saldo: $1500
usuario1.mostrarSaldo(); // Ana tiene un saldo de $1500
console.log(usuario1.saldo); // undefined (saldo es privado) */

/* function crearContador() {
    let contador = 0; // Variable que persiste dentro del closure
    
    return function() {
        contador++;
        console.log(`Contador: ${contador}`);
    };
}
const incrementar = crearContador();
incrementar(); // Contador: 1
incrementar(); // Contador: 2
incrementar(); // Contador: 3 */


/* function contarClicks() {
    let clicks = 0;
    return function() {
        clicks++;
        console.log(`Botón presionado ${clicks} veces`);
    };
}

const boton = document.getElementById("miBoton");
const manejarClick = contarClicks();
boton.addEventListener("click", manejarClick); */

// Funcion New Function
/* const suma = new Function("a", "b", "return a + b");
console.log(suma(5, 3)); // 8
console.log(suma(10, 17, 20)); // 8 */

/* const calcularArea = new Function("base", "altura", `
    let area = base * altura;
    return 'El área es ' + area;
`);

console.log(calcularArea(5, 10)); // "El área es 50" */

// Hoising
/* console.log(declarada()); // Funciona

// Con una función tradicional, se puede invocar desde cualquier lado
function declarada() { return "Soy declarada"; }  */

/* console.log(expresada()); // Error
// Con una función anónima o flecha, solo se puede llamar una vez declarada, antes no
const expresada = function() { return "Soy expresada"; }; */

// console.log(nueva()); // Error

/* console.log(nueva()); // "Soy new Function"
// Pasa exactamente lo mismo que con una función anónima o flecha
const nueva = new Function("return 'Soy new Function';"); */ 


// Uso de this
/* const objeto = {
    valor: 42,
    tradicional() { return this.valor; },
    arrow: () => this.valor,
    nueva: new Function("return this.valor;")
};

console.log(objeto.tradicional()); // 42
console.log(objeto.arrow()); // undefined
console.log(objeto.nueva()); // 42 */

/* function sumarTradicional(a, b) { return a + b; }
const sumarArrow = (a, b) => a + b;
const sumarNueva = new Function("a", "b", "return a + b;");
console.log(sumarTradicional(2, 3)); // 5
console.log(sumarArrow(2, 3)); // 5
console.log(sumarNueva(2, 3)); // 5 */


/* function crearCalculadora(expresion) {
    return new Function("return " + expresion + ";");
}
const calcular = crearCalculadora("5 * 10 + 2"); // new Function("return 5 * 10 + 2;")
console.log(calcular()); // 52 */

/* function generarFuncion(operacion) {
    return new Function("a", "b", `return a ${operacion} b;`);
}
const suma = generarFuncion("+");
console.log(suma(3, 4)); // 7
const multiplicacion = generarFuncion("*");
console.log(multiplicacion(3, 4)); // 12 */

// Funciones de segundo orden (funciones que devuelven una función)
/* const esMayor = () => {
    return (a) => {
        return (a > 10) ? true : false;
    }
 }

const esMayorQue10 = esMayor();
const resultado1 = esMayorQue10(15);
const resultado2 = esMayorQue10(5);
console.log(resultado1);
console.log(resultado2); */

// No pueden acceder a variable locales
/* if (true) {
    let claveSecreta = "12345"; // variable local
}

const obtenerClave = new Function("return claveSecreta;");

console.log(obtenerClave()); // Error: claveSecreta no está definida */


// Control y vinculación de funciones
// En funciones
/* function logExecution(fn) {
    return function (...args) {
        console.log(`Ejecutando ${fn.name} con argumentos:`, args);
        const result = fn(...args);
        console.log(`Resultado:`, result);
        return result;
    };
}

function suma(a, b) {
    return a + b;
}

const sumaDecorada = logExecution(suma);
sumaDecorada(4, 6); */

// En clases
/* const requireAdmin = (_, key, descriptor) => ({
    ...descriptor,
    value(...args) {
        return this.isAdmin ? descriptor.value.apply(this, args) : console.log(`Acceso denegado a ${key}`);
    }
});

class Usuario {
    constructor(nombre, isAdmin) {
        this.nombre = nombre;
        this.isAdmin = isAdmin;
    }

    @requireAdmin
    eliminarUsuario() {
        console.log(`${this.nombre} ha eliminado un usuario.`);
    }
}

const usuario1 = new Usuario("Juan", false);
const admin = new Usuario("Ana", true);
usuario1.eliminarUsuario(); // Acceso denegado
admin.eliminarUsuario(); // Ana ha eliminado un usuario. */

// Decorador en propiedades de clases
/* function defaultValue(value) {
    return function (target, key) {
        let _val = value;
        Object.defineProperty(target, key, {
            get: () => _val,
            set: (newValue) => {
                console.log(`Modificando ${key}: ${_val} → ${newValue}`);
                _val = newValue;
            }
        });
    };
}

class Config {
    @defaultValue(10)
    maxIntentos;
}

const config = new Config();
console.log(config.maxIntentos); // 10
config.maxIntentos = 5; // Modificando maxIntentos: 10 → 5
console.log(config.maxIntentos); // 5 */


// Rededirecciones
// Call
/* function saludar(persona) {
    console.log(`Hola, soy ${persona.nombre}`);
}

const persona = {id:1, nombre:"Juan Perez"}
saludar(persona) */

/* function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}
const usuario = { nombre: "María" };
saludar.call(usuario); // "Hola, soy María" */

// Otro ejemplo
/* function presentar(cargo, empresa) {
    console.log(`${this.nombre} trabaja como ${cargo} en ${empresa}`);
}

const persona = { nombre: "Carlos" };
presentar.call(persona, "Desarrollador", "Google"); */

// Apply
/* function presentar(cargo, empresa) {
    console.log(`${this.nombre} trabaja como ${cargo} en ${empresa}`);
}
const persona = { nombre: "Carlos" };
presentar.apply(persona, ["Desarrollador", "Google", "Apple", "Facebook"]); */

// Otro ejemplo
/* const numeros = [3, 7, 2, 9, 4];
console.log(Math.max.apply(null, numeros)); // 9
console.log(Math.min.apply(null, numeros)); // 2 */

// Otro ejemplo
/* const usuario1 = {
    nombre: "Elena",
    edad: 30,
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
};

const usuario2 = { nombre: "Pedro", edad: 25 };

usuario1.saludar.call(usuario2); // "Hola, soy Pedro y tengo 25 años" */

// Uso de call para herencia de propiedades
/* function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function Empleado(nombre, edad, puesto) {
    Persona.call(this, nombre, edad);
    this.puesto = puesto;
}

const empleado = new Empleado("Lucas", 28, "Ingeniero");
console.log(empleado); // { nombre: "Lucas", edad: 28, puesto: "Ingeniero" } */


// Functión bind()
/* const usuario = {
    nombre: "Ana",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const saludo = usuario.saludar.bind(usuario);
//const saludo = usuario.saludar("Juan");
saludo(); // "Hola, soy Ana" */

// Bind en Clases
/* class Boton {
    constructor(texto) {
        this.texto = texto; // esto es una propiedad (sería como la variable)
    }

    click() { // esto es un método (sería como la función)
        console.log(`Botón ${this.texto} fue presionado`);
    }
}

const btn = new Boton("Enviar");
document.querySelector("button").addEventListener("click", btn.click.bind(btn)); */

// Otro ejemplo
/* function multiplicar(a, b) {
    return a * b;
}

const duplicar = multiplicar.bind(null, 2);
console.log(duplicar(5)); // 10 */

// Funciones Flecha
// Versión #1
/* const sumar = (a, b) => {
    return a + b
} */

// Versión #2 (simplificada), return implícito
/* const sumar = (a, b) => (a + b);
console.log(sumar(20, 50)); */


/* class Usuario {
    constructor(name, email) {
        this.nombre = name;
        this.email = email;
    }

    saludar = () => console.warn(`Hola, soy ${this.nombre} y mi email es ${this.email}`);
}

const usuario = new Usuario("Ana", "ana.quevedo@gmail.com");
usuario.saludar(); // "Hola, soy Ana" */

const sumarTodo = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(sumarTodo(1, 2, 3, 4)); // 10

const Persona = (nombre) => { this.nombre = nombre };
const p = new Persona("Luis"); // Error: Persona is not a constructor

// Queda pendiente IIFE