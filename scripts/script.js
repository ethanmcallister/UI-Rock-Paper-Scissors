function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanInput = prompt("Enter a number from 0-2:\n0: Rock\n1: Paper\n2: Scissors");
    if (humanInput == 0) {
        return "rock";
    } else if (humanInput == 1) {
        return "paper";
    } else if (humanInput == 2) {
        return "scissors";
    }

    return "invalid";
}

function playRound(humanChoice, computerChoice) {
    // print the choices
    console.log("Computer chose " + computerChoice + "\nYou chose " + humanChoice);

    // determine winner, display winner, update scores
    if (humanChoice == "invalid") {
        console.log("Invalid input. Try again.");
    } else if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("You win!");
            humanScore++;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("You win!");
            humanScore++;
        }
    } else {
        if (computerChoice == "rock") {
            console.log("You lose!");
            computerScore++;
        } else {
            console.log("You win!");
            humanScore++;
        }
    }
}

function getWinner(humanScore, computerScore) {
    if (computerScore > humanScore) {
        return "Computer Wins!";
    } else {
        return "You Win!";
    }
}

let humanScore = 0;
let computerScore = 0;

console.log("Rock Paper Scissors! First to 2 Wins!");

while (humanScore < 2 && computerScore < 2) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    
    // print the score
    console.log("Computer Score: " + computerScore + "\nYour Score: " + humanScore);

    // blank line
    console.log(" ");
}

let winner = getWinner(humanScore, computerScore);
alert(winner + "\nOverall Score:\nComputer Score: " + computerScore + "\nYour Score: " + humanScore);
