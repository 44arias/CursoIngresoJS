/*
Arias Gonzalo Valentino
switch 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

*/
function mostrar()
{
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
			break;
		default:
			alert("CALOR");
			break;
	}
}//FIN DE LA FUNCIÓN