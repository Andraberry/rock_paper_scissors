let computerScore = 0;
let playerScore = 0;
let computerChoice;
let winner = "";
const choiceUpdate = document.getElementById("para");
const match = document.querySelector(".match");
const restart = document.querySelector(".restart-container");
const compScore = document.getElementById("computerScore");
const plyScore = document.getElementById("playerScore");
const scoreMessage = document.getElementById("para1");
//INTROSCREEN
function startGame() {
  const playBtn = document.querySelector(".startBtn");
  const introScreen = document.querySelector(".intro");

  playBtn.addEventListener("click", () => {
    introScreen.classList.add("fadeout");
    match.classList.add("fadein");
  });
}
startGame();
//Create computer choice
let rps = ["rock", "paper", "scissors"];
let randomNumber;
function getRandomChoice() {
  const computerIcon = document.getElementById("computerIcon");
  // rps = ["rock", "paper", "scissors"];
  randomNumber = rps[Math.floor(Math.random() * 3)];
  console.log(randomNumber);
  if (randomNumber === "rock") {
    computerIcon.textContent = "✊🏿";
  }
  if (randomNumber === "paper") {
    computerIcon.textContent = "✋🏿";
  }
  if (randomNumber === "scissors") {
    computerIcon.textContent = "✌🏿";
  }
}
