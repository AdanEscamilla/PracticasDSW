//Arrays

const semana = [];
semana.push("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo");
semana.map(function(x) {
    return console.log(x);
})

let pos = 1, num = 2;

let eliminados = semana.splice(pos, num);

console.log(semana);
console.log(eliminados);

//Suma de numeros del 1 al 5

var i = 1;
suma = 0;

while (i <= 5) {
    console.log(i);
    suma = suma + i;
    i++;
}
console.log(suma)

//factorial

var i;

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    i = num - 1;
    do { 
        num *=i;
        i--;
    } while (i >= 1)
    return num;
}
console.log(factorialize(5));