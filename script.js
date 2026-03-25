alert("Game starting...");

function getComputerChoice() {
  let r = Math.random();
  if (r < 0.33) return "rock";
  else if (r < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (!humanChoice) {
    alert("No input given!");
    return;
  }

  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    alert("Tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    alert("You win! " + humanChoice + " beats " + computerChoice);
  } else {
    alert("You lose! " + computerChoice + " beats " + humanChoice);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    playRound(human, computer);
  }
}

playGame();
