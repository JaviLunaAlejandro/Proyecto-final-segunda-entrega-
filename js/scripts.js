const lista = [
    { id: 1, nombre: "Mother AMD", precio: 15000, stock: 10 },
    { id: 2, nombre: "Mother INTEL", precio: 18000, stock: 15 },
    { id: 3, nombre: "Micro AMD", precio: 7500, stock: 9 },
    { id: 4, nombre: "Micro INTEL", precio: 8600, stock: 5 },
    { id: 5, nombre: "RAM 4gb", precio: 2000, stock: 20 },
    { id: 6, nombre: "Grafica AMD", precio: 30000, stock: 10 },
    { id: 7, nombre: "Grafica GeForce", precio: 50000, stock: 10 }
];
let carrito = []

let saludo = alert("Bienvenido, necesitas ser mayor de 18 para poder comprar")
let aviso = prompt("¿Sos mayor?")

if (aviso == "si") {
    alert("estos son los componentes a disposicion")
    let ListaProd = lista.map((componente) => componente.nombre + " " + componente.precio + "$");
    alert(ListaProd.join("\n"))
}
else if (aviso == "no") {
    alert("podes comprar con un adulto responsable")
}

while (aviso != "no") {
    let componente = prompt("agrega los componentes que necesites")
    let precio = 0
    if (componente == "Mother AMD" || componente == "Mother INTEL" || componente == "Micro AMD" || componente == "RAM 4gb" || componente == "Grafica AMD" || componente == "Grafica GeForce") {
        switch (componente) {
            case "Mother AMD":
                precio = 15000;
                break;
            case "Mother INTEL":
                precio = 18000;
                break;
            case "Micro AMD":
                precio = 7500;
                break;
            case "Micro INTEL":
                precio = 8600;
                break;
            case "RAM 4gb":
                precio = 2000;
                break;
            case "Grafica AMD":
                precio = 30000;
                break;
            case "Grafica GeForce":
                precio = 50000;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt("que cantidad necesita?"))

        carrito.push({ componente, cantidad, precio })
        console.log(carrito)
    } else {
        alert("no ingresaste un componente disponible")
    }
    aviso = prompt("buscas otro producto?")

    while (aviso === "no"){
        alert("muchas gracias")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.componente}, unidades: ${carritoFinal.cantidad}, 
            precio final es ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
        function carritoFinal(cantidad, precio){
            precioTotal += cantidad * precio
        }
        break;
    }
}

