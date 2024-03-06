function calcularPrecioLlantas(cantidad) {
    var precioUnitario;

    switch (true) {
        case cantidad < 5:
            precioUnitario = 100;
            break;
        case cantidad >= 5 && cantidad <= 10:
            precioUnitario = 75;
            break;
        case cantidad > 10:
            precioUnitario = 50;
            break;
        default:
            precioUnitario = 100;
            break;
    }

    return precioUnitario;
}

function calcularTotalCompra(cantidad) {
    var precioUnitario = calcularPrecioLlantas(cantidad);
    var total = precioUnitario * cantidad;
    return total;
}

function main() {
    var cantidadComprada = parseInt(prompt("Ingrese la cantidad de llantas que desea comprar:"));

    var precioUnitario = calcularPrecioLlantas(cantidadComprada);
    var totalCompra = calcularTotalCompra(cantidadComprada);

    console.log("Precio por llanta: $" + precioUnitario);
    console.log("Total de la compra: $" + totalCompra);
}

main();
