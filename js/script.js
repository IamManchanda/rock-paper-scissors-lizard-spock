const playerScoreEl = document.getElementById("player-score");
const playerChoiceEl = document.getElementById("player-choice");
const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const playerLizard = document.getElementById("player-lizard");
const playerSpock = document.getElementById("player-spock");
const computerScoreEl = document.getElementById("computer-score");
const computerChoiceEl = document.getElementById("computer-choice");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const computerLizard = document.getElementById("computer-lizard");
const computerSpock = document.getElementById("computer-spock");
const resultText = document.getElementById("result-text");
const reset = document.getElementById("reset");
const allGameIcons = document.querySelectorAll(".far");
const helpContent = document.getElementById("help-content");

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

const choices = {
  rock: {
    name: "Rock",
    defeats: ["scissors", "lizard"],
  },
  paper: {
    name: "Paper",
    defeats: ["rock", "spock"],
  },
  scissors: {
    name: "Scissors",
    defeats: ["paper", "lizard"],
  },
  lizard: {
    name: "Lizard",
    defeats: ["paper", "spock"],
  },
  spock: {
    name: "Spock",
    defeats: ["scissors", "rock"],
  },
};

for (const choiceKey in choices) {
  if (choices.hasOwnProperty(choiceKey)) {
    const choiceValue = choices[choiceKey];
    const { name, defeats } = choiceValue;
    const helpText = document.createElement("h3");
    helpText.classList.add("help-text");
    helpText.textContent = `A ${name} can defeat ${defeats[0]} and ${defeats[1]}.`;
    helpContent.appendChild(helpText);
  }
}

function resetAllSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}

function resetGame() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetAllSelected();
}

function handleComputerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber <= 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a Tie!";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.includes(computerChoice)) {
      resultText.textContent = "You Won!";
      playerScoreNumber += 1;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber += 1;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

function checkResult(playerChoice) {
  resetAllSelected();
  handleComputerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function handleSelected(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " --- Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;
    default:
      break;
  }
}

playerRock.addEventListener("click", () => {
  handleSelected("rock");
});
playerPaper.addEventListener("click", () => {
  handleSelected("paper");
});
playerScissors.addEventListener("click", () => {
  handleSelected("scissors");
});
playerLizard.addEventListener("click", () => {
  handleSelected("lizard");
});
playerSpock.addEventListener("click", () => {
  handleSelected("spock");
});

reset.addEventListener("click", () => {
  reset.classList.add("fa-spin");
  setTimeout(() => {
    resetGame();
    reset.classList.remove("fa-spin");
  }, 1000);
});

resetGame();
