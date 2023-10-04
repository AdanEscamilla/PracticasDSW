var valores = [true, 10, false, "codigo", "herramientas", 7];

//Determinar texto mayor

var texto1 = valores[4] > valores[3];

alert(valores[4] + " es mayor a " + valores[3] + " el resultado es = "+ texto1);

//Determinar operadores true y false

var operador1 = valores[0] + valores[2];
var operador2 = valores[0] - valores[2];
var operador3 = valores[0] * valores[2];
var operador4 = valores[0] / valores[2];
var operador5 = valores[0] == valores[2];
var operador6 = valores[0] != valores[2];
var operador7 = valores[0] > valores[2];
var operador8 = valores[0] < valores[2];
var operador9 = valores[0] >= valores[2];
var operador10 = valores[0] <= valores[2];

alert("El operador + es = " + operador1 + 
"\nEl operador - es = " + operador2 +
"\nEl operador * es = " + operador3 +
"\nEl operador / es = " + operador4 +
"\nEl operador == es = " + operador5 +
"\nEl operador != es = " + operador6 +
"\nEl operador > es = " + operador7 +
"\nEl operador < es = " + operador8 +
"\nEl operador >= es = " + operador9 +
"\nEl operador <= es = " + operador10);

//Determinar operadores true y false

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multi = valores[1] * valores[5];
var división = valores[1] / valores[5];
var residuo = valores[1] % valores[5];

alert("El resultado de la suma es: " + suma + 
"\nEl resultado de la resta es: " + resta +
"\nEl resultado de la multiplicación es: " + multi +
"\nEl resultado de la división es: " + división +
"\nEl resultado del residuo es: " + residuo);