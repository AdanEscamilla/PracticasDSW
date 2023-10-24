//Se crea un arreglo que contiene las imagenes de formato .svg
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
//Se crea un arreglo que contiene las respuetas correctas
let correcta = [1,0,2,1,2,0,1];

//Se inicializa un arreglo que contendra las posibles respuestas que el jugador podra elegir
let opciones = [];

//Se mete al arreglo las posibles respuestas para que el jugador eliga
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

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
    cargarMaravilla();

}

//Se crea una función que recorre el array de maravillas con la posición del jugador y manda a llamar las imagenes del turno dependiendo de ña posición actual del jugador
function cargarMaravilla(){
    //Se crea una condición que recorre el arreglo de maravillas, si se cumple la condición termina el juego, sino entonces continua
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        //Se manda a llamar la función de limpiarOpciones
        limpiarOpciones();
        //Se selecciona los elementos html con su ID correspondiente y pone las opciones segun la posición del jugador
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

//Se crea una función que selecciona los elementos html para limpiar las opciones que se mostraban al jugador
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
    setTimeout(cargarMaravilla,1000);
}
//Se crea una función que selecciona los elementos html segun su ID y quita los elementos y enseña las respuestas correctas e incorrectas que el jugador que tuviste
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}
//Se crea una función que restablece el juego desde el inicio
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}