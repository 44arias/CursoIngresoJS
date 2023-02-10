function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let numeroAleatorio = (Math.random() * 11)
 
	/* Math.round(Math.random() * 10) + 1; */

	numeroAleatorio = Math.floor(numeroAleatorio)

	alert("El número que salió sorteado es... " +numeroAleatorio);

}//FIN DE LA FUNCIÓN