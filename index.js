let humanScore = 0; 
let computerScore = 0;


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
        ++humanScore;
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock' ) {
         console.log(winMessage2);
         ++humanScore;
    }
    else if (humanChoice == 'scissors' && computerChoice == 'paper' ) {
         console.log(winMessage3);
         ++humanScore;
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors' ) {
         console.log(lostMessage1);
         ++computerScore;
    }
    else if (computerChoice == 'paper' && humanChoice == 'rock' ) {
         console.log(lostMessage2);
         ++computerScore;
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper' ) {
         console.log(lostMessage3);
         ++computerScore;
    }
    else if (humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') {
         console.log('No valid selection');
    }
}
