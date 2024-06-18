const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const displayResult = document.querySelector(".displayResult");

let humanScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        computerChoice = 'rock';
            break;
        
        case 1:
        computerChoice = 'paper';
        break;

        case 2:
        computerChoice = 'scissors';
        break;
    } 
    return computerChoice;
    
}

    rockBtn.addEventListener("click", () => {let humanSelection ='rock'; playRound(humanSelection);});
    paperBtn.addEventListener("click", () => {let humanSelection ='paper'; playRound(humanSelection);});
    scissorsBtn.addEventListener("click", () => {let humanSelection ='scissors'; playRound(humanSelection);});


function playRound(playerSelection) {

    const humanChoice = playerSelection;
    const computerChoice = getComputerChoice();
    
    
        let tieMessage = "It is a draw!"
    
        let winMessage1 = "You've won! Rock beats Scissors"
        let winMessage2 = "You've won! Paper beats Rock"
        let winMessage3 = "You've won! Scissors beats Paper"
        
        let lostMessage1 = "You've lost! Rock beats Scissors"
        let lostMessage2 = "You've lost! Paper beats Rock"
        let lostMessage3 = "You've lost! Scissors beats Paper"
    
    if (humanScore === 3 || computerScore === 3) {
            if (humanScore === 3) {
                console.log(`The winner is Human! Score: Human: ${humanScore}, Computer: ${computerScore}`);
                displayResult.textContent = `The winner is Human! Score: Human: ${humanScore}, Computer: ${computerScore}`;
            }
            else if (computerScore === 3) {
                console.log(`The winner is Computer! Score: Human: ${humanScore}, Computer: ${computerScore}`)
                displayResult.textContent = `The winner is Computer! Score: Human: ${humanScore}, Computer: ${computerScore}`;
            }
            humanScore = 0;
            computerScore = 0;
        }
    else if (humanScore < 3 && computerScore <3 ) {
            if (humanChoice === computerChoice) {
                console.log(tieMessage);
                displayResult.textContent = tieMessage;
            }
            else if (humanChoice == 'rock' && computerChoice == 'scissors' ) {
                console.log(winMessage1);
                displayResult.textContent = winMessage1;
                return humanScore++;
            }
            else if (humanChoice == 'paper' && computerChoice == 'rock' ) {
                console.log(winMessage2);
                displayResult.textContent = winMessage2
                return humanScore++;
            }
            else if (humanChoice == 'scissors' && computerChoice == 'paper' ) {
                console.log(winMessage3);
                displayResult.textContent = winMessage3
                return humanScore++;
            }
            else if (computerChoice == 'rock' && humanChoice == 'scissors' ) {
                console.log(lostMessage1);
                displayResult.textContent = lostMessage1
                return computerScore++;
            }
            else if (computerChoice == 'paper' && humanChoice == 'rock' ) {
                console.log(lostMessage2);
                displayResult.textContent = lostMessage2
                return computerScore++;
            }
            else if (computerChoice == 'scissors' && humanChoice == 'paper' ) {
                console.log(lostMessage3);
                displayResult.textContent = lostMessage3
                return computerScore++;
            }
            else if (humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') {
                console.log('No valid selection');
                displayResult.textContent = 'No valid selection';
            }
            
        }
}
