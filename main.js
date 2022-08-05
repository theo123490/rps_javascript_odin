function playsRock(playedByOponent) {
  if(playedByOponent=="scissor") {
    return "win"
  } else if (playedByOponent == "paper") {
    return "lose"
  } else if (playedByOponent == "rock") {
    return "draw"
  }
}

function getComputerChoice() {
  rng_result=Math.floor( Math.random() * 100 % 3)
  if(rng_result == 0) {
    return "rock"
  } else if (rng_result == 1) {
    return "paper"
  } else if (rng_result == 2) {
    return "scissor"
  } else {
    throw("computer selection failed")
  }
}

function playRound(playerSelection, computerSelection) {
  return playsRock(computerSelection)
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
