/*
    A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
    necesitamos pedir los nombres de los dos pasajeros y los pesos corporales de cada uno ,
    al final deberemos mostrar un mensaje que diga 
    “bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados son 150 kilos”
    al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
    “ con el peso actual de 280 kilos , ustedes no pueden viajar” 
    if extra

    B-Al algoritmo anterior agregarle otro mensaje (otro alert), que indique el precio del viaje.
    los pasajes salen 2500 cada uno.
    si los pasajeros suman entre 200 y 220 .No tienen descuento
    si tiene entre 220 y 249 se les suma un 20% de incremento.
    si pesas entre 180 y 199 se hace un descuento del 15% ,
    si pesas entre 161 y 179 se hace un descuento del 25% ,
    y si pesan entre los dos menos de 160 kilos el descuento es del 30%

    C-Al algoritmo anterior se le debe agregar la carga de si las personas son argentinos o no, de ser argentino el precio es de 2000 y sino es de 2500.

    si los pasajeros suman entre 200 y 220 .No tienen descuento
    si tiene entre 220 y 249 se les suma un 20% de incremento.si es argentino el incremento es del 10% el incremento.
    si pesas entre 180 y 199 se hace un descuento del 15% ,(un 20% si sos argentino) 
    si pesas entre 161 y 179 se hace un descuento del 25% ,(un 40% si sos argentino) 
    y si pesan entre los dos menos de 160 kilos el descuento es del 30%(un 50% si sos argentino)
*/
function mostrar()
{
    let nombrePrimeraPersona;
    let nombreSegundaPersona;
    let pesoPrimeraPersona;
    let pesoSegundaPersona;
    let pesoCombinado;
    let mensaje;
    let precioPasaje;
    let porcentaje;
    let precioBruto;
    let precioFinal;
    let tipoDePasaje; //<- aca va a entrar nacional o extranjero
    let totalDeDescuentoAAplicar;

    //primera persona

    nombrePrimeraPersona = prompt("Ingrese el nombre del primer pasajero/a");
    pesoPrimeraPersona = prompt("Ingrese el peso del primer pasajero/a");
    pesoPrimeraPersona = parseFloat(pesoPrimeraPersona);

    //segunda persona

    nombreSegundaPersona = prompt("Ingrese el nombre del primer pasajero/a");
    pesoSegundaPersona = prompt("Ingrese el peso del segundo pasajero/a");
    pesoSegundaPersona = parseFloat(pesoSegundaPersona);

    pesoCombinado = pesoPrimeraPersona + pesoSegundaPersona;
    
    
    tipoDePasaje = prompt("Ingrese el tipo de pasaje (nacional o extranjero)").toLowerCase();

    if(pesoCombinado > 249) //250 o mas
	{
        mensaje = "Con un peso combinado de "+pesoCombinado+" no es posible realizar semejante viaje";
    }
    else
	{
        if(tipoDePasaje == "extranjero")
		{
            precioPasaje = 2500;
            if(pesoCombinado > 219)
			{
                porcentaje = 1.20;
                //porcentaje = 20;
            }
            else
			{
                if(pesoCombinado > 199)
				{
                    porcentaje = 1;
                    //porcentaje = 0;
                }
                else
				{
                    if(pesoCombinado > 179)
					{
                        porcentaje = 0.85;
                        //porcentaje = -15;
                    }
                    else
					{
                        if(pesoCombinado > 160)
						{
                            porcentaje = 0.6;
                            //porcentaje = -40;
                        }
                        else
						{
                            porcentaje = 0.7;
                            //porcentaje = -30;
                        }
                    }
                }
            }
        }
        else
		{
            precioPasaje = 2000;
            if(pesoCombinado > 219)
			{
                porcentaje = 1.10;
                //porcentaje = 10;
            }
            else
			{
                if(pesoCombinado > 199)
				{
                    porcentaje = 1;
                    //porcentaje = 0;
                }
                else
				{
                    if(pesoCombinado > 179)
					{
                        porcentaje = 0.8;
                        //porcentaje = -20;
                    }
                    else
					{
                        if(pesoCombinado > 160)
						{
                            porcentaje = 0.75;
                            //porcentaje = -25;
                        }
                        else
						{
                            porcentaje = 0.5;
                            //porcentaje = -50;
                        }
                    }
                }
            }
        }
        //ya termine la logica ahora hago los calculos
        precioBruto = precioPasaje * 2;
        precioFinal = precioBruto * porcentaje;
        /*
        totalDeDescuentoAAplicar = precioBruto * porcentaje / 100;
        precioFinal = precioBruto + (totalDeDescuentoAAplicar);
        */
        mensaje = "Pasajeros: "+nombrePrimeraPersona+" y "+nombreSegundaPersona+" con un peso de: "+pesoCombinado+" deberán pagar un total de: "+precioFinal;
    }


    //ahora muestro
    alert(mensaje);
}

