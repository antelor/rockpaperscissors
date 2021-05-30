computerPlay = () => {
    let choices=["piedra", "papel", "tijera"]
    return choices[Math.floor(Math.random() * 3)];
}

round = (playerSelection, computerSelection) => {
    pS=playerSelection.toLowerCase()

    if(pS == computerSelection) return "Empate!"
    if(
        (pS == "piedra" && computerSelection == "papel") ||
        (pS == "papel" && computerSelection == "tijera") ||
        (pS == "tijera" && computerSelection == "piedra")
        ) return `Perdiste, ${computerSelection} le gana a ${pS}.`
    if(
        (pS == "piedra" && computerSelection == "tijera") ||
        (pS == "papel" && computerSelection == "piedra") ||
        (pS == "tijera" && computerSelection == "papel")
        ) return `Ganaste, ${pS} le gana a ${computerSelection}.`
}

const playerSelection = "piedra";
const computerSelection = computerPlay();
console.log(round(playerSelection, computerSelection));