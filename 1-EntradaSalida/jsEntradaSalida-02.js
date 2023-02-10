/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let primerNombre;
	let segundoNombre;
	let primerPeso;
	let segundoPeso;
	let sumaPesos
	let mensaje;
	let precioViaje;
	let precioViajes;
	let incremento;
	let descuento;
	let precioFinal;
	let primeraNacionalidad;
	let segundaNacionalidad;

	precioViaje = 2500;

	precioViajes = precioViaje * 2;
	
	incremento = 0;
	descuento = 0;

	primerNombre = prompt("Ingrese su nombre");
	primerPeso = prompt(primerNombre+ " ingrese su peso");

	segundoNombre = prompt("Ingrese su nombre");
	segundoPeso = prompt(segundoNombre+ " ingrese su peso");

	primerPeso = parseInt(primerPeso);
	segundoPeso = parseInt(segundoPeso);

	sumaPesos = primerPeso + segundoPeso;

	if(sumaPesos > 249)
	{
		mensaje = "Bienvenidos a Space x " +primerNombre+ " y " +segundoNombre+ ", con el peso actual de "+sumaPesos+" kilos, ustedes NO pueden viajar.";
	}
	else
	{	
		primeraNacionalidad = prompt("Ingrese su país de origen");
		segundaNacionalidad = prompt("Ingrese su país de origen");
		
		if(primeraNacionalidad == "Argentina" && segundaNacionalidad == "Argentina")
		{
			
			if(sumaPesos > 219)
			{
				incremento = 10;
			}
			else
			{
				if(sumaPesos > 199)
				{
					descuento = 0;
				}
				else
				{
					if(sumaPesos > 179)
					{
						descuento = -20;
					}
					else
					{
						if(sumaPesos > 160)
						{
							descuento = -40;
						}
						else
						{
							descuento = -50;
						}
					}
				}
			}

			precioViaje = 2000;
			precioViajes = precioViaje * 2;
		}
		else
		{
			if(sumaPesos > 219)
			{
				incremento = 20;
			}
			else
			{
				if(sumaPesos > 199)
				{
					descuento = 0;
				}
				else
				{
					if(sumaPesos > 179)
					{
						descuento = -15;
					}
					else
					{
						if(sumaPesos > 160)
						{
							descuento = -25;
						}
						else
						{
							descuento = -30;
						}
					}
				}
			}
		}

		mensaje = "Bienvenidos a Space x " +primerNombre+ " y " +segundoNombre+ ", sus pesos son de " +primerPeso+ " y " +segundoPeso+ " kilos cada uno, y sumados son " +sumaPesos+ " kilos. \nEl precio de cada pasaje es de $" +precioViaje+ " y el precio del viaje es de $" +precioFinal;
	}

	incremento = precioViajes * (descuento / 100);
	precioFinal = precioViajes + incremento;
	
	alert(mensaje);

}

