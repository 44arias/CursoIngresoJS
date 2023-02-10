/*
Gonzalo Valentino Arias
e/s tp2
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho; 
	let perimetro;
	let alambre;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);
	alambre = perimetro * 3;

	alert("La cantidad de alambre a comprar es " +alambre);

}

function Circulo () 
{
	let radio;
	let circunferencia;
	let alambre;
	let pi

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio);
	circunferencia = parseInt(circunferencia);

	pi = 3.14

	circunferencia = 2 * pi * radio;
	alambre = circunferencia * 3;

	alert("La cantidad de alambre a comprar es " +alambre);

}

function Materiales () 
{
	let largo;
	let ancho; 
	let area;
	let cementoBase;
	let cementoFinal;
	let calBase;
	let calFinal;

	largo = document.getElementById('txtIdLargo').value;
	ancho = document.getElementById('txtIdAncho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cementoBase = 2;
	calBase = 3;

	area = largo * ancho;

	cementoFinal = area * cementoBase; 	//aca se usa regal de 3 simples;
	calFinal = area * calBase;

	alert("Para un contrapiso de "+area+ "m2 se necesitan "+cementoFinal+ " de bolsas de cemento y "+calFinal+ " bolsas de cal. ");


}