function par_impar(){
	var numero = prompt("Indique un número para saber si es par o impar: ");
	resto = numero%2;
	if(resto==0){
		alert("El número " + numero + " es par.");
	} else {
		alert("El número " + numero + " es impar.");
	}
}