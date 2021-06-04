computerPlay = () => {
    let choices = ["piedra", "papel", "tijera"]
    return choices[Math.floor(Math.random() * 3)];
}

round = (pS) => {
    let computerSelection = computerPlay()

    if(pS == computerSelection){
        //return "Empata la ronda!"
        const resultadoRonda = document.createElement('div');
        resultadoRonda.classList.add('resultadoRonda');
        resultadoRonda.textContent = "Empata la ronda!";

        resultado.appendChild(resultadoRonda);
    } 
    else if(
        (pS == "piedra" && computerSelection == "papel") ||
        (pS == "papel" && computerSelection == "tijera") ||
        (pS == "tijera" && computerSelection == "piedra")
        ) {
            //return `Perdiste la ronda, ${computerSelection} le gana a ${pS}.`
            const resultadoRonda = document.createElement('div');
            resultadoRonda.classList.add('resultadoRonda');
            resultadoRonda.textContent = `Perdiste la ronda, ${computerSelection} le gana a ${pS}.`;

            resultado.appendChild(resultadoRonda);
            puntosCompu++;
        }
    else if(
        (pS == "piedra" && computerSelection == "tijera") ||
        (pS == "papel" && computerSelection == "piedra") ||
        (pS == "tijera" && computerSelection == "papel")
        ) {
            //return `Ganaste la ronda, ${pS} le gana a ${computerSelection}.`
            const resultadoRonda = document.createElement('div');
            resultadoRonda.classList.add('resultadoRonda');
            resultadoRonda.textContent = `Ganaste la ronda, ${pS} le gana a ${computerSelection}.`;

            resultado.appendChild(resultadoRonda);

            puntosPlayer++;
        }
    else {
        //return `Opcion no valida! Gana la computadora`
        const resultadoRonda = document.createElement('div');
        resultadoRonda.classList.add('resultadoRonda');
        resultadoRonda.textContent = `Opcion no valida! Gana la computadora`;

        resultado.appendChild(resultadoRonda);       
    }
}

game = (e) => {
    let playerSelection = e.target.name;

    pS=playerSelection.toLowerCase();

    if(puntosPlayer<5 && puntosCompu<5) {
        round(playerSelection);
    }
    else{
        if(puntosCompu<puntosPlayer) {
            ganador.textContent = 'Ganaste la partida!';
            ganador.classList.add('ganador--player');

            buttons.appendChild(reinicioButton);
        }
        else {
            ganador.textContent = 'Gana la computadora!';
            ganador.classList.add('ganador--compu');

            buttons.appendChild(reinicioButton);
        }
    }
}

reinicio = () =>{
    puntosPlayer=0;
    puntosCompu=0;
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    while(ganador.firstChild){
        ganador.removeChild(ganador.firstChild);
    }
    
    buttons.removeChild(reinicioButton);
}

const buttpiedra = document.querySelector('button[class=buttpiedra]');
const buttpapel = document.querySelector('button[class=buttpapel]');
const butttijera = document.querySelector('button[class=butttijera]');
const resultado = document.querySelector('[class=resultado]');
const ganador = document.querySelector('[class=ganador]');
const buttons = document.querySelector('[class=buttons]');

const reinicioButton = document.createElement('button');
reinicioButton.textContent = 'Reiniciar';

let puntosCompu=0;
let puntosPlayer=0;

buttpiedra.addEventListener('click', game);
buttpapel.addEventListener('click', game);
butttijera.addEventListener('click', game);
reinicioButton.addEventListener('click', reinicio);