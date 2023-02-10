/*
Arias Gonzalo Valentino
switch 03

al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"

*/
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById('txtIdMes').value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	}
}//FIN DE LA FUNCIÓN