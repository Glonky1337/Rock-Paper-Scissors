function getPlayerChoice (){ // Create function to get player's input of Rock, Paper, or Scissor
    let playerSelection = prompt('Rock, Paper, or Scissors?'); // Prompt player to input either Rock, Paper, or Scissor
    playerSelection = playerSelection.toLowerCase(); // Make player's selection case-insensitive
    return playerSelection; //return the value for playerSelection to Global Scope
}
const playerSelection = getPlayerChoice(); // declare constant variable based on the getPlayerChoice() function.

// Create function to generate computer's input
// Return value for variable

// Create function to compare both selection parameters, and announce winner
// Increment winner's score by one for each round

// Create a function that play's five rounds, and announces the winner of the game.