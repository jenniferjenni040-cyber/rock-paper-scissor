function getComputerChoice() {
  let r = Math.random();
  if (r < 0.33) return "rock";
  else if (r < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  return prompt("Enter rock, paper, or scissors:");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Tie!");
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Final Score -> You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) console.log("You won!");
  else if (computerScore > humanScore) console.log("Computer won!");
  else console.log("It's a tie!");
}

playGame();
