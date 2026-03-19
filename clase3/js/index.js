// XmlHttpRequest
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onreadystatechange = function () {
    //console.log(xhr);
    
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    }
};
xhr.send(); */

// Fetch (utilizando async/await y try/catch)
/* const obtenerDatos = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Eror en la API!");
        console.log(error);
    }
}

obtenerDatos("https://jsonplaceholder.typicode.com/users/2"); */

// Fetch POST
/* const enviarDatos = async () => {
    const contenido = document.getElementById("contenido");

    try {
        const nuevoProducto = {title:"Zapatillas Gazelle para Cancha Cubierta", price: 101999, description:"Las zapatillas Gazelle de adidas, que en su día fueron zapatillas de entrenamiento y ahora son un ícono atemporal, combinan un exterior de gamuza con una suela de caucho color caramelo para ofrecer un look retro perfecto para llevar con ropa informal. La etiqueta en el talón en contraste y las 3 Tiras completan su elegante diseño.", category:"Zapatillas", image:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9c5fab82e714c1f971806c20037bd0b_9366/Zapatillas_Gazelle_para_Cancha_Cubierta_Rojo_JI2063_01_standard.jpg"};

        const response = await fetch("https://fakestoreapi.com/product", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(nuevoProducto)
        })
        const data = await response.json();
        contenido.innerHTML = "El producto se subió correctamente!";
        contenido.className = "col-md-4 bg-success text-white p-3";       
    } catch {
        contenido.innerHTML = "Error! No se pudo enviar el mensaje!";
        contenido.className = "col-md-4 bg-danger text-white p-3";       
    }
} */

// Form Data
/* const enviarDatos = async () => {
    const form1 = document.querySelector("#form1");
    const formData = new FormData(form1);
    formData.append("url", "https://www.educacionit.com"); // agregar un nuevo valor
    formData.delete("password"); // quitar un valor
    //capturarDatos(formData);

    const response = await fetch("https://fakestoreapi.com/products", {
        method:"POST",
        body:formData
    })
    const data = await response.json();    
    contenido.innerHTML = "Se agrego correctamente el Producto #" + data.id;
    contenido.className = "col-md-4 bg-success text-white p-3";
}

const capturarDatos = (formData) => {
    const claves = formData.keys();
    //console.log(claves);
    const valores = formData.values();
    //console.log(valores);

    do {
        let clave = claves.next()
        let valor = valores.next()
        if(clave.done || valor.done) break
        console.log(clave.value, valor.value)
    } while(true)
}

document.getElementById("btnEnviar").addEventListener("click", enviarDatos); */


// API Stream
/* fetch("js/contenido.json")
.then(response => response.body)
.then(data => {
    console.log(data);
}) */

// Para obtener el peso del archivo
/* fetch("js/contenido.json")
.then(response => {
    const contentLength = response.headers.get('Content-Length');
    console.log(`Tamaño total: ${contentLength} bytes`);
}); */

// Para obtener los datos a medida que van llegando
/* fetch("js/contenido.json")
.then(response => {
    const reader = response.body.getReader();
    return reader;
 }); */

 // Process chunk
/*  fetch("js/contenido.json")
 .then(response => {
    const contentLength = response.headers.get('Content-Length');
    let receivedLength = 0;
    const reader = response.body.getReader();
    const progreso = document.getElementById("progreso");
    return reader.read().then(function processChunk({ done, value }) {
        if (done) {
            console.log('Descarga completada');
            return;
        }
        
        receivedLength += value.length;
        const calculo = (receivedLength / contentLength) * 100;
        console.log(`Progreso: ${calculo.toFixed(2)}%`);
        progreso.value = receivedLength;
        progreso.innerHTML = `${calculo.toFixed(2)}%`;
        return reader.read().then(processChunk);
    });
 }); */


// Abort
/* const controller = new AbortController();
const signal = controller.signal;
//controller.abort();
//setTimeout(() => controller.abort(), 500)

fetch("js/contenido.json", {signal:signal})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch request was aborted');
    } else {
      console.error('Fetch error:', error);
    }
}); */


// Objetos URL
/* const url = new URL("https://api.escuelajs.co/api/v1/products?offset=2&limit=3");
console.log(url.host);
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.protocol);
console.log(url.protocol + "//" + url.host + url.pathname);
console.log(url.searchParams);
const params = url.searchParams;
const offset = params.get("offset");
const limit = params.get("limit");
console.log(offset, limit);
params.set("offset", 5);
params.set("limit", 5); */

//location.href = url.protocol + "//" + url.host + url.pathname + "?" + parametros;

/* params.set("price", "ASC");
console.log(params);
//params.delete("offset");

let parametros = ""; */

//for (const clave in Object.fromEntries(params.entries())) {      
    //parametros += clave + "=" + params.get(clave) + "&"
//}

//console.log(url.protocol + "//" + url.host + url.pathname + "?" + parametros);

/* for (let [clave, valor] of url.searchParams) {
    console.log(`${clave}: ${valor}`);
} */

//console.log(url.toString());

