function getPlayerChoice (){ // Create function to get player's input of Rock, Paper, or Scissor
    let playerSelection = prompt('Rock, Paper, or Scissors?'); // Prompt player to input either Rock, Paper, or Scissor
    playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive
    return playerSelection; // Return the value for playerSelection to Global Scope
}
const playerSelection = getPlayerChoice(); // Declare constant variable based on the getPlayerChoice() function

function generateComputerInput() { // Create function to generate computer's input
    const options = ['rock', 'paper', 'scissors']; // Create array that contains the options rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * options.length); // Declare const that randomly generates/rounds a num based on length of options array.
    let computerSelection = options[randomIndex]; // Select and assign corresponding value from options array
    return computerSelection; // return the value for computerSelection to Global Scope
}
const computerSelection = generateComputerInput(); // Declare constant variable based on the generateComputerInput() function




function determineWinner() { // Create function to compare both selection parameters, and announce Winner
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) { // player wins
        console.log('You win! Rock beats scissors!');
        let playerScore = 1;
        return playerScore;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) { // computer wins
        console.log('You lost! Rock beats scissors!');
        let computerScore = 1
        return computerScore;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) { // player wins
        console.log('You win! Scissors beats paper!');
        let playerScore = 1;
        return playerScore;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) { // computer wins
        console.log('You lost! Scissors beats paper');
        let computerScore = 1;
        return computerScore;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) { // player wins
        console.log('You win! Paper beats rock!');
        let playerScore = 1;
        return playerScore;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) { // computer wins
        console.log('You lost! Paper beats rock!');
        let computerScore = 1;
        return computerScore;
    } else if (playerSelection === computerSelection) { //tied round
        console.log('It\'s a tie! Try again!');
    }
}
determineWinner(playerSelection, computerSelection);



// Create function to compare both selection parameters, and announce winner
// Increment winner's score by one for each round

// Create a function that play's five rounds, and announces the winner of the game.