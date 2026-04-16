/* const llamarAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    console.log(data);
}

llamarAPI(); */

// Cookies
/* let fecha = new Date();
fecha.setTime(fecha.getTime() + (1000)); // Días * horas * min * seg * miliseg
document.cookie = "academia=Educación IT; expires=" + fecha.toUTCString();
console.log(document.cookie);
const datos = document.cookie.split("=");
console.log(datos[1]); */


// localStorage y sessionStorage
/* localStorage.setItem("nombre", "Orlando Vargas"); // Creo localStorage "nombre"
localStorage.setItem("edad", 25);
localStorage.setItem("casado", true); */
/* console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("edad"));
//console.log(25);
console.log(localStorage.getItem("casado"));
//console.log(true);
localStorage.removeItem("edad"); // Eliminar solo la localStorage "edad"
localStorage.setItem("nombre", "Joaquin Gonzalez");
localStorage.clear(); // Elimina todas las localStorage */


// Session Storage
/* sessionStorage.setItem("nombre", "Joaquin Gonzalez"); */
//console.log(sessionStorage.getItem("nombre"));

/* const login = () => {
    const email = document.querySelector("#email");
    const clave = document.querySelector("#clave");
    const usuario = {email:email.value, clave:clave.value};
    console.log(usuario);
    // Guardar en una localStorage un objeto
    localStorage.setItem("usuario", JSON.stringify(usuario));
    const usuarios = [{id:1, nombre:"Orlando"}, {id:2, nombre:"Joaquin"}, {id:3, nombre:"Agustina"}];
    // Guardar en una localStorage un array
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    email.value = "";
    clave.value = "";
    const datos = JSON.parse(localStorage.getItem("usuario"));
    document.querySelector("#resultado").innerHTML = `<p>Usuario: <b>${datos.email}</b> - Clave: <b>${datos.clave}</b></p>`;
    console.log(JSON.parse(localStorage.getItem("usuarios")));   
}

document.querySelector("#btnEnviar").addEventListener("click", login); */

// Cuando cargue la pagina busque la LS y cargue en el campo
/* const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario.email) {
    document.querySelector("#email").value = usuario.email;
} */

