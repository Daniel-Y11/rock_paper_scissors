function getComputerChoice(){
    let compChoice = Math.floor(Math.random()*3+1);
    switch(compChoice){
        case 1:
        return "rock"
        break;
        
        case 2:
        return "paper"
        break;
        
        case 3:
        return "scissors"
        break;
    }
}

let playerScore = 0;
let computerScore = 0;

function oneRound(){
    let playerSelection = prompt("Let's play a game of rock, paper, scissors. Pick one.").toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        playerScore++
        return `You win this round, ${playerSelection} beats ${computerSelection}. Your score is ${playerScore} and the computer score is ${computerScore}.`
    } else if (playerSelection === computerSelection){
        return "This round is a tie"
    } else {
        computerScore++
        return `You lost this round, ${computerSelection} beats ${playerSelection}. Your score is ${playerScore} and the computer score is ${computerScore}.`
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(oneRound())
    }
    if (playerScore > computerScore){
        console.log(`You won. You won ${playerScore} round(s) and the computer won ${computerScore} round(s).`)
    }   else if (computerScore > playerScore) {
        console.log(`You lost. The computer won ${computerScore} round(s) and you won ${playerScore} round(s).`)
    }   else {
        console.log(`Tie game, ${playerScore} to ${computerScore}.`)
    }
  }
  
game();

