function getPlayerChoice (){ // Create function to get player's input of Rock, Paper, or Scissor
    let playerSelection = prompt('Rock, Paper, or Scissors?'); // Prompt player to input either Rock, Paper, or Scissor
    playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive
    return playerSelection; //return the value for playerSelection to Global Scope
}
const playerSelection = getPlayerChoice(); // declare constant variable based on the getPlayerChoice() function
console.log(playerSelection);

function generateComputerInput() { // Create function to generate computer's input
    const options = ['rock', 'paper', 'scissors']; // Create array that contains the options rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * options.length); // Declare const that randomly generates/rounds a num based on length of options array.
    let computerSelection = options[randomIndex]; // Select and assign corresponding value from options array
    return computerSelection; // return the value for computerSelection to Global Scope
}
const computerSelection = generateComputerInput(); // declare constant variable based on the generateComputerInput() function
console.log(computerSelection);


// Create function to generate computer's input
// Return value for variable

// Create function to compare both selection parameters, and announce winner
// Increment winner's score by one for each round

// Create a function that play's five rounds, and announces the winner of the game.