/*
Gonzalo Valentino Arias
e/s09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".


al ejercicio nueve (9), se  debe cambiar el porcentaje, 
debe ser ingresado por prompt el porcentaje ,
puede ser un numero del 1 al 100 de porcentaje de aumento


*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let incremento;
	let resultado;

	incremento = prompt("Ingrese el porcentaje del 1 al 100");
	incremento = parseInt(incremento);

	//incremento = 10;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	aumento = (sueldo * incremento) / 100;

	resultado = aumento + sueldo;

	document.getElementById('txtIdResultado').value = resultado;

}
