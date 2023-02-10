/*
Gonzalo Valentino Arias
if 06
*/
function mostrar()
{
	//tomo la edad  

	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("mayor");
	}
	else
	{
		if(edadIngresada > 12)
		{
			alert("adolensceste");
		}
		else
		{
			alert("niño");
		}
	}
	
	

	/*
	if(edad < 13)
	{
		alert("Es un niño");
	}
	if(edad >= 13) // if(edad >= 13 && edad <= 17)
	{
		if(edad <= 17)
		{
			alert("Es un adolescente");
		}
	}
	if(edad > 17)
	{
		alert("Es mayor de edad");
	}
	*/

}
//FIN DE LA FUNCIÓN