function getComputerChoice() {
  let r = Math.random();
  if (r < 0.33) return "rock";
  else if (r < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    alert("It's a tie!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    alert(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame();
