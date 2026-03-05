// Eventos Drag & Drop
const origen = document.querySelector("#origen");
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
})

// Eventos del Teclado
const texto = document.getElementById("texto");
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
}

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
console.log(validarEmail("usuario@dominio.com")); // true
console.log(validarEmail("usuario.nombre@sub.empresa.es")); // true
console.log(validarEmail("usuario@dominio")); // false (falta extensión)
console.log(validarEmail("hola@com")); // false (formato incompleto)
console.log(validarEmail("hola@")); // false (formato incompleto)
console.log(validarEmail("hola@google.com")); // false (formato incompleto)

texto.addEventListener("keyup", longitudTweet);
btnEnviar.addEventListener("click", enviarTweet);

// QUEDA PENDIENTE PROMESAS Y MANEJO DE ERRORES