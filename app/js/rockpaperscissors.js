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

var playerMove;
var computerMove;

function getPlayerMove(move) {
    var move = getInput();
    if (move === null) {
        getInput();
    } else {
        console.log("player chooses " + move);
        playerMove = move;
        getComputerMove();
    } 

}

function getComputerMove(move) {
    var move = randomPlay();
    if (move === null || 0) {
        randomPlay();
    } else {
        console.log("computer chooses " + move);
        computerMove = move;
        getWinner(playerMove, computerMove);
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == 'rock' && computerMove == 'scissors' || playerMove == 'paper' && computerMove == 'scissors' || playerMove == 'scissors' && computerMove == 'rock') {
        result winner = 'computer';
    } else if (playerMove == 'rock' && computerMove == 'scissors' || playerMove == 'paper' && computerMove == 'rock' || playerMove == 'scissors' && computerMove == 'paper') {
        result winner = 'player';
    } else if (playerMove == computerMove) {
        result winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var result;
    while (playerMove < 5 && computerMove < 5) {
        result getWinner(getPlayerMove()), getComputerMove()));
    }
    if (result == 'player') {
        playerWins++
    } else if (result == 'computer')
        computerWins++
    } else {
        console.log('tie!');
    }
    console.log("The score is currently" + playerWins + "to" + computerWins + "\n");
    } return (playerWins, computerWins);
}
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

