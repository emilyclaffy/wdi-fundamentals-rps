////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playMove == 'rock' && computerMove == 'scissors') {
        result = 'computer';
    } else if (playerMove == 'paper' && computerMove = 'scissors') {
        result = 'computer';
    } else if (playerMove == 'scissors' && computerMove = 'rock') {
        result = 'computer';
    } else if (playerMove == 'rock' && computerMove = 'scissors') {
        result = 'player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        result = 'player';
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        result = 'player';
    } else if (playerMove == 'rock' && computerMove == 'rock') {
        result = 'tie';
    } else if (playerMove == 'paper' && computerMove == 'paper') {
        result = 'tie';
    } else if (playerMove == 'scissors' && computerMove == 'scissors') {
        result = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

