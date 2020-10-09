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
const allGameIcons = document.querySelector(".far");

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
