let playerSelection;
let playerTotalScore = 0;
let computerTotalScore = 0;
let roundsPlayed = 0;

const userOptionButton = document.querySelectorAll('.option');
userOptionButton.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.id === 'rock') {
            playerSelection = 'rock';
        } else if (button.id === 'paper') {
            playerSelection = 'paper';
        } else if (button.id === 'scissors') {
            playerSelection = 'scissors';
        }

        const result = determineRoundWinner(playerSelection, generateComputerInput());
        playerTotalScore += result.playerScore; // increment winner's score by one for each win
        computerTotalScore += result.computerScore; // increment winner's score by one for each win
        console.log(`player total score = ${playerTotalScore}`);
        console.log(`computer total score = ${computerTotalScore}`);

        if (roundsPlayed === 5) {
            if (playerTotalScore > computerTotalScore) {
                console.log('Congratulations, you won!');
                resetGame();
            } else if (playerTotalScore < computerTotalScore) {
                console.log('Game over - you lose.');
                resetGame();
            } else {
                console.log('Somehow we\'ve tied!');
                resetGame();
            }
        }
    });
});

function resetGame () {
    roundsPlayed = 0;
    playerTotalScore = 0;
    computerTotalScore = 0;
}

function generateComputerInput() { // Generate computer's input
    const options = ['rock', 'paper', 'scissors']; // Create array that contains the options rock, paper, or scissors
    return computerSelection = options[Math.floor(Math.random() * options.length)]; // Return the value for computerSelection to Global Scope
}

function determineRoundWinner(playerSelection, computerSelection) { // Compare both selection parameters, and announce Winner
    let playerScore = 0;
    let computerScore = 0;
    
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) { // Player wins
        console.log('You win! Rock beats scissors!');
        playerScore++;
        roundsPlayed++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) { // Computer wins
        console.log('You lost! Rock beats scissors!');
        computerScore++;
        roundsPlayed++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) { // Player wins
        console.log('You win! Scissors beats paper!');
        playerScore++;
        roundsPlayed++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) { // Computer wins
        console.log('You lost! Scissors beats paper');
        computerScore++;
        roundsPlayed++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) { // Player wins
        console.log('You win! Paper beats rock!');
        playerScore++;
        roundsPlayed++;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) { // Computer wins
        console.log('You lost! Paper beats rock!');
        computerScore++;
        roundsPlayed++;
    } else if (playerSelection === computerSelection) { // Tied round
        console.log('It\'s a tie! Try again!');
        roundsPlayed++;
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