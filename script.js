function getComputerChoice() {
    const max = 3;
    const choice = Math.floor(Math.random() * max);
    let computerChoice;
    switch (choice) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
    }
    return computerChoice;
}

/*
function getHumanChoice() {
    let userInput = prompt("What's your choice? Enter 'rock', 'paper' or 'scissors':");
    if (!userInput) {
        console.log("No choice entered. Exiting game.");
        return null;
    }
    let choice = userInput.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        console.log(`The human chose ${choice}`);
        return choice;
    } else {
        console.log("Invalid choice entered. Exiting game.");
        return null;
    }
}
*/

let humanScore = 0;
let computerScore = 0;
let gameCount = 0;

function playRound(humanChoice, computerChoice) {
    if (!humanChoice || !computerChoice) {
        return "Invalid choices. Please restart the game.";
    }
    if (humanChoice === computerChoice) {
        return "Tie";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        computerScore++;
        return `The computer has won! ${computerChoice} beats ${humanChoice}.`;
    } else {
        humanScore++;
        return `The human has won! ${humanChoice} beats ${computerChoice}.`;
    }
}

function checkGameWinner(){
    if (gameCount === 5){
        let finalResult;

        if (humanScore > computerScore){
            finalResult = 'You are the overall winner!';
        }
        else if (computerScore > humanScore){
            finalResult = 'The computer is the overall winner!'
        }
        else{
            finalResult = 'The game is a tie!';
        }
        document.getElementById('game-winner').textContent = `Game winner: ${finalResult}`;
    }
}

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener("click", () => {
    if (gameCount < 5){
        gameCount++;
        const humanChoice = 'rock';
        const computerChoice = getComputerChoice();
        updateSelection(humanChoice, computerChoice, playRound(humanChoice, computerChoice));
        checkGameWinner();
    }

});


btnPaper.addEventListener("click", () => {
    if (gameCount < 5) {
        gameCount++;
        const humanChoice = 'paper';
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateSelection(humanChoice, computerChoice, result);
        checkGameWinner();
    }
});

btnScissors.addEventListener("click", () => {
    if (gameCount < 5) {
        gameCount++;
        const humanChoice = 'scissors';
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        updateSelection(humanChoice, computerChoice, result);
        checkGameWinner();
    }
});

function updateSelection(humanChoice, computerChoice, result) {
    document.getElementById('human-choice').textContent = `You chose: ${humanChoice}`;
    document.getElementById('computer-choice').textContent = `The computer chose: ${computerChoice}`;
    document.getElementById('round-winner').textContent = `Current round winner: ${result}`;
}

