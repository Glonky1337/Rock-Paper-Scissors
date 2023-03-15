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
        userResultImage = "url('./images/rock.png')";
        computerResultImage = "url('./images/scissors.png')";
        userResultColor = "#6cf96e";
        computerResultColor = "#f96c6c";
        playerScore++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) { // Computer wins
        console.log('You lost! Rock beats scissors!');
        userResultImage = "url('./images/scissors.png')";
        computerResultImage = "url('./images/rock.png')";
        userResultColor = "#f96c6c";
        computerResultColor = "#6cf96e";
        computerScore++;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) { // Player wins
        console.log('You win! Scissors beats paper!');
        userResultImage = "url('./images/scissors.png')";
        computerResultImage = "url('./images/paper.png')";
        userResultColor = "#6cf96e";
        computerResultColor = "#f96c6c";
        playerScore++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) { // Computer wins
        console.log('You lost! Scissors beats paper');
        userResultImage = "url('./images/paper.png')";
        computerResultImage = "url('./images/scissors.png')";
        userResultColor = "#f96c6c";
        computerResultColor = "#6cf96e";
        computerScore++;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) { // Player wins
        console.log('You win! Paper beats rock!');
        userResultImage = "url('./images/paper.png')";
        computerResultImage = "url('./images/rock.png')";
        userResultColor = "#6cf96e";
        computerResultColor = "#f96c6c";
        playerScore++;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) { // Computer wins
        console.log('You lost! Paper beats rock!');
        userResultImage = "url('./images/rock.png')";
        computerResultImage = "url('./images/paper.png')";
        userResultColor = "#f96c6c";
        computerResultColor = "#6cf96e";
        computerScore++;
    } else if ((playerSelection === 'rock') && (computerSelection === 'rock')) {
        console.log('It\'s a tie!');
        userResultImage = "url('./images/rock.png')";
        computerResultImage = "url('./images/rock.png')";
        userResultColor = "#f7f96c";
        computerResultColor = "#f7f96c";
    } else if ((playerSelection === 'paper') && (computerSelection === 'paper')) {
        console.log('It\'s a tie!');
        userResultImage = "url('./images/paper.png')";
        computerResultImage = "url('./images/paper.png')";
        userResultColor = "#f7f96c";
        computerResultColor = "#f7f96c";
    } else if ((playerSelection === 'scissors') && (computerSelection === 'scissors')) {
        console.log('It\'s a tie!');
        userResultImage = "url('./images/scissors.png')";
        computerResultImage = "url('./images/scissors.png')";
        userResultColor = "#f7f96c";
        computerResultColor = "#f7f96c";
    }
    return {playerScore, computerScore, userResultImage, computerResultImage, userResultColor, computerResultColor};
}

function updateRoundResultCards(userResultImage, computerResultImage, userResultColor, computerResultColor) {
    if (roundsPlayed === 0) {
        userResultOne.style.backgroundImage = userResultImage;
        computerResultOne.style.backgroundImage = computerResultImage;
        userResultOne.style.backgroundColor = userResultColor;
        computerResultOne.style.backgroundColor = computerResultColor;
    } else if (roundsPlayed === 1) {
        userResultTwo.style.backgroundImage = userResultImage;
        computerResultTwo.style.backgroundImage = computerResultImage;
        userResultTwo.style.backgroundColor = userResultColor;
        computerResultTwo.style.backgroundColor = computerResultColor;
    } else if (roundsPlayed === 2) {
        userResultThree.style.backgroundImage = userResultImage;
        computerResultThree.style.backgroundImage = computerResultImage;
        userResultThree.style.backgroundColor = userResultColor;
        computerResultThree.style.backgroundColor = computerResultColor;
    } else if (roundsPlayed === 3) {
        userResultFour.style.backgroundImage = userResultImage;
        computerResultFour.style.backgroundImage = computerResultImage;
        userResultFour.style.backgroundColor = userResultColor;
        computerResultFour.style.backgroundColor = computerResultColor;
    } else if (roundsPlayed === 4) {
        userResultFive.style.backgroundImage = userResultImage;
        computerResultFive.style.backgroundImage = computerResultImage;
        userResultFive.style.backgroundColor = userResultColor;
        computerResultFive.style.backgroundColor = computerResultColor;
    }
}

function resetGameStats () {
    roundsPlayed = 0;
    playerTotalScore = 0;
    computerTotalScore = 0;
}

// Round Result Cards (1-5)
const userResultOne = document.getElementById("user-result-one");
const userResultTwo = document.getElementById("user-result-two");
const userResultThree = document.getElementById("user-result-three");
const userResultFour = document.getElementById("user-result-four");
const userResultFive = document.getElementById("user-result-five");

const computerResultOne = document.getElementById("computer-result-one");
const computerResultTwo = document.getElementById("computer-result-two");
const computerResultThree = document.getElementById("computer-result-three");
const computerResultFour = document.getElementById("computer-result-four");
const computerResultFive = document.getElementById("computer-result-five");

function resetGameDisplay () {
    userResultTwo.style.backgroundImage = "";
    computerResultTwo.style.backgroundImage = "";
    userResultTwo.style.backgroundColor = "";
    computerResultTwo.style.backgroundColor = "";

    userResultThree.style.backgroundImage = "";
    computerResultThree.style.backgroundImage = "";
    userResultThree.style.backgroundColor = "";
    computerResultThree.style.backgroundColor = "";

    userResultFour.style.backgroundImage = "";
    computerResultFour.style.backgroundImage = "";
    userResultFour.style.backgroundColor = "";
    computerResultFour.style.backgroundColor = "";

    userResultFive.style.backgroundImage = "";
    computerResultFive.style.backgroundImage = "";
    userResultFive.style.backgroundColor = "";
    computerResultFive.style.backgroundColor = "";
}

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

        // Update "vs." score
        const playerScoreText = document.getElementById('player-score-text');
        playerScoreText.textContent = playerTotalScore;
        const computerScoreText = document.getElementById('computer-score-text');
        computerScoreText.textContent = computerTotalScore;

        // Update final-result div
        const finalResult = document.getElementById('final-result');

        updateRoundResultCards(userResultImage, computerResultImage, userResultColor, computerResultColor);

        roundsPlayed++;

        if (roundsPlayed === 1) {
            finalResult.textContent = '';
            resetGameDisplay();
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