/*
Gonzalo Valentino Arias
e/s tp1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let suma;
	
	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	//forma de abreviacion 
	
	//primerPrecio = parseFloat(document.getElementById('txtIdPrecioUno').value);
	//segundoPrecio = parseFloat(document.getElementById('txtIdPrecioDos').value);
	//tercerPrecio = parseFloat(document.getElementById('txtIdPrecioTres').value);

	primerPrecio = parseFloat(primerPrecio);
	segundoPrecio = parseFloat(segundoPrecio);
	tercerPrecio = parseFloat(tercerPrecio);

	suma = primerPrecio + segundoPrecio + tercerPrecio;

	alert("El resultado es " + suma);

}

function Promedio () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let suma;
	let cantridadDeIngresos;

	cantridadDeIngresos = 3
	
	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	primerPrecio = parseFloat(primerPrecio);
	segundoPrecio = parseFloat(segundoPrecio);
	tercerPrecio = parseFloat(tercerPrecio);

	suma = (primerPrecio + segundoPrecio + tercerPrecio);
	
	promedio = suma / cantridadDeIngresos;

	alert("El resultado es " + promedio);
}

function PrecioFinal () 
{
	let primerPrecio;
	let segundoPrecio;
	let tercerPrecio;
	let impuestoIva;
	let cantidadDeImpuesto;
	let suma;
	let resultadoFinal;

	impuestoIva = 21;
	
	primerPrecio = document.getElementById('txtIdPrecioUno').value;
	segundoPrecio = document.getElementById('txtIdPrecioDos').value;
	tercerPrecio = document.getElementById('txtIdPrecioTres').value;

	primerPrecio = parseFloat(primerPrecio);
	segundoPrecio = parseFloat(segundoPrecio);
	tercerPrecio = parseFloat(tercerPrecio);

	//suma = primerPrecio + segundoPrecio + tercerPrecio;
	//cantidadDeImpuesto = (suma + impuestoIva) / 100;
	//resultadoFinal = suma + cantidadDeImpuesto;

	resultadoFinal = (primerPrecio + segundoPrecio + tercerPrecio) * 1.21;

	//para redondear usar alert .toFixed(2));

	alert("El resultado es " + resultadoFinal);

}