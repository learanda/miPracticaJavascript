var numero = prompt("Ingrese el número del que desea conocer su factorial:", "");
var acumulador = numero;

	for(var i=numero-1; i>0; i--){	// intenté usar i=1 pero no sirve. Tiene que ser i>=1 o i>0
		acumulador *= i;
	}
alert(acumulador);