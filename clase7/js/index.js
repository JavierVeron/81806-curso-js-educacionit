// Programación reactiva y monitoreo de cambios
import { Observable } from 'rxjs';

//console.log("Inicio de Operación"); // Se ejecuta de forma síncrona

const observable = new Observable(subscriber => {
    subscriber.next('Valor 1');
    subscriber.next('Valor 2');
    setTimeout(() => {
        subscriber.next('Valor 3');
        subscriber.complete(); // Finaliza la emisión
    }, 2000);
});

/* observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Observable finalizado')
}); // Se ejecuta de forma asíncrona */

//console.log("Fin de la Operación"); // Se ejecuta de forma síncrona


/* observable.subscribe({
    next: valor => console.log('Valor recibido:', valor), // Se ejecuta al recibir datos
    error: err => console.error('Error:', err), // Se ejecuta si ocurre un error
    complete: () => console.log('Finalizado') // Se ejecuta cuando el Observable termina
}); */


// OF
/* import { of } from 'rxjs';

//const obs = of(10, 20, 30);
//const obs = of("tomas", "daniela", "juan");
const obs = of({id:1, nombre:"Coca Cola"}, {id:2, nombre:"Pepsi"}, {id:3, nombre:"Coca Cola Zero"});
obs.subscribe(console.log); */


// FROM
/* import { from } from 'rxjs';

const obs = from([1, 2, 3, 4]); // Desde un array
obs.subscribe(console.log);
const obsPromise = from(fetch('https://jsonplaceholder.typicode.com/todos/1'));
obsPromise.subscribe(res => res.json().then(console.log)); */


// INTERVAL
/* import { interval } from 'rxjs';

const obs = interval(2000); // Emite cada segundo
obs.subscribe(console.log); */


// FROM EVENT
/* import { fromEvent } from 'rxjs';

const clickObservable = fromEvent(document.getElementById("boton"), 'click');
clickObservable.subscribe(() => console.log('Clic detectado!')); */


// MAP
/* import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
    map(num => num * 10)
).subscribe(console.log); */


// MergeMAP
/* import { fromEvent, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
    mergeMap(() => interval(500))
).subscribe(console.log); */


// Manejo de Errores en Observables
/* import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const obs = throwError(() => new Error('¡Ocurrió un error!')).pipe(
    catchError(err => {
        console.error(err.message);
        return of('Valor alternativo'); // Retorna un valor seguro
    })
);
obs.subscribe(console.log); */


// Cancelación de los Observables
/* import { interval } from 'rxjs';

const subscription = interval(1000).subscribe(console.log);
setTimeout(() => {
    subscription.unsubscribe(); // Detiene la suscripción tras 5s
    console.log('Observador cancelado');
}, 5000); */


// Take
/* import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

interval(1000).pipe(take(3)).subscribe(console.log); */


// Mutation Observer
/* const observer = new MutationObserver(callback);
observer.observe(elementoObjetivo, opciones); */

// Seleccionar el nodo a observar
/* const targetNode = document.getElementById('observed');

// Crear un nuevo observador
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        console.log('Cambio detectado:', mutation);
    });
});

// Configurar opciones de observación
const config = { childList: true, subtree: true };

// Iniciar la observación
observer.observe(targetNode, config);

// Simular cambio en el DOM
setTimeout(() => {
    targetNode.textContent = 'Nuevo contenido detectado';
}, 2000); */


// Tipos de Documentos a Observar
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes') {
            console.log(`Atributo cambiado: ${mutation.attributeName}`);
        }
    });
});

const config = { attributes: true };
observer.observe(targetNode, config);

// Simular cambio en atributo
setTimeout(() => {
    targetNode.setAttribute('class', 'nuevo-estilo');
}, 2000);