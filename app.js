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

        // Update "vs." score
        const playerScoreText = document.getElementById('player-score-text');
        playerScoreText.textContent = playerTotalScore;
        const computerScoreText = document.getElementById('computer-score-text');
        computerScoreText.textContent = computerTotalScore;

        const finalResult = document.getElementById('final-result');

        roundsPlayed++;

        if (roundsPlayed === 1) {
            finalResult.textContent = '';
        }

        if (roundsPlayed === 5) {
            if (playerTotalScore > computerTotalScore) {
                finalResult.textContent = 'You won!'
                resetGameStats();
            } else if (playerTotalScore < computerTotalScore) {
                finalResult.textContent = 'You lose!'
                resetGameStats();
            } else {
                finalResult.textContent = 'It\'s a tie!';
                resetGameStats();
            }
        }
    });
});

function resetGameStats () {
    roundsPlayed = 0;
    playerTotalScore = 0;
    computerTotalScore = 0;
}

function generateComputerInput() { // Generate computer's input
    const options = ['rock', 'paper', 'scissors']; // Create array that contains the options rock, paper, or scissors
    return computerSelection = options[Math.floor(Math.random() * options.length)]; // Return the value for computerSelection to Global Scope
    // 
}

function determineRoundWinner(playerSelection, computerSelection) { // Compare both selection parameters, and announce Winner
    let playerScore = 0;
    let computerScore = 0;
    
    if ((playerSelection === 'rock') && (computerSelection === 'scissors')) { // Player wins
        console.log('You win! Rock beats scissors!');
        playerScore++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) { // Computer wins
        console.log('You lost! Rock beats scissors!');
        computerScore++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) { // Player wins
        console.log('You win! Scissors beats paper!');
        playerScore++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) { // Computer wins
        console.log('You lost! Scissors beats paper');
        computerScore++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) { // Player wins
        console.log('You win! Paper beats rock!');
        playerScore++;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) { // Computer wins
        console.log('You lost! Paper beats rock!');
        computerScore++;
    } else if (playerSelection === computerSelection) { // Tied round
        console.log('It\'s a tie! Try again!');
    }
    return {playerScore, computerScore};
}