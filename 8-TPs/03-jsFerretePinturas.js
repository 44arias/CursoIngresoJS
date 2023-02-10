/*
Gonzalo Valentino Arias
e/s tp3
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let celsius;

	fahrenheit = document.getElementById('txtIdTemperatura').value;
	
	fahrenheit = parseInt(fahrenheit);

	celsius = (fahrenheit - 32) / 1.8;

	alert(+fahrenheit+ " Fahrenheit son " +celsius.toFixed(2)+ " Centígrados");

}

function CentigradosFahrenheit () 
{
	let fahrenheit;
	let celsius;

	celsius = document.getElementById('txtIdTemperatura').value;

	celsius = parseInt(celsius);

	fahrenheit = (celsius * 1.8) + 32;

	//fahrenheit = Math.round(fahrenheit);	redondear al numero entero (integer) mas cercano para arriba;
	//fahrenheit = Math.floor(fahrenheit);	redondea al numero entero (integer) mas cercano para abajo;
	//fahrenheit = dejar exactamente como esta, pero solo muestra la cantidad de decimales que le pasamos al to.Fixed;

	alert(+celsius+ " Centígrados son " +fahrenheit.toFixed(2)+ " Fahrenheit ");

}
