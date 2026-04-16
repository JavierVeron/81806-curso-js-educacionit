const Titulo = ({mostrarTexto1, mostrarTexto2}) => {
    const texto = "Que ganas de comer una Hamburguesa";

    return (
        <div className="text-primary bg-light p-3 mb-3">
            <p>Hola Amigos de Educación IT</p>
            <p>{texto}</p>
            <p>{mostrarTexto1}</p>
            <p>{mostrarTexto2}</p>
        </div>
    )
}

export default Titulo