// **************** 1 **************** 
alert("Punto 1");
var valores = [true, 5, false, "hola", "adios", 2];
var mayor=0; 	// la variable numérica tiene que estar inicializada

for(var i=0; i<=6; i++){
	if(isNaN(valores[i])){

	} else{
		if(valores[i] > mayor){
			mayor = valores[i];
		}
	}
}

alert("El mayor es: " + mayor);

// **************** 2 **************** 
alert("Punto 2");
var verdadero;
var falso;
var resultado1;
var resultado2;
for(var i=0; i<=6; i++){
	if(valores[i] == true){
		verdadero = valores[i];
	} else if(valores[i] == false){
		falso = valores[i];
	}
}
resultado1 = verdadero || falso;
resultado2 = verdadero && falso;
alert(verdadero + " || " + falso + " = " + resultado1);
alert(verdadero + " && " + falso + " = " + resultado2);

// **************** 3 **************** 
alert("Punto 3");
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
alert(num1 + " + " + num2 + " = " + suma);

var resta = num1 - num2;
alert(num1 + " - " + num2 + " = " + resta);

var producto = num1 * num2;
alert(num1 + " * " + num2 + " = " + producto);

var division = num1 / num2;
alert(num1 + " / " + num2 + " = " + division);

var resto = num1 % num2;
alert(num1 + " % " + num2 + " = " + resto);

document.write("Muestra de uso de operadores");