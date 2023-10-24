//Se crea un arreglo que contiene las imagenes de formato .svg
let banderas = ["Alemania.svg", "Australia.svg", "Estados-Unidos.svg", "Gales.svg", "Jamaica.svg", "Japon.svg", "Marruecos.svg", "Mexico.svg", "Reino-Unido.svg", "Tailandia.svg"];
//Se crea un arreglo que contiene las respuetas correctas
let correcta = [1,0,2,3,2,0,1,3,0,3];

//Se inicializa un arreglo que contendra las posibles respuestas que el jugador podra elegir
let opciones = [];

//Se mete al arreglo las posibles respuestas para que el jugador eliga
opciones.push(["Gales", "Alemania", "Tailandia", "México"]);
opciones.push(["Australia", "Japon", "Marruecos", "Reino Unido"]);
opciones.push(["Jamaica", "Reino Unido", "Estados Unidos", "México"]);
opciones.push(["Jamaica", "Marruecos", "Tailandia", "Gales"]);
opciones.push(["Marruecos", "México", "Jamaica", "Japon"]);
opciones.push(["Japon", "Estados Unidos", "Australia", "Gales"]);
opciones.push(["Tailandia", "Marruecos", "Gales", "Alemania"]);
opciones.push(["Gales", "Australia", "Estados Unidos", "México"]);
opciones.push(["Reino Unido", "Australia", "Estados Unidos", "Jamaica"]);
opciones.push(["Japon", "Gales", "Marruecos", "Tailandia"]);

//Se crrean variables de la posición actual del jugador y del numero de acierto
let posActual = 0;
let cantidadAcertadas = 0;

//Se crea una función que inicia el juego con la posición en 0 y la cantidad tambien
function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    //Se selecciona el elemento por ID en html y se modifica el css para que se enseñe y para que no se enseñe
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    //Se manda a llamar la función que carga la maravilla
    cargarBandera();
}

//Se crea una función que recorre el array de maravillas con la posición del jugador y manda a llamar las imagenes del turno dependiendo de ña posición actual del jugador
function cargarBandera(){
    //Se crea una condición que recorre el arreglo de maravillas, si se cumple la condición termina el juego, sino entonces continua
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{
        //Se manda a llamar la función de limpiarOpciones
        limpiarOpciones();
        //Se selecciona los elementos html con su ID correspondiente y pone las opciones segun la posición del jugador
        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
        document.getElementById("n3").innerHTML = opciones[posActual][3];
    }
}

//Se crea una función que selecciona los elementos html para limpiar las opciones que se mostraban al jugador
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

//Se crea una función que comprueba la respuesta del jugador para saber si esta correcta o no
function comprobarRespuesta(opElegida){
    //Se crea una condición para saber si el jugador escogio la respuesta correcta, si se cumple la condición te enseña la respuesta y se suma los aciertos, sino se cumple te enseña cual es la respuesta correcta
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    //Aqui va sumando la posición actual del jugador
    posActual++;
    //Pone un temporizador para poder cargar la función de cargarMaravilla
    setTimeout(cargarBandera,1000);
}
//Se crea una función que selecciona los elementos html segun su ID y quita los elementos y enseña las respuestas correctas e incorrectas que el jugador que tuviste
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}
//Se crea una función que restablece el juego desde el inicio
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}