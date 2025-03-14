"use strict";
function getComputerChoice() {
    
    let computerChoice = Math.round(Math.random() * 100) / 100;

    if (computerChoice < 0.33) {
        return "Rock";
    }
            
    if (computerChoice >= 0.33 && computerChoice <= .66) {
        return "Paper";
    }
            
    if (computerChoice > 0.66) {
        return "Scissors";
    }                       
}     

function getHumanChoice() {
    let humanPrompt = prompt("Enter R for Rock, P for Paper, or S for Scissors");
    if (humanPrompt.toLowerCase() == "r") {
        return "Rock";
    }

    if (humanPrompt.toLowerCase() == "p") {
        return "Paper";
    }

    if (humanPrompt.toLowerCase() == "s") {
        return "Scissors";
    }
}

// initialize scores
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {

    console.log('humanChoice = ' + humanChoice);
    console.log('computerChoice = ' + computerChoice);

    if (humanChoice == computerChoice) {
        console.log("It's a tie! You both played " + humanChoice);
    }

    if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors");
        }
        if (computerChoice == "Paper") {
            computerScore++;
            console.log("You lose! Paper beats rock");
        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            computerScore++;
            console.log("You Lose! Scissors beats paper");
        }
        if (computerChoice == "Rock") {
            humanScore++;
            console.log("You win! Paper beats rock");
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            humanScore++;
            console.log("You win! Scissors beats paper");
        }
        if (computerChoice == "Rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
        }
    }
}

function playGame() {
    
    // game consists of 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You are the winner! Humans can still beat technology.");
    }
    else if (computerScore > humanScore) {
        console.log("The computer won this time. Technology reigns supreme.");
    }
    else {
        console.log("It's a tie! Humans and computers are equal, for now...");
    }
}

// Play the game!
playGame();