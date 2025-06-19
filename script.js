//Initializing & declare the game div
const game = document.querySelector(".game");

//Initialize & declare buttons in a nodelist
const buttons = document.querySelectorAll("button");

//convert to an array
const buttonsArray = Array.from(buttons);

//Initialize & declare array full of responses
const results = [
  "Human scores a point",
  "Computer scores a point",
  "It's a tie!",
  "Human won!",
  "Computer won",
];

//Initialize & create a div to hold the results
const displayResults = document.createElement("div");

//Initialize & create p element to display human results
const playerResults = document.createElement("p");

//Initialize & create p element to display human result
const computerResults = document.createElement("p");

//Initialize & declare a div to show the scores
const score = document.createElement("div");

//Initialize & declare human score
const humanText = document.createElement("p");

//Initialize & declare computer score
const computerText = document.createElement("p");

//Initialize & declare finish round
const finishRound = document.createElement("div");

//An array with rock, paper, scissors items
let choices = ["rock", "paper", "scissors"];

//Initializing a computer choice variable
let computerChoice;

//Initializing a computer choice variable
let humanChoice;

//Initializing and declaring humanScore = 0;
let humanScore = 0;

//Initializing and declaring computerScore = 0;
let computerScore = 0;

//Initializing reset button
let resetButton;

//creating a function to allow the computer to choose one of the choices
function getComputerChoice() {
  let randomChoice = choices[Math.floor(choices.length * Math.random())];
  return randomChoice;
}

buttonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    computerChoice = getComputerChoice();
    humanChoice = button.value;
    playRound(humanChoice, computerChoice);
  });
});

function playRound(human, computer) {
  setupUI();

  if (human === computer) {
    score.textContent = results[2];
    game.appendChild(score);
  }

  if (human === "rock") {
    if (computer === "paper") {
      computerScore++;
    } else if (computer === "scissors") {
      humanScore++;
    }
  }

  if (human === "paper") {
    if (computer === "rock") {
      humanScore++;
    } else if (computer === "scissors") {
      computerScore++;
    }
  }

  if (human === "scissors") {
    if (computer === "paper") {
      humanScore++;
    } else if (computer === "rock") {
      computerScore++;
    }
  }

  if (humanScore >= 3 || computerScore >= 3) {
    endGame();
  }
}

function endGame() {
  buttonsArray.forEach((button) => {
    displayResults.textContent = "GAME OVER";
    button.disabled = true;
    
    
  });
  resetButton.style.display = "block";

}



function setupUI() {
  humanText.innerHTML = `You chose: ${humanChoice}`;
  computerText.innerHTML = `Computer Chose: ${computerChoice}`;
  playerResults.textContent = `Your score is: ${humanScore}`;
  computerResults.textContent = `Computer score is: ${computerScore}`;
}

function initUI() {
  game.appendChild(humanText);
  game.appendChild(computerText);
  game.appendChild(playerResults);
  game.appendChild(computerResults);
  game.appendChild(displayResults);
  game.appendChild(score);

  humanText.classList.add("humanText");
  computerText.classList.add("computerText");
  playerResults.classList.add("playerResults");
  computerResults.classList.add("computerResults");
  displayResults.classList.add("displayResults");
  score.classList.add("score");




  resetButton = document.createElement("button");
  game.appendChild(resetButton);
  resetButton.style.display = "none";
  resetButton.textContent = "Play Again?";

  resetButton.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.disabled = false;
      
    });
    resetButton.style.display = "none";
    resetGame();
  });
}
initUI();

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanText.innerHTML = "";
  computerText.innerHTML = "";
  playerResults.textContent = "";
  computerResults.textContent = "";
  displayResults.textContent = "";
  score.textContent = "";
}
