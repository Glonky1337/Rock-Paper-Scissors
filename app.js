function getPlayerChoice (){ // Get player's input of Rock, Paper, or Scissor
    let playerSelection = prompt('Rock, Paper, or Scissors?'); // Prompt player to input either Rock, Paper, or Scissor
    playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive
    return playerSelection; // Return the value for playerSelection to Global Scope
}

function generateComputerInput() { // Generate computer's input
    const options = ['rock', 'paper', 'scissors']; // Create array that contains the options rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * options.length); // Declare const that randomly generates/rounds a num based on length of options array.
    let computerSelection = options[randomIndex]; // Select and assign corresponding value from options array
    return computerSelection; // Return the value for computerSelection to Global Scope
}

function determineRoundWinner(playerSelection, computerSelection) { // Compare both selection parameters, and announce Winner
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

function game() {  // Play five rounds, and announce the winner of the game
    let playerTotalScore = 0; // start each round with score of 0
    let computerTotalScore = 0; // start each round with score of 0

    for (let i = 0; i < 5; i++) { // loop for five rounds
        const playerSelection = getPlayerChoice();
        const computerSelection = generateComputerInput();
        const result = determineRoundWinner(playerSelection, computerSelection);
        playerTotalScore += result.playerScore; // increment winner's score by one for each win
        computerTotalScore += result.computerScore; // increment winner's score by one for each win
        console.log(`Player Score: ${playerTotalScore}`);
        console.log(`Computer Score: ${computerTotalScore}`);
    }

    if (playerTotalScore > computerTotalScore) {
        console.log('Congratulations, you won!');
    } else if (playerTotalScore < computerTotalScore) {
        console.log('Game over - you lose.');
    } else {
        console.log('Somehow we\'ve tied!');
    }
}