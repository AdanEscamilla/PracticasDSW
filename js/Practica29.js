/*function imprimir() {
    var nombre = document.getElementById("nombre").value;
    alert(nombre);
}

function imprimirSuma() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);
    alert(num1+num2);
}*/

function promedio() {
    var mat1 = parseInt(document.getElementById("mat1").value);
    var mat2 = parseInt(document.getElementById("mat2").value);
    var mat3 = parseInt(document.getElementById("mat3").value);
    var mat4 = parseInt(document.getElementById("mat4").value);
    var mat5 = parseInt(document.getElementById("mat5").value);
    var mat6 = parseInt(document.getElementById("mat6").value);
    var mat7 = parseInt(document.getElementById("mat7").value);
    var mat8 = parseInt(document.getElementById("mat8").value);

    if (mat1 == " ") {
        document.getElementById("mat1").focus();
        alert("Rellena el campo que se indica");
    } else if (mat2 == " ") {
        document.getElementById("mat2").focus();
        alert("Rellena el campo que se indica");
    } else if (mat3 == " ") {
        document.getElementById("mat3").focus();
        alert("Rellena el campo que se indica");
    } else if (mat4 == " ") {
        document.getElementById("mat4").focus();
        alert("Rellena el campo que se indica");
    } else if (mat5 == " ") {
        document.getElementById("mat5").focus();
        alert("Rellena el campo que se indica");
    } else if (mat6 == " ") {
        document.getElementById("mat6").focus();
        alert("Rellena el campo que se indica");
    } else if (mat7 == " ") {
        document.getElementById("mat7").focus();
        alert("Rellena el campo que se indica");
    } else if (mat8 == " ") {
        document.getElementById("mat8").focus();
        alert("Rellena el campo que se indica");
    } else {

        var promedio = (mat1 + mat2 + mat3 + mat4 + mat5 + mat6 + mat7 + mat8) / 8;

        if (promedio >= 8.5) {
            alert("En Español has sacado " + mat1 + 
            "\nEn Matematicas has sacado " + mat2 + 
            "\nEn Ingles has sacado " + mat3 + 
            "\nEn Geografia has sacado " + mat4 + 
            "\nEn Historia has sacado " + mat5 + 
            "\nEn Artes has sacado " + mat6 + 
            "\nEn Biografia has sacado " + mat7 + 
            "\nEn Computación has sacado " + mat8 + 
            "\n--------- Promedio Final: " + promedio + "----------" + 
            "\nFelicidades estas excento a ordinario");
        } else {
            alert("En Español has sacado " + mat1 + 
            "\nEn Matematicas has sacado " + mat2 + 
            "\nEn Ingles has sacado " + mat3 + 
            "\nEn Geografia has sacado " + mat4 + 
            "\nEn Historia has sacado " + mat5 + 
            "\nEn Artes has sacado " + mat6 + 
            "\nEn Biografia has sacado " + mat7 + 
            "\nEn Computación has sacado " + mat8 + 
            "\n--------- Promedio Final: " + promedio + "----------" + 
            "\nLastima no exentaste al ordinario. Lo ocupas hacer.");
        }
    }
}