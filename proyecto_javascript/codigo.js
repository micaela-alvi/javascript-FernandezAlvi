let saludo = "Hola, bienvenid@ a La Chica Musicales"
alert (saludo)


function CompraDeEntradas(){
    var numeroDeEntradas = parseInt(prompt("Cuantas entradas desea comprar?"));
    var totalCompra = 0;
    for (var i = 1; i <= numeroDeEntradas; i++){
        console.log ("Entrada" + i);
        var nombreMusical = prompt("Ingrese el nombre del musical" + ":");
        var precioMusical = parseFloat(prompt("Ingrese el precio de la entrada $" + ":"));
        var descuento = parseFloat(prompt("Ingrese el descuento en porcentaje para la entrada (%):"));
        var precioConDescuento = calcularPrecioConDescuento(precioMusical, descuento);
        totalCompra += precioConDescuento;

        console.log("Resumen de las entradas:");
        console.log("Entrada:", nombreMusical);
        console.log("Precio $:" + precioMusical.toFixed(2));
        console.log("Descuento:", descuento + "%");
        console.log("Precio con descuento:" + precioConDescuento.toFixed(2));
    }
console.log("Total de la compra:" + totalCompra.toFixed(2));
alert("Compra realizada con exito\nTotal de la compra:" + totalCompra.toFixed(2));
}

function calcularPrecioConDescuento (precio, descuento) {
    return precio - (precio * descuento / 100);
}


CompraDeEntradas();