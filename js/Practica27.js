//Hola 7 veces

for (var i = 0; i < 7; i++) {
    console.log("Hola");
    if (i == 3) {
        console.log("Soy el 4to hola");
    } else if (i == 6) {
        console.log("Acabamos de saludar");
    }
}

const meses = {a: "Enero", b: "Febrero", c: "Marzo", d: "Abril", e: "Mayo", f: "Junio", g: "Julio", h: "Agosto", i: "Septiembre", j: "Octubre", k: "Noviembre"};

//forin

for (const propiedad in meses) {
    console.log(`${propiedad}: ${meses[propiedad]}`)
}

//foreach

const Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre"];

Meses.forEach((e) => console.log(e));

//forof

var m = 1;

for (let val of Meses) {
    console.log("Mes ",m,": ",val)
    m++;
}

Meses.forEach((e) => {
    if (e != "Julio") {
        console.log(e);
    }
})

Meses.push("Diciembre");

Meses.forEach((e) => console.log(e));
