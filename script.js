const caras1 = [
    "ASES",
    "REYES",
    "DAMAS",
    "JOTAS",
    "NEGROS",
    "ROJOS"
];

const caras2 = [
    "ASES2",
    "REYES2",
    "DAMAS2",
    "JOTAS2",
    "NEGROS2",
    "ROJOS2"
];

let valor1 = "";
let valor2 = "";

function cambiarPantalla(id) {
    document.querySelectorAll(".pantalla")
        .forEach(p => p.classList.remove("activa"));

    document.getElementById(id)
        .classList.add("activa");
}

document
.getElementById("btnInicio")
.addEventListener("click", () => {
    cambiarPantalla("pantalla1");
});

document
.getElementById("dado1")
.addEventListener("click", () => {

    valor1 = caras1[
        Math.floor(Math.random() * caras1.length)
    ];

    document.getElementById("resultado1").textContent = valor1;

    document.getElementById("relanzar1").disabled = false;
    document.getElementById("siguiente1").disabled = false;
});

document
.getElementById("relanzar1")
.addEventListener("click", () => {
    document.getElementById("dado1").click();
});

document
.getElementById("siguiente1")
.addEventListener("click", () => {
    cambiarPantalla("pantalla2");
});

document
.getElementById("dado2")
.addEventListener("click", () => {

    valor2 = caras2[
        Math.floor(Math.random() * caras2.length)
    ];

    document.getElementById("resultado2").textContent = valor2;

    document.getElementById("relanzar2").disabled = false;
    document.getElementById("siguiente2").disabled = false;
});

document
.getElementById("relanzar2")
.addEventListener("click", () => {
    document.getElementById("dado2").click();
});

document
.getElementById("siguiente2")
.addEventListener("click", () => {

    document.getElementById("final1").textContent = valor1;
    document.getElementById("final2").textContent = valor2;

    cambiarPantalla("resumen");
});

document
.getElementById("reinicio")
.addEventListener("click", () => {

    valor1 = "";
    valor2 = "";

    cambiarPantalla("inicio");
});