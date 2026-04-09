// Exportando funciones individualmente
export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

// Exportando una constante
export const PI = 3.1416;

// Exportando una clase
export class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
    static restar(a, b) {
        return a - b;
    }
    static multiplicar(a, b) {
        return a * b;
    }
    static dividir(a, b) {
        return a / b;
    }
}

//export { sumar, restar, PI, Calculadora }; // Exportar todo junto