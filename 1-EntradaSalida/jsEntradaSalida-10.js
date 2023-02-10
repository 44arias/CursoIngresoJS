/*
Gonzalo Valentino Arias
e/s10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

al ejercicio (10), se  debe cambiar el porcentaje, 
debe ser ingresado por prompt el porcentaje ,
puede ser un numero del 1 al 100 de porcentaje de descuento
*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resta;
	let resultado;

	descuento = prompt("Ingrese el porcentaje del 1 al 100");
	descuento = parseFloat(descuento);

	//descuento = 25;


	importe = document.getElementById('txtIdImporte').value;
	importe = parseFloat(importe);

	resta = (importe * descuento) / 100;

	resultado = importe - resta;

	document.getElementById('txtIdResultado').value = resultado;

}