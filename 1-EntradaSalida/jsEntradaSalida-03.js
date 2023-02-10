/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let importeBruto;
	let iva;
	let productosConIva;
	let descuentoMayorista;
	let resta;
	let resultadoConIva;
	let resultadoConDescuento;
	let mensaje;

	iva = 21;
	
	descuentoMayorista = 5;

	importeBruto = document.getElementById('txtIdNombre').value;
	importeBruto = parseFloat(importeBruto);
	
	productosConIva = (importeBruto * iva) / 100;

	resultadoConIva = productosConIva + importeBruto;
	resultadoConIva = Math.floor(resultadoConIva);

	resta = (resultadoConIva * descuentoMayorista) / 100;

	resultadoConDescuento = importeBruto - resta;
	resultadoConDescuento = Math.floor(resultadoConDescuento);

	mensaje = "El importe bruto es: " +importeBruto+ "\nIVA: " +iva+ "% \nImporte con IVA: " +resultadoConIva+ 
		"\nDescuento del: " +descuentoMayorista+ "% \nTotal a pagar: " +resultadoConDescuento;
	
	alert(mensaje);

	/*let nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//nombreIngresado= document.getElementById('txtIdNombre')
	nombreIngresado= document.getElementById('txtIdNombre').value;
	alert(nombreIngresado);
	//alert("su nombre es: "+nombreIngresado);*/


	/*let nombreIngresado;
	nombreIngresado =prompt("Ingrese su nombre");
	alert("su nombre es: "+nombreIngresado);*/
}