// Objetos History
/* document.getElementById("boton1").addEventListener("click", () => {    
    window.history.back();
});

document.getElementById("boton2").addEventListener("click", () => {
    window.history.go(-2);
});

document.getElementById("boton3").addEventListener("click", () => {
    window.history.forward();
});

document.getElementById("boton4").addEventListener("click", () => {
    location.reload();
});

document.getElementById("boton5").addEventListener("click", () => {
    location.assign("https://www.google.com.ar"); // Redirecciona
});

document.getElementById("boton6").addEventListener("click", () => {
    location.replace("https://www.google.com.ar"); // Redirecciona pero no mantiene en el historial
});

document.getElementById("boton7").addEventListener("click", () => {
    location.href = "https://www.google.com.ar"; // Redirecciona
}); */

/* window.addEventListener("popstate", (event) => {
    console.log("Estado cambiado:", event.state);
}); */

/* window.addEventListener("resize", (event) => {
    console.log("Modificaste la ventana!");
}); */

// Objeto location
/* const miURL = location.href;
console.log(miURL); */

// Plantilla literal o Template Strings
const usuario = { nombre: 'Ana', edad: 30 };

//document.getElementById("contenido").innerHTML = "Nombre: <b>" + usuario.nombre + "</b><br />Edad: <b>" + usuario.edad + " años</b>"; // concatenación
//document.getElementById("contenido").innerHTML = `Nombre: <b>${usuario.nombre}</b><br />Edad: <b>${usuario.edad} años</b>`;

// Objeto template
/* const template = document.getElementById("usuario-template");
const clonar = template.content.cloneNode(true);
clonar.querySelector('.nombre').textContent = `${usuario.nombre}`;
clonar.querySelector('.edad').innerHTML = `Edad: <b>${usuario.edad} años</b>`;
document.body.appendChild(clonar); */

// Map
/* const productos = [
    { nombre: 'Coca Cola 2Lts', precio: 5500 },
    { nombre: 'Coca Cola Zero 2Lts', precio: 5300 }
];
const contenedor = document.getElementById('lista');
contenedor.innerHTML = productos.map(p => `
    <div class="producto">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
    </div>
`).join(''); */


// Handlebars
// Obtener el HTML de la plantilla
const templateSource = document.getElementById("template").innerHTML;

// Compilar la plantilla con Handlebars
const template = Handlebars.compile(templateSource);
// Datos dinámicos

const contexto = {
    titulo1: "Con el gol N° 900 de la carrera de Messi, Inter Miami vence a Nashville SC y se acerca a los cuartos de la Concachampions",
    descripcion1: "Inter Miami le gana 1-0 frente a Nashville SC en el Chase Stadium por el encuentro de vuelta correspondiente a los octavos de la Copa de Campeones de la Concacaf. Lionel Messi rompió la paridad a los 16 minutos con la anotación del gol 900 en su carrera y, a lo largo de la etapa, Germán Berterame, Tadeo Allende y Facundo Mura tuvieron ocasiones para ampliar la diferencia, pero sus remates fueron contenidos por el arquero Brian Schwake.",
    titulo2: "Antonela Roccuzzo y Valentina Cervantes dejaron de seguir a Emilia Mernes tras la actitud de Tini Stoessel",
    descripcion2: "Luego del gesto de la Triple T que llamó la atención de sus seguidores, la empresaria rosarina y la exparticipante de MasterChef Celebrity siguieron sus pasos.",
    titulo3: "Megafusión entre dos cadenas de supermercados: 12 sucursales, 1.600 empleados y un centro logístico cambian de dueño",
    descripcion3: "La Anónima alcanzó un acuerdo con Grupo Libertad para quedarse con doce hipermercados y busca potenciar su presencia en todo el país."
};

const noticias = [
    {
        titulo:"Con el gol N° 900 de la carrera de Messi, Inter Miami vence a Nashville SC y se acerca a los cuartos de la Concachampions",
        descripcion:"Inter Miami le gana 1-0 frente a Nashville SC en el Chase Stadium por el encuentro de vuelta correspondiente a los octavos de la Copa de Campeones de la Concacaf. Lionel Messi rompió la paridad a los 16 minutos con la anotación del gol 900 en su carrera y, a lo largo de la etapa, Germán Berterame, Tadeo Allende y Facundo Mura tuvieron ocasiones para ampliar la diferencia, pero sus remates fueron contenidos por el arquero Brian Schwake."
    },
    {
        titulo:"Antonela Roccuzzo y Valentina Cervantes dejaron de seguir a Emilia Mernes tras la actitud de Tini Stoessel",
        descripcion:"Luego del gesto de la Triple T que llamó la atención de sus seguidores, la empresaria rosarina y la exparticipante de MasterChef Celebrity siguieron sus pasos.",
    },
    {
        titulo:"Megafusión entre dos cadenas de supermercados: 12 sucursales, 1.600 empleados y un centro logístico cambian de dueño",
        descripcion:"La Anónima alcanzó un acuerdo con Grupo Libertad para quedarse con doce hipermercados y busca potenciar su presencia en todo el país."
    }
];

const suscriptor = {
    esPremium:true
}

// Generar HTML con datos y agregarlo al DOM
document.body.innerHTML += template({noticias, suscriptor});