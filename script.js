body {
    margin: 0;
    font-family: Arial, sans-serif;
    text-align: center;
}

.pantalla {
    display: none;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.activa {
    display: flex;
}

#inicio {
    background: #0057ff;
}

.boton-inicio {
    background: yellow;
    color: black;
    font-size: 32px;
    font-weight: bold;
    padding: 20px 50px;
    border-radius: 20px;
    border: none;
}

.dado {
    width: 180px;
    height: 180px;
    background: white;
    border: 4px solid #333;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    margin: 20px;
}

.caida {
    animation: caidaGiro 1s ease;
}

@keyframes caidaGiro {

    0% {
        transform: translateY(-300px) rotate(0deg);
    }

    100% {
        transform: translateY(0px) rotate(1080deg);
    }

}

button {
    padding: 12px 20px;
    margin: 10px;
    font-size: 16px;
}

.resultado-final {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.resultado-final div {
    border: 2px solid black;
    padding: 20px;
    border-radius: 10px;
    font-size: 26px;
    font-weight: bold;
}