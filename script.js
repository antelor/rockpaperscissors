computerPlay = () => {
    let choices=["piedra", "papel", "tijera"]
    return choices[Math.floor(Math.random() * 3)];
}

round = (playerSelection, computerSelection) => {
    pS=playerSelection.toLowerCase()

    if(pS == computerSelection) return "Empata la ronda!"
    if(
        (pS == "piedra" && computerSelection == "papel") ||
        (pS == "papel" && computerSelection == "tijera") ||
        (pS == "tijera" && computerSelection == "piedra")
        ) return `Perdiste la ronda, ${computerSelection} le gana a ${pS}.`
    if(
        (pS == "piedra" && computerSelection == "tijera") ||
        (pS == "papel" && computerSelection == "piedra") ||
        (pS == "tijera" && computerSelection == "papel")
        ) return `Ganaste la ronda, ${pS} le gana a ${computerSelection}.`
    else return `Opcion no valida! Gana la computadora`
}

game = () => {
    let puntosCompu=0
    let puntosPlayer=0
    for(let i=0; i<5;i++){
        let playerSelection = window.prompt("Piedra, papel o tijera?");
        let computerSelection = computerPlay();

        let roundResult = round(playerSelection, computerSelection)
        console.log(roundResult);
        if(roundResult[0]==`P` || roundResult[0]==`O`) puntosCompu++
        else puntosPlayer++
    }

    if(puntosCompu==puntosPlayer)    console.log("Empate!!");
    else if(puntosCompu<puntosPlayer) console.log("Ganaste!!")
    else console.log("Gana la computadora!!")

}

game()