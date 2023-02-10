/*
Arias Gonzalo Valentino
switch 07

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

*/
function mostrar()
{
	let destinoIngresado = document.getElementById('txtIdDestino').value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del Plata":
			alert("Este ");
			break;
		default:
			alert("Sur");
			break;
	}
}//FIN DE LA FUNCIÓN