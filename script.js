function getComputerChoice() {
    const max = 3;
    const choice = Math.floor(Math.random() * max);
    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let userInput = prompt("What's your choice? Enter 'rock', 'paper' or 'scissors':");
    if (!userInput) {
        console.log("No choice entered. Exiting game.");
        return null;
    }
    let choice = userInput.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log("Invalid choice entered. Exiting game.");
        return null;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const numRounds = 5;

    function playRound(humanChoice, computerChoice) {
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

    for (let i = 0; i < numRounds; i++) {
        const humanChoice = getHumanChoice();
        if (!humanChoice) {
            return; 
        }

        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}: Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
    }

    console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("The human has won the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer has won the game!");
    } else {
        console.log("The game is a tie!");
    }
}


playGame();
