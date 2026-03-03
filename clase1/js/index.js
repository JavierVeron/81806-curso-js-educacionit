// BOM
/* window.navigator.geolocation.getCurrentPosition((posicion) => {
    // Obtiene la posición geográfica actual
    console.log(posicion.coords);
})

window.navigator.geolocation.watchPosition((posicion) => {
    // A diferencia de getCurrentPosition, llamará a
    // esta función cada vez que cambie la posición actual.
    // Sería como un "rastreo"
    console.log(posicion.coords);
})

window.navigator.clipboard.writeText('Esto se copiará al portapapeles');
window.navigator.clipboard.readText(); // Leemos lo que está copiado en el portapapeles */

// Sin window
const razonDelError = 'ho'; // variable global (el alcance de esta variable solo en toda la aplicación)

function esValido(texto) {
    //const razonDelError = ''; // al ser constante se define una sola vez (no se puede volver a redefinir)
    
    /* let razonDelError; // Declarar la variable
    razonDelError = "hola"; // Asignar un valor a la variable; */
    let razonDelError = ''; // Declarar y asingar un string a la variable

    //const razonDelError = ''; // variable local (el alcance de esta variable solo es dentro de esta funcion)
    
    if (texto.length < 3) {        
        razonDelError = "El texto es muy corto";
        return false;
    }


    if (texto.length > 10) {
        razonDelError = "El texto es muy largo";
        return false;
    }

    return true;
}
/**
* ¿Podemos obtener la razón del error?
* En este caso, se lanzaría un error.
* Las variables declaradas en una función son locales.
*/
/* console.log(razonDelError);
console.log(esValido(razonDelError)); */


// Cuando se cargue la página quiero ejecutar un Saludo
// Opción #1 => Utilizando la palabra function
/* window.onload = function() {
    alert("Hola a todos!");
} */

// Opción #2 => Utilizando una función flecha o arrow function
/* window.onload = () => {
    alert("Hola a todos!");
} */


// DOM
// getElementById =>  Devuelve 1 solo elemento HTML
const header = document.getElementById("header");
const encabezado = document.getElementById("encabezado");
header.className = "fondoGris";
encabezado.title = "Academia de Cursos Online";
encabezado.innerHTML = "Educación IT";
encabezado.style.color = "blue";
encabezado.style.textTransform = "uppercase";

// getElementsByClassName => // Devuelve un array de elementos html por medio de su clase
/* const paises = document.getElementsByClassName("paises"); 
console.log(paises);
const pais5 = paises[5];
pais5.innerHTML = "Venezuela ⛳";
pais5.style.color = "blue";
pais5.style.fontWeight = "bold"; */

// getElementsByTagName => // Devuelve un array de elementos html por medio de su etiqueta
/* const paises = document.getElementsByTagName("li");

for (const pais of paises) {
    pais.style.color = "blue";
} */


// QuerySelector
/* const encabezado2 = document.querySelector("#encabezado"); // Seleccione por ID
encabezado2.innerHTML = "EDUCATION it" */

/* const paises = document.querySelectorAll(".paises"); // Seleccione por clase
console.log(paises);
for (const pais of paises) {
    pais.style.color = "blue";
} */

// Opción #1 => Obtengo el padre y navego los nodos hijos
/* const paises2 = document.querySelector("#paises2");
//console.log(paises2);
const paisesHijos2 = paises2.children; // Acceder a los elementos html "hijos" del padre

for (const pais of paisesHijos2) {
    pais.style.color = "blue";
} */

// Opción #2 => Selecciono directamente los elementos html
/* const paisesHijos2 = document.querySelectorAll("#paises2 li");
//console.log(paisesHijos2);

for (const pais of paisesHijos2) {
    pais.style.color = "blue";
} */

// Crear elementos HTML
/* const paises1 = document.getElementById("paises1");
const item = document.createElement("li");
item.innerHTML = "México";
item.className = "paises";
//paises1.appendChild(item); // Agrego en último del lugar de los hijos
paises1.prepend(item); // Agrego en primer lugar de los */

// Document Fragment
/* const fragmento = document.createDocumentFragment()
const names = ["susana", "andrea", "lorena"];
names.forEach(n => fragmento.innerHTML += `<div>${n}</div>`)

document.getElementById("contenido").appendChild(fragmento) */

// setAttribute => Asignar un nuevo valor
/* const encabezado2 = document.getElementById("encabezado");
encabezado2.setAttribute("title", "Academia de Cursos"); */

// setAttribute => Asignar un nuevo valor
/* const encabezado2 = document.getElementById("encabezado");
const texto = encabezado2.getAttribute("title");
console.log(texto); */

// Accediento al Nodo
/* const contenido = document.getElementById("contenido");
console.log(contenido.nodeName);
const parrafo = document.getElementById("parrafo");
console.log(parrafo.nodeName);
parrafo.innerHTML = "Esto es un texto" */

// Agregar parrafos
/* const contenido = document.getElementById("contenido");
contenido.style.backgroundColor = "lightblue";
contenido.style.padding = "20px";
const parrafo1 = document.createElement("p");
parrafo1.innerHTML = "Texto #1";
const parrafo2 = document.createElement("p");
parrafo2.innerHTML = "Texto #2";
contenido.appendChild(parrafo1);
contenido.appendChild(parrafo2);
contenido.removeChild(parrafo1); // Quito el elemento html "parrafo1"
parrafo2.remove(); // Eliminar el elemento html "parrafo2"; */

// Eventos
function agregarTexto() {
    const inputTexto = document.getElementById("texto");
    console.log(inputTexto.value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = inputTexto.value;
    inputTexto.value = "";
}

const btnAgregar = document.getElementById("btnAgregar");
//btnAgregar.addEventListener("click", agregarTexto); // Opción #1 => agregar el método addEventListener
/* btnAgregar.onclick = function() { // Opción #2a => modificando la propiedad onclick (con función anónima)
    agregarTexto();
} */
btnAgregar.onclick = () => { // Opción #2b => modificando la propiedad onclick (con función flecha)
    agregarTexto();
}

const textoOrigen = document.getElementById("textoOrigen");
textoOrigen.addEventListener("input", function() {
    const textoDestino = document.getElementById("textoDestino");
    textoDestino.value = textoOrigen.value.toUpperCase();
})


// Sincrónico
/* console.log("Inicio de Programa");
console.log("Mitad de Programa");
console.log("Fin de Programa"); */

// Asincrónico
console.log("Inicio de Programa");

setTimeout(() => {
    console.log("Mitad de Programa #1");
}, 3000)

setTimeout(() => {
    console.log("Mitad de Programa #2");
}, 2000)

setTimeout(() => {
    console.log("Mitad de Programa #3");
}, 1000)

console.log("Fin de Programa");

// QUEDA PENDIENTE FASES DE EVENTOS