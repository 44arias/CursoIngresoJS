/*

Arias Gonzalo Valentino
if tp 04
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 function CalcularPrecio () 
 {
    let lamparitasCantidad;
    let lamparitasPrecio;
    let marca;
    let descuento;
    let impuestoIIBB;
    let impuestosFinal;
    let mensaje;

    impuestoIIBB = 10;
    descuento = 0;
    lamparitasCantidad = document.getElementById('txtIdCantidad').value;
    lamparitasCantidad = parseInt(lamparitasCantidad);
    lamparitasPrecio = 35 * lamparitasCantidad;
    marca = document.getElementById('Marca').value;

   if(lamparitasCantidad > 5)
   {
        descuento = 50;
   }
   else
   {
        if(lamparitasCantidad == 5)
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                    descuento = 40;
                break;
                default:
                    descuento = 30;
                break;
            }
        }
        else
        {
            if(lamparitasCantidad == 4)
            {   switch(marca)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 25;
                    break;
                    default:
                        descuento = 20;
                    break;
                }
            }
            else
            {
                if(lamparitasCantidad == 3)
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            descuento = 15;
                        break;
                        case "FelipeLamparas":
                            descuento = 10;
                        break;
                        default:
                            descuento = 5;
                        break;
                    }
                }
            }
        }
   }

    lamparitasPrecio = lamparitasPrecio - (lamparitasPrecio * (descuento / 100));

    if(lamparitasPrecio > 119)
    {
        lamparitasPrecio = lamparitasPrecio + (lamparitasPrecio * (impuestoIIBB / 100));
        impuestosFinal = lamparitasPrecio * (impuestoIIBB / 100);
        mensaje = "Usted pago $" +impuestosFinal.toFixed(2)+ " de impuestos";
        alert(mensaje);
    }
    document.getElementById('txtIdprecioDescuento').value = lamparitasPrecio;

}
