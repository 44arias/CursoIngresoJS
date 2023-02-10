function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let numeroAleatorio = (Math.random() * 10)+1;
	let mensaje
 
	/* Math.round(Math.random() * 10) + 1; */

	numeroAleatorio = Math.floor(numeroAleatorio);

	if(numeroAleatorio > 8)
	{
		alert("EXCELENTE, su nota es " +mensaje);
	}
	else
	{
		if(numeroAleatorio > 3)
		{
			alert("APROBÓ, su nota es" +mensaje);
		}
		else
		{
			alert("Vamos, la proxima se puede, su nota es " +mensaje);
		}
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN