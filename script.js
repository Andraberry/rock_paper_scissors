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
function playMatch() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.addEventListener("click", () => {
    playerIcon.textContent = "✊🏿";
    playerChoice = "rock";
    getRandomChoice();
    computerChoice = randomNumber;
    playRound(playerChoice, computerChoice);
    updateScoreMessage(winner, playerChoice, computerChoice);
  });

  paper.addEventListener("click", () => {
    playerIcon.textContent = "✋🏿";
    playerChoice = "paper";
    getRandomChoice();
    computerChoice = randomNumber;
    console.log(randomNumber);
    playRound(playerChoice, computerChoice);
    updateScoreMessage(winner, playerChoice, computerChoice);
  });
  scissors.addEventListener("click", () => {
    playerIcon.textContent = "✌🏿";
    playerChoice = "scissors";
    getRandomChoice();
    computerChoice = randomNumber;
    playRound(playerChoice, computerChoice);
    updateScoreMessage(winner, playerChoice, computerChoice);
  });
}
playMatch();
function playRound(playerChoice, computerChoice) {
  const gameResult = document.getElementById("gameResult");
  const restartBtn = document.getElementById("restart");
  if (playerScore === 5 || computerScore === 5) {
    match.style.display = "none";
    if (playerScore === 5) {
      gameResult.textContent = "You've won this round";
    } else {
      gameResult.textContent = "You've lost this round";
    }
    restartBtn.addEventListener("click", restartGame);
    restart.style.display = "block";
  }
  if (playerChoice === computerChoice) {
    choiceUpdate.textContent = "It's a tie";
    winner = "tie";
    return; //used to end the function
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    choiceUpdate.textContent = "You win";
    plyScore.textContent = "Player: " + playerScore;
    winner = "player";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    choiceUpdate.textContent = "Computer wins";
    computerScore++;
    compScore.textContent = "Computer: " + computerScore;
    winner = "computer";
    return;
  }
}
function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection,
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection,
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection,
  )} ties with ${computerSelection.toLowerCase()}`;
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
