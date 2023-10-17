/*function suma_y_muestra() {
    var num1 = 2;
    var num2 = 3;
    var resultado = num1 + num2;
    alert("El resultado es " +  resultado);
}

suma_y_muestra();*/

/*function suma_y_muestra(primerNum, segundoNum) {
    var resultado = primerNum + segundoNum;
    alert("El resultado es " +  resultado);
}

suma_y_muestra(4,4);*/

/*function suma_y_muestra() {
    var num1 = 2;
    var num2 = 3;
    return num1 + num2;
}

alert("El resultado es " + suma_y_muestra());*/

function Impar_par(num1) {
    var par_impar
    if ((num1 % 2) == 0) {
        par_impar = "Par"
    } else {
        par_impar = "Impar"
    }
    return par_impar;
}

function Aviso_Huracan(HayUnHuracan) {
    var huracan
    if (HayUnHuracan == true) {
        huracan = "Hay un Huracan"
    } else {
        huracan = "Esta soleado"
    }
    return huracan;
}

function OperacionesMatematicas(operacion, a, b) {
    var result;
    switch (operacion) {
        case 1:
            result = a + b;
        break;
        case 2:
            result = a - b;
        break;
        case 3:
            result = a * b;
        break;
        case 4:
            result = a / b;
        break;
        case 5:
            nl1 = a % 2;
            nl2 = b % 2;
            result = "el residuo del primero numero es " + nl1 + " y del numero 2 es " + nl2;
        break;
        default:
            result = 0;
        break;
    }
    return result;
}

var numero1 = prompt("Ingrese un numero");

alert("El numero que introduciste es " + Impar_par(numero1));

var aviso = prompt("Ingrese 1 si hay un huracan\nIngrese 2 si esta soleado");
var aviso2;

if (aviso == "1") {
    aviso2 = true;
    alert(Aviso_Huracan(aviso2));
} else {
    aviso2 = false;
    alert(Aviso_Huracan(aviso2));
}

var num1 = prompt("Ingrese un numero");
var n1 = parseInt(num1);
var num2 = prompt("Ingrese otro numero");
var n2 = parseInt(num2);
var operacion = prompt("1 - Sumar\n2 - Restar\n3 - Multiplicación\n4 - División\n5 - Residuo");
var op = parseInt(operacion);
alert("El resultado de la operación es: " + OperacionesMatematicas(op, n1, n2));

