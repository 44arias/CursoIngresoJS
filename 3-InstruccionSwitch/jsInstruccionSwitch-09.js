/*
Arias Gonzalo Valentino
switch 09

una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento

*/
function mostrar()
{
	let tarifaViaje;
	let aumento;
	let descuento;

	tarifaViaje = 15000;
	aumento = 0;
	descuento = 0;

	let estacionIngresada = document.getElementById('txtIdEstacion').value;
	let destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento = -10;
					break;
				case "Mar del plata":
					descuento = -20;
					break;
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					descuento = -20;
					break;
				case "Cataratas":
				case "Cordoba ":
					aumento = 10;
					break;
				case "Mar del plata":
					aumento = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cataratas":
				case "Cordoba ":
					aumento = 10;
					break;
				case "Mar del plata":
					descuento = 0;
					break;
			}
			break;
	}
	if(aumento > 0)
	{
		//precioFinal = (tarifaViaje * aumento) / 100;
		//precioFinal = precioFinal + tarifaViaje;
		precioFinal = tarifaViaje + (tarifaViaje * (aumento / 100));
	}
	if(descuento < 0)
	{
		//if(descuento < 0)
		//precioFinal = tarifaViaje * (descuento / 100);
		//precioFinal = precioFinal + tarifaViaje;
		precioFinal = tarifaViaje + (tarifaViaje * (descuento / 100));
	}
	
	alert("El precio de la estadia en " +destinoIngresado+ " en " +estacionIngresada+ " es de $" +precioFinal);
	
}//FIN DE LA FUNCIÓN