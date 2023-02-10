/*
Gonzalo Valentino Arias
e/s06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumeroIngresado;
	let primerNumero;
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;

	//primerNumero = 66;
	//segundoNumero = 24;

	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;

	//primerNumero = parseInt(primerNumeroIngresado);
	//segundoNumero = parseInt(segundoNumeroIngresado);

	primerNumero = parseFloat(primerNumeroIngresado);
	segundoNumero = parseFloat(segundoNumeroIngresado);

	resultado = primerNumero + segundoNumero;

	alert("El resulto es: " + resultado);


}

