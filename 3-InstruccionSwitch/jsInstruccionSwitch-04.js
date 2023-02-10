/*
Arias Gonzalo Valentino
switch 04

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById('txtIdMes').value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 29 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
		default:
			alert("Este mes tiene 31 días");
	}
}//FIN DE LA FUNCIÓN