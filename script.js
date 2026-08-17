let valor1 = "";
let valor2 = "";

function mostrarPantalla(id){

    document
        .querySelectorAll(".pantalla")
        .forEach(p => p.classList.remove("activa"));

    document
        .getElementById(id)
        .classList.add("activa");
}

function reproducirSonido(){

    const ctx =
        new(window.AudioContext || window.webkitAudioContext)();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.value = 180;
    gain.gain.value = 0.15;

    osc.start();

    osc.stop(ctx.currentTime + 0.25);
}

function lanzarDado(idDado,tipo){

    const dado =
        document.getElementById(idDado);

    reproducirSonido();

    if(navigator.vibrate){
        navigator.vibrate(200);
    }

    const resultado =
        Math.floor(Math.random() * 6);

    dado.classList.remove("lanzando");

    void dado.offsetWidth;

    dado.classList.add("lanzando");

    setTimeout(() => {

        dado.classList.remove("lanzando");

        let nombre = "";

        switch(resultado){

            case 0:
                dado.style.transform =
                    "rotateX(0deg) rotateY(0deg)";
                nombre = tipo === 1 ? "ASES" : "ASES2";
                break;

            case 1:
                dado.style.transform =
                    "rotateY(180deg)";
                nombre = tipo === 1 ? "REYES" : "REYES2";
                break;

            case 2:
                dado.style.transform =
                    "rotateY(-90deg)";
                nombre = tipo === 1 ? "DAMAS" : "DAMAS2";
                break;

            case 3:
                dado.style.transform =
                    "rotateY(90deg)";
                nombre = tipo === 1 ? "JOTAS" : "JOTAS2";
                break;

            case 4:
                dado.style.transform =
                    "rotateX(-90deg)";
                nombre = tipo === 1 ? "NEGROS" : "NEGROS2";
                break;

            case 5:
                dado.style.transform =
                    "rotateX(90deg)";
                nombre = tipo === 1 ? "ROJOS" : "ROJOS2";
                break;
        }

        if(tipo === 1){

            valor1 = nombre;

            document.getElementById("relanzar1").disabled = false;
            document.getElementById("siguiente1").disabled = false;

        }else{

            valor2 = nombre;

            document.getElementById("relanzar2").disabled = false;
            document.getElementById("siguiente2").disabled = false;
        }

    },1600);
}

document.getElementById("btnInicio").onclick = function(){

    mostrarPantalla("pantalla1");
};

document.getElementById("dado1").onclick = function(){

    lanzarDado("dado1",1);
};

document.getElementById("dado2").onclick = function(){

    lanzarDado("dado2",2);
};

document.getElementById("relanzar1").onclick = function(){

    lanzarDado("dado1",1);
};

document.getElementById("relanzar2").onclick = function(){

    lanzarDado("dado2",2);
};

document.getElementById("siguiente1").onclick = function(){

    mostrarPantalla("pantalla2");
};

document.getElementById("siguiente2").onclick = function(){

    document.getElementById("final1").innerHTML =
        valor1;

    document.getElementById("final2").innerHTML =
        valor2;

    mostrarPantalla("resumen");
};

document.getElementById("reinicio").onclick = function(){

    valor1 = "";
    valor2 = "";

    document.getElementById("relanzar1").disabled = true;
    document.getElementById("siguiente1").disabled = true;

    document.getElementById("relanzar2").disabled = true;
    document.getElementById("siguiente2").disabled = true;

    document.getElementById("dado1").style.transform =
        "rotateX(0deg) rotateY(0deg)";

    document.getElementById("dado2").style.transform =
        "rotateX(0deg) rotateY(0deg)";

    document.getElementById("final1").innerHTML = "";
    document.getElementById("final2").innerHTML = "";

    mostrarPantalla("inicio");
};