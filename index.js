const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const displayResult = document.querySelector(".displayResult");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
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


function getHumanChoice() {
    let humanSelection = prompt('Choose: Rock, Paper or Scissors');
    let humanSelectionLowerCase = humanSelection.toLowerCase();
    return humanSelectionLowerCase;
}



function playGame() {
    let humanScore = 0; 
    let computerScore = 0;

    function playRound() {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        
            let tieMessage = "It is a draw!"
        
            let winMessage1 = "You've won! Rock beats Scissors"
            let winMessage2 = "You've won! Paper beats Rock"
            let winMessage3 = "You've won! Scissors beats Paper"
            
            let lostMessage1 = "You've lost! Rock beats Scissors"
            let lostMessage2 = "You've lost! Paper beats Rock"
            let lostMessage3 = "You've lost! Scissors beats Paper"
        
        
    
            if (humanChoice === computerChoice) {
                console.log(tieMessage);
            }
            else if (humanChoice == 'rock' && computerChoice == 'scissors' ) {
                console.log(winMessage1);
                return humanScore++;
            }
            else if (humanChoice == 'paper' && computerChoice == 'rock' ) {
                 console.log(winMessage2);
                return humanScore++;
            }
            else if (humanChoice == 'scissors' && computerChoice == 'paper' ) {
                 console.log(winMessage3);
                return humanScore++;
            }
            else if (computerChoice == 'rock' && humanChoice == 'scissors' ) {
                 console.log(lostMessage1);
                return computerScore++;
            }
            else if (computerChoice == 'paper' && humanChoice == 'rock' ) {
                 console.log(lostMessage2);
                return computerScore++;
            }
            else if (computerChoice == 'scissors' && humanChoice == 'paper' ) {
                 console.log(lostMessage3);
                return computerScore++;
            }
            else if (humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') {
                 console.log('No valid selection');
            }
        
        }

while (humanScore < 3 && computerScore < 3) {        
playRound();
}

     if (humanScore == 3 || computerScore == 3) {
         if (humanScore == 3) {
             console.log(`The winner is Human! Score: Human: ${humanScore}, Computer: ${computerScore}`)        
         }
         else if (computerScore == 3) {
             console.log(`The winner is Computer! Score: Human: ${humanScore}, Computer: ${computerScore}`)
         }
     }
}


playGame();
