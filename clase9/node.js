/* let nombre = "Orlando";
nombre = "Daniela";
console.log("Mi nombre es: " + nombre);

const productos = [
    {id:1, nombre:"Coca Cola", precio:5000},
    {id:2, nombre:"Pepsi", precio:4900},
    {id:3, nombre:"Sprite", precio:4800}
]

console.log(productos); */

/* const llamarAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    console.log(data);
}

llamarAPI(); */

// Crear un Servidor Básico en HTTP
// server.mjs
/* import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola a Todos! Estamos cursando JS en Educación IT!\n');
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
}); */

// Crear un archivo desde Node.js
/* import fs from "fs";

const archivo = "prueba.txt";
//fs.writeFileSync(archivo, "Hola a Todos!");
//console.log("listo!");
const contenido = fs.readFileSync(archivo, "utf-8");
console.log(contenido); */

import express from "express"

const app = express()
const port = 3000

const usuarios = [{id:1, nombre:"Orlando"}, {id:2, nombre:"Joaquin"}, {id:3, nombre:"Agustina"}, {id:4, nombre:"Martín"}];

app.get('/', (req, res) => {
  //res.send('Cursando JS en Educación IT!');
  res.send(`<h1>Educación IT</h1>
    <p>Hola a Todos!</p>`);
})

app.get('/api/usuarios', (req, res) => {
  res.send(usuarios);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


