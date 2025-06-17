//Initializing & declare the game div
const game = document.querySelector(".game");

//Initialize & declare buttons in a nodelist
const buttons = document.querySelectorAll(button);

//Initialize & declare array full of responses
const results = ["Human scores a point", "Computer scores a point", "It's a tie!", "Human won!", "Computer won"];

//Initialize & create a div to hold the results
const displayResults = document.createElement("div");

//Initialize & create p element to display human results
const playerResults = document.createElement("p");

//Initialize & create p element to display human result
const computerResults = document.createElement("p");

//Initialize & declare a div to show the scores
const score = document.createElement("div");

//Initialize & declare human score
const displayHumanScore = document.createElement("p");

//Initialize & declare computer score
const displayComputerScore = document.createElement("p");

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


//creating a function to allow the computer to choose one of the choices
function getComputerChoice() {
  let randomChoice = choices[Math.floor(choices.length * Math.random())];
  return randomChoice;
}
// getComputerChoice();
// console.log(getComputerChoice());

//creating a function that allows a user to input a choice and validate it
function getHumanChoice() {
  let userChoice = prompt("Please input rock, paper, or scissors to pay");

  //Allowing the user to cancel before playing
  if (userChoice === null) {
    return null;
  }

  //return the choice to lowercase
  userChoice = userChoice.toLowerCase();

  //create a set
  const validChoices = new Set(["rock", "paper", "scissors"]);

  while (!validChoices.has(userChoice)) {
    userChoice = prompt("please enter a valid choice");
    if (userChoice === null) {
      break;
    }

    userChoice = userChoice.toLowerCase();
  }
  return userChoice;
}
getHumanChoice();

function playRound(human, computer) {
  if (human === computer) {
    console.log("This is a tie!");
  }

  if (human === "rock") {
    if (computer === "paper") {
      console.log("Computer won!");
      computerScore++;
    } else if (computer === "scissors") {
      console.log("Human won!");
      humanScore++;
    }
  }

  if (human === "paper") {
    if (computer === "rock") {
      console.log("Human won!");
      humanScore++;
    } else if (computer === "scissors") {
      console.log("Computer won!");
      computerScore++;
    }
  }

  if (human === "scissors") {
    if (computer === "paper") {
      console.log("Human won!");
      humanScore++;
    } else if (computer === "rock") {
      console.log("Computer won!");
      computerScore++;
    }
  }

  
}

// function threeRounds() {
//   while (humanScore < 3 && computerScore < 3) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);
//     humanChoice = "";
//     computer = "";

//   }

//   if (humanScore > computerScore) {
//     console.log(`Human won! The Human Score is: ${humanScore} && Computer Score ${computerScore}`);
//   }

//   else {
//     console.log(` Human lost! The Human Score is: ${humanScore} && Computer Score ${computerScore}`);
//   }

  
// }

// threeRounds();