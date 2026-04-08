class Contador {
    static inicio = 0;
    static fin = 0;
    
    static iniciar() {
        this.inicio = new Date(); // dia, mes, año, hora, minuto, segu
        
        return "Comienza conteo..."
    }

    static detener() {
        this.fin = new Date();
        let diferencia = this.fin - this.inicio;

        return this.darFormato(diferencia);
    }

    static reiniciar() {
        this.inicio = new Date();
        this.fin = null;

        return "Reiniciando..."
    }

    static darFormato(diferencia) {
        console.log(diferencia);
        
        let valor = new Date(diferencia / 3600);        
        
        return `${valor.getHours()}:${valor.getMinutes()}:${valor.getSeconds()}`
    }
}


const btnIniciar = document.getElementById("btnIniciar");
const btnDetener = document.getElementById("btnDetener");
const btnReiniciar = document.getElementById("btnReiniciar");

const iniciarContador = () => {
    let resultado = Contador.iniciar();
    document.getElementById("contador").innerHTML = resultado;
}

const detenerContador = () => {
    let resultado = Contador.detener();
    document.getElementById("contador").innerHTML = resultado;
}

const reiniciarContador = () => {
    let resultado = Contador.reiniciar();
    document.getElementById("contador").innerHTML = resultado;
}

btnIniciar.addEventListener("click", iniciarContador);
btnDetener.addEventListener("click", detenerContador);
btnReiniciar.addEventListener("click", reiniciarContador);