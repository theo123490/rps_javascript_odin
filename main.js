function winLoseFramework(winCondition, loseCondition, drawCondition, playedByOponent) {
  if(playedByOponent==winCondition) {
    return "win"
  } else if (playedByOponent == loseCondition) {
    return "lose"
  } else if (playedByOponent == drawCondition) {
    return "draw"
  }
}

playsRock = (playedByOponent) => winLoseFramework("scissor", "paper", "rock", playedByOponent)
playsScissor = (playedByOponent) => winLoseFramework("paper", "rock", "scissor", playedByOponent)
playsPaper = (playedByOponent) => winLoseFramework("rock", "scissor", "paper", playedByOponent)

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
