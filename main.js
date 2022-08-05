function playRound(playerSelection, computerSelection) {
  // your code here!
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
