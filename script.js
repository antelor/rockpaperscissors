computerPlay = () => {
    let choices = ["piedra", "papel", "tijera"]
    return choices[Math.floor(Math.random() * 3)];
}

round = (e) => {
    let computerSelection = computerPlay()
    let playerSelection = e.target.name;

    pS=playerSelection.toLowerCase()

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
        }
    else {
        //return `Opcion no valida! Gana la computadora`
        const resultadoRonda = document.createElement('div');
        resultadoRonda.classList.add('resultadoRonda');
        resultadoRonda.textContent = `Opcion no valida! Gana la computadora`;

        resultado.appendChild(resultadoRonda);       
    }
}

game = (playerSelection) => {
    let puntosCompu=0
    let puntosPlayer=0
    /**for(let i=0; i<5;i++){*/
        let computerSelection = computerPlay();

        let roundResult = round(playerSelection, computerSelection)
        console.log(roundResult);
        if(roundResult[0]==`P` || roundResult[0]==`O`) puntosCompu++
        else puntosPlayer++
    //}

    if(puntosCompu==puntosPlayer)    console.log("Empate!!");
    else if(puntosCompu<puntosPlayer) console.log("Ganaste!!")
    else console.log("Gana la computadora!!")

}

const buttpiedra = document.querySelector('button[class=buttpiedra]');
const buttpapel = document.querySelector('button[class=buttpapel]');
const butttijera = document.querySelector('button[class=butttijera]');
const resultado = document.querySelector('[class=resultado]');

buttpiedra.addEventListener('click', round);
buttpapel.addEventListener('click', round);
butttijera.addEventListener('click', round);
