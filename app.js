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

function determineWinner(playerSelection, computerSelection) { // Create function to compare both selection parameters, and announce Winner
    let playerScore = 0;
    let computerScore = 0;
    
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) { // Player wins
        console.log('You win! Rock beats scissors!');
        playerScore = 1;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) { // Computer wins
        console.log('You lost! Rock beats scissors!');
        computerScore = 1
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) { // Player wins
        console.log('You win! Scissors beats paper!');
        playerScore = 1;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) { // Computer wins
        console.log('You lost! Scissors beats paper');
        computerScore = 1;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) { // Player wins
        console.log('You win! Paper beats rock!');
        playerScore = 1;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) { // Computer wins
        console.log('You lost! Paper beats rock!');
        computerScore = 1;
    } else if (playerSelection === computerSelection) { // Tied round
        console.log('It\'s a tie! Try again!');
        playerScore = 1;
        computerScore = 1;
    }
    return {playerScore, computerScore};
}

function game() {
    let playerTotalScore = 0;
    let computerTotalScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = generateComputerInput();
        const result = determineWinner(playerSelection, computerSelection);
        playerTotalScore += result.playerScore;
        computerTotalScore += result.computerScore;
    }
    console.log(`Player Score: ${playerTotalScore}`);
    console.log(`Computer Score: ${computerTotalScore}`);
}

game();





// Increment winner's score by one for each round

// Create a function that play's five rounds, and announces the winner of the game.