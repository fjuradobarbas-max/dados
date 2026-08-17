const caras1 = ["ASES", "REYES", "DAMAS", "JOTAS", "NEGROS", "ROJOS"];
const caras2 = ["ASES2", "REYES2", "DAMAS2", "JOTAS2", "NEGROS2", "ROJOS2"];

let valor1 = "";
let valor2 = "";

function mostrarPantalla(id) {

    document.querySelectorAll(".pantalla")
        .forEach(p => p.classList.remove("activa"));

    document.getElementById(id)
        .classList.add("activa");
}

document.getElementById("btnInicio").onclick = function () {
    mostrarPantalla("pantalla1");
};

document.getElementById("dado1").onclick = function () {

    animarDado("dado1");
    
    reproducirSonido();
    
    valor1 = caras1[Math.floor(Math.random() * 6)];

    document.getElementById("resultado1").innerText = valor1;

    document.getElementById("relanzar1").disabled = false;
    document.getElementById("siguiente1").disabled = false;
};

document.getElementById("relanzar1").onclick = function () {
    document.getElementById("dado1").click();
};

document.getElementById("siguiente1").onclick = function () {
    mostrarPantalla("pantalla2");
};

document.getElementById("dado2").onclick = function () {

    animarDado("dado2");
    
    reproducirSonido();

    valor2 = caras2[Math.floor(Math.random() * 6)];

    document.getElementById("resultado2").innerText = valor2;

    document.getElementById("relanzar2").disabled = false;
    document.getElementById("siguiente2").disabled = false;
};

document.getElementById("relanzar2").onclick = function () {
    document.getElementById("dado2").click();
};

document.getElementById("siguiente2").onclick = function () {

    document.getElementById("final1").innerText = valor1;
    document.getElementById("final2").innerText = valor2;

    mostrarPantalla("resumen");
};

document.getElementById("reinicio").onclick = function () {

    valor1 = "";
    valor2 = "";

    document.getElementById("resultado1").innerText = "";
    document.getElementById("resultado2").innerText = "";

    document.getElementById("relanzar1").disabled = true;
    document.getElementById("siguiente1").disabled = true;

    document.getElementById("relanzar2").disabled = true;
    document.getElementById("siguiente2").disabled = true;

    mostrarPantalla("inicio");

};

function animarDado(idDado){

    const dado = document.getElementById(idDado);

    dado.classList.remove("animar-dado");

    void dado.offsetWidth;

    dado.classList.add("animar-dado");

};

function reproducirSonido() {

    const ctx = new(window.AudioContext || window.webkitAudioContext)();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = 200;

    gain.gain.value = 0.2;

    osc.start();

    osc.stop(ctx.currentTime + 0.2);
}