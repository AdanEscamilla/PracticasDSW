var peso = prompt("Ingrese un peso");
var peso_tierra = 9.807;
var peso_marte = 3.71;
var peso_jupiter = 24.79;
var resultado = 0;

var opcion = prompt("Ingrese alguna de las siguientes opciones: \n1. Peso Marte\n2. Peso Jupiter");

/*switch (opcion) {
    case "1":
        resultado = (peso * peso_marte) / peso_tierra;
        alert("Su peso es: " + resultado);
    break;
    case "2":
        resultado = (peso * peso_jupiter) / peso_tierra;
        alert("Su peso es: " + resultado);
    break;
    default:
        alert("Esa opción no existe");
    break;
}*/

if (opcion == "1") {
    resultado = (peso * peso_marte) / peso_tierra;
    alert("Su peso es: " + resultado);
} else if (opcion == "2") {
    resultado = (peso * peso_jupiter) / peso_tierra;
    alert("Su peso es: " + resultado);
} else {
    alert("Esa opción no existe");
}