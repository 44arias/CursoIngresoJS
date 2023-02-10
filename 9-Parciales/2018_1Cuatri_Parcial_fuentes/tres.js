/*
Gonzalo Valentino Arias
e/s parcial3
*/

function mostrar()
{
    let precioBase;
    let porcentajeDescuento;
    let resta;
    let precioFinal;

    precioBase = prompt("Ingrese el precio ");
    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento del 1 al 100");
	
    precioBase = parseInt(precioBase);
    porcentajeDescuento = parseInt(porcentajeDescuento);

    precioFinal = document.getElementById('elPrecioFinal').value;
	precioFinal = parseFloat(precioFinal);

	resta = (precioBase * porcentajeDescuento) / 100;

	precioFinal = precioBase - resta;

	document.getElementById('elPrecioFinal').value = "El precio es de " +precioFinal+ "$ con un " +resta+ "% de descuento";

}
