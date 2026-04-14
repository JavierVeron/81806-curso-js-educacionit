// Manejo de datos binarios y archivos

// ArrayBuffer
/* const buffer = new ArrayBuffer(16); // Reserva 16 bytes en memoria
console.log(buffer.byteLength); // 16 */

/* const buffer = new ArrayBuffer(8);
const intView = new Int32Array(buffer);
intView[0] = 42;
console.log(buffer);
console.log(intView);
console.log(intView[0]); // 42 */

// Crear un Blob
/* const blob = new Blob(["Hola, mundo"], { type: "text/plain" });
console.log(blob.size); // 12 (tamaño en bytes)
console.log(blob.type); // text/plain
console.log(blob); */

/* const archivo = new File(["Contenido del archivo"], "archivo.txt", { type: "text/plain" });
console.log(archivo.name); // "archivo.txt"
console.log(archivo.size); // 20
console.log(archivo); // 20 */


// Lectura de Archivos en el Navegador
/* const input = document.querySelector('#archivo');
input.addEventListener('change', event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => console.log(reader.result);
    reader.readAsText(file);
}); */

// Leer un Archivo Binario
/* const reader = new FileReader();
reader.onload = () => {
    const arrayBuffer = reader.result;
    console.log(new Uint8Array(arrayBuffer)); // Muestra los datos en binario
};
reader.readAsArrayBuffer(file); */


// ArrayBuffer y arrays binarios
/* const buffer = new ArrayBuffer(4); // 4 bytes = 32 bits
const view = new Uint16Array(buffer);
view[0] = 5000;
view[1] = 1000;
console.log(view); // Uint16Array(2) [5000, 1000] */


// Combinación de Vistas
/* const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
const float64 = new Float64Array(buffer);
uint8[0] = 64;
console.log(float64[0]); */


// TextDecoder y TextEncoder
// Encoder
/* const encoder = new TextEncoder();
const bytes = encoder.encode("¡Hola, mundo!");
console.log(bytes); // Uint8Array([...])

// Decoder
const decoder = new TextDecoder("utf-8");
const texto = decoder.decode(bytes);
console.log(texto); // "¡Hola, mundo!" */

// Otro Ejemplo
/* const textoOriginal = "Programación ❤️";
const encoder = new TextEncoder();
const buffer = encoder.encode(textoOriginal);
const decoder = new TextDecoder();
const textoFinal = decoder.decode(buffer);
console.log(textoFinal); // "Programación ❤️" */


// File y FileReader
// File
/* const input = document.querySelector('#archivo');
input.addEventListener('change', () => {
    const archivo = input.files[0];
    console.log(archivo.name, archivo.size, archivo.type);

    if (archivo.type != "image/jpeg") {
        console.log("Solo se permiten imágenes jpg!");
    }
}); */

// FileReader
/* const input = document.querySelector('#archivo');
input.addEventListener('change', () => {
    const archivo = input.files[0];
    const reader = new FileReader();
    reader.onload = function () {
        console.log("Contenido:", reader.result);
    };
    reader.onerror = function () {
        console.error("Error de lectura", reader.error);
    };
    //reader.readAsText(archivo); // o readAsDataURL, readAsArrayBuffer
    //reader.readAsDataURL(archivo); // o readAsDataURL, readAsArrayBuffer
    reader.readAsArrayBuffer(archivo); // o readAsDataURL, readAsArrayBuffer
}); */


const input = document.querySelector('#archivo');
input.addEventListener('change', () => {
    const archivo = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const contenido = document.getElementById('contenido');
        contenido.textContent = reader.result;
        contenido.classList.add("text-white");
        contenido.classList.add("bg-black");
        contenido.classList.add("p-3");
    };
    reader.readAsText(archivo);
});


const inputImagen = document.querySelector('#imagen');
inputImagen.addEventListener('change', () => {    
    const archivo = inputImagen.files[0];
    const reader = new FileReader();
    const img = document.getElementById("preview");
    reader.onload = () => {
        img.src = reader.result;
    };
    reader.readAsDataURL(archivo);
});