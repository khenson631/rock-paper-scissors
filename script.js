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

// initialize scores
let humanScore = 0;
let computerScore = 0;

// hide Rest Game button to start with
const resetGameButton = document.querySelector("#resetGame");
resetGameButton.style.display = "none";

function playRound(humanChoice,computerChoice) {

    console.log('humanChoice = ' + humanChoice);
    console.log('computerChoice = ' + computerChoice);
    
    let roundWinnerText = '';
    
    if (humanChoice == computerChoice) {
        console.log("It's a tie! You both played " + humanChoice);
        roundWinnerText = "It's a tie! You both played " + humanChoice;
    }

    if (humanChoice == "Rock") {
        if (computerChoice == "Scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors");
            roundWinnerText = "You win! Rock beats scissors";
        }
        if (computerChoice == "Paper") {
            computerScore++;
            console.log("You lose! Paper beats rock");
            roundWinnerText = "You lose! Paper beats rock";
        }
    }

    if (humanChoice == "Paper") {
        if (computerChoice == "Scissors") {
            computerScore++;
            console.log("You Lose! Scissors beats paper");
            roundWinnerText = "You Lose! Scissors beats paper";
        }
        if (computerChoice == "Rock") {
            humanScore++;
            console.log("You win! Paper beats rock");
            roundWinnerText = "You win! Paper beats rock";
        }
    }

    if (humanChoice == "Scissors") {
        if (computerChoice == "Paper") {
            humanScore++;
            console.log("You win! Scissors beats paper");
            roundWinnerText = "You win! Scissors beats paper";
        }
        if (computerChoice == "Rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors");
            roundWinnerText = "You lose! Rock beats scissors";
        }
    }

    //Append results to page
    const roundWinner = document.createElement("p");
    roundWinner.setAttribute("id","roundWinner");
    roundWinner.textContent = roundWinnerText;
    document.body.appendChild(roundWinner);

    displayRunningScore();

    if (humanScore == 5 || computerScore == 5) {
        calculateWinner();
        clearScoresForNewGame();
        disableRPSButtons();
        resetGameButton.style.display = "flex";    }
}

function disableRPSButtons() {
    btnRock.style.display="none";
    btnPaper.style.display="none";
    btnScissors.style.display="none";
}

function calculateWinner() {
    if (humanScore > computerScore) {
        let text = "You are the winner! Humans can still beat technology."
        announceWinner(text);
    }
    else if (computerScore > humanScore) {
        let text = "The computer won this time. Technology reigns supreme.";
        announceWinner(text);
    }
    else {
        let text = "It's a tie! Humans and computers are equal, for now...";
        announceWinner(text);
    }
}

function announceWinner(winnerText) {
    const para = document.createElement("b");
    para.textContent = winnerText;
    para.setAttribute("id","winnerText");
    document.body.appendChild(para);
}

function clearScoresForNewGame(){
    humanScore = 0;
    computerScore = 0;
}

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click',function() {
    btnClick(btnRock);
})

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click',function() {
    btnClick(btnPaper);
})

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click',function() {
    btnClick(btnScissors);
})

 function btnClick(btn) {
    console.log("btnClick test " + btn.textContent);
    const humanChoice = btn.textContent;   
    playRound(humanChoice,getComputerChoice());
 }

 const computerScoreDisplayed = document.getElementById("ComputerScore");
 const humanScoreDisplayed = document.getElementById("HumanScore");

 function displayRunningScore() {
    computerScoreDisplayed.textContent = 'Computer: ' + computerScore;
    humanScoreDisplayed.textContent = 'Human: ' + humanScore;
 }

resetGameButton.addEventListener('click',function(){
        // hide reset button
        resetGameButton.style.display = 'none';
        
        // show rps buttons
        btnRock.style.display="flex";
        btnPaper.style.display="flex";
        btnScissors.style.display="flex";
        
        // clear round and game winner text logs
        document.querySelectorAll('#roundWinner').forEach(el => el.remove());
        document.querySelectorAll("#winnerText").forEach(el => el.remove()) ;

        // clear scores
        computerScoreDisplayed.textContent='Computer: 0';
        humanScoreDisplayed.textContent='Human: 0';
    })