// Eventos Drag & Drop
/* const origen = document.querySelector("#origen");
const destino = document.querySelector("#destino");

origen.addEventListener("dragstart", (event) => {
    event.target.style.opacity = 0.6;
})

origen.addEventListener("drag", () => {
    console.log("Estamos arrastrando el elemento!");
})

origen.addEventListener("dragend", (event) => {
    event.target.style.opacity = 1;
    origen.removeChild(event.target);
    destino.appendChild(event.target);
})

destino.addEventListener("dragover", (event) => {
    destino.className = "col-md-6 p-5 bg-success"
}) */

// Eventos del Teclado
/* const texto = document.getElementById("texto");
const mensajeInfo = document.getElementById("mensajeInfo");
const btnEnviar = document.getElementById("btnEnviar");
const mensajes = document.getElementById("mensajes");
const maximo = 40;

const longitudTweet = () => {
    const mensajeTexto = texto.value.length;

    if (mensajeTexto <= maximo) {
        const diferencia = maximo - mensajeTexto;
        mensajeInfo.innerHTML = "Quedan " + diferencia + " caracteres!";
    } else {
        texto.value = texto.value.substr(0, maximo);
    }
} */

const enviarTweet = () => {
    // Validando que un tweet tenga más de 2 caracteres y tenga al final un !
    /* if (texto.value.length > 2) {
        const caracter = texto.value[texto.value.length - 1];
        const codigo = caracter.charCodeAt();

        if (codigo == 33) {
            mensajes.className = "fw-bold text-secondary";    
            mensajes.innerHTML = texto.value;
            texto.value = "";
        }
    } */

    // Validar emails
    if (texto.value.includes("@")) {
        mensajes.className = "fw-bold text-secondary";    
        mensajes.innerHTML = texto.value;
        texto.value = "";
    }
}

function validarEmail(email) {
  // Esta expresión regular verifica:
  // 1. Caracteres antes del @
  // 2. Presencia del @
  // 3. Dominio (letras y números)
  // 4. Extensión (mínimo 2 caracteres, ej: .com, .es, .edu)
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return regex.test(email);
}

// Ejemplos de uso:
/* console.log(validarEmail("usuario@dominio.com")); // true
console.log(validarEmail("usuario.nombre@sub.empresa.es")); // true
console.log(validarEmail("usuario@dominio")); // false (falta extensión)
console.log(validarEmail("hola@com")); // false (formato incompleto)
console.log(validarEmail("hola@")); // false (formato incompleto)
console.log(validarEmail("hola@google.com")); // false (formato incompleto) */

/* texto.addEventListener("keyup", longitudTweet);
btnEnviar.addEventListener("click", enviarTweet); */


// Promesas
/* const miPromesa = () => {
    return new Promise((resolve, reject) => {
        //console.log("Promesa pendiente...");
        //resolve("Nos vemos el Domingo a las 5 de la tarde!"); // Completando la promesa (fullfilled)
        reject("No, no puedo porque no tengo dinero! Abrazoooo"); // Rechazando la promesa (rejected)
    })
}

console.log(miPromesa()); */

/* const respuesta = document.getElementById("respuesta");
const irAlCine = (saldo) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (saldo > 10000) {
                res("Podes ir al Cine!");
            } else {
                rej("No, no podés ir al Cine! (Porque sos pobre!)");
            }
        }, 3000);
    })
}

irAlCine(55000)
.then(resultado => {
    respuesta.innerHTML = `<div class="alert alert-success" role="alert">${resultado}</div>`;
})
.catch(resultado => {
    respuesta.innerHTML = `<div class="alert alert-danger" role="alert">${resultado}</div>`;
}) */


// Encadenamiento de Promesas
/* fetch("https://jsonplaceholder.typicode.com/users")
.then(respuesta => respuesta.json())
.then(respuesta => {
    console.table(respuesta);
})
.catch(respuesta => {
    console.error(respuesta);
}) */


// Promise .all()
/* const promesa1 = fetch("https://jsonplaceholder.typicode.com/users");
const promesa2 = Promise.resolve("Buen Lunes!");
const promesa3 = 50;
Promise.all([promesa1, promesa2, promesa3])
.then(data => {
    console.log(data);
}) */


// Ejecuanto Promesas en Paralelo
/* const promesa1 = fetch("https://jsonplaceholder.typicode.com/users");
const promesa2 = fetch("https://fakestoreapi.com/products");
const promesa3 = fetch("https://api.escuelajs.co/api/v1/products");
const promesa4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10000)
        }, 3000)
    })
};
Promise.all([promesa1, promesa2, promesa3, promesa4])
.then(data => {
    console.log(data);
}) */


// Promise .allSettled()
/* const promesa1 = fetch("https://jsonplaceholder.typicode.com/users");
const promesa2 = fetch("https://fakestoreapi.com/products");

Promise.allSettled([promesa1, promesa2])
.then(data => {
    console.log(data);
}) */

// Promise .race()
/* const promesa1 = fetch("https://jsonplaceholder.typicode.com/users");
const promesa2 = fetch("https://fakestoreapi.com/products");
const promesa3 = fetch("https://api.escuelajs.co/api/v1/products");

Promise.race([promesa1, promesa2, promesa3])
.then(data => {
    console.log(data);
}) */


// Promise .any()
/* const promesa1 = fetch("https://jsonplaceholder3.typicode.com/users");
const promesa2 = fetch("https://fakestoreapi.com/products");
const promesa3 = fetch("https://api.escuelajs.co/api/v1/products");

Promise.any([promesa1, promesa2, promesa3])
.then(data => {
    console.log(data);
}) */



// Promisificación
/* function obtenerDatos(callback) {
    setTimeout(() => callback(null, "Datos cargados"), 2000);
}
function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatos((error, data) => error ? reject(error) : resolve(data));
    });
}

obtenerDatosPromesa().then(console.log).catch(console.error) */

// Ejemplo
/* const respuesta = document.getElementById("respuesta");
function obtenerJSON(url) {
    return fetch(url).then(res => res.json());
}

obtenerJSON("https://jsonplaceholder3.typicode.com/todos/1")
.then(data => {
    respuesta.innerHTML = `<div class="alert alert-dark" role="alert">${data.id}# ${data.title}</div>`;    
})
.catch(data => {
    respuesta.innerHTML = `<div class="alert alert-danger" role="alert">Error! No se pudo acceder a la API!</div>`;  
}) */


// Async / Await
// Función API (asíncrona)
/* const getAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

(async() => {
    const resultado = await getAPI("https://jsonplaceholder.typicode.com/users/");
    console.log(resultado);
})(); */


// Try / Catch
/* const respuesta = document.getElementById("respuesta");
respuesta.innerHTML = `<div class="my-5 text-center">
    <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>`;

const getAPI = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        let contenidoHTML = `<ul class="list-group">`;

        for (const item of data) {
            contenidoHTML += `<li class="list-group-item">${item.name} (${item.username})</li>`
        }

        contenidoHTML += `</ul>`;
        respuesta.innerHTML = contenidoHTML;
    } catch (error) {
        respuesta.innerHTML = `<div class="alert alert-danger" role="alert">Error! No se pudo acceder a la API!</div>`;
    }
}

getAPI("https://jsonplaceholder.typicode.com/users/"); */


// Finally => con métodos .then() y .catch()
/* fetch("https://jsonplaceholder5.typicode.com/users")
.then(respuesta => respuesta.json())
.then(respuesta => {
    console.table(respuesta);
})
.catch(respuesta => {
    console.error(respuesta);
})
.finally(() => {
    console.log("Fetch de API finalizada!");
}) */

// Finally => con métodos try() catch() y finally()
const getAPI = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Fetch de API finalizada!");
    }
}

getAPI("https://jsonplaceholde3r.typicode.com/users")