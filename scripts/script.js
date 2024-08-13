function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    // print the choices (only show the 2 choices)
    displayChoices(humanChoice, computerChoice);

    // determine winner, display winner, update scores
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        updateText.textContent = "Tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose!");
            updateText.textContent = "You lose!";
            computerScore++;
        } else {
            console.log("You win!");
            updateText.textContent = "You win!";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose!");
            updateText.textContent = "You lose!";
            computerScore++;
        } else {
            console.log("You win!");
            updateText.textContent = "You win!";
            humanScore++;
        }
    } else {
        if (computerChoice === "rock") {
            console.log("You lose!");
            updateText.textContent = "You lose!";
            computerScore++;
        } else {
            console.log("You win!");
            updateText.textContent = "You win!";
            humanScore++;
        }
    }

    setTimeout(() => {
        setDefaultButtonDisplay();
    }, 1500);  // sleep for 1.5 seconds

    updateScore();
}

function displayChoices(humanChoice, computerChoice) {

    // set rock to be humanChoice, paper to be none, scissors to be computerChoice
    rockImg.src = `./media/${humanChoice}.png`;
    rockImg.alt = `"${humanChoice} image"`;

    paperImg.src = 'none';
    paperImg.alt = '';

    scissorsImg.src = `./media/${computerChoice}.png`;
    scissorsImg.alt = `"${computerChoice} image"`;
}

function setDefaultButtonDisplay() {
    if (!isGameOver()) {
        rockImg.src = "./media/rock.png";
        rockImg.alt = "rock image";
    
        paperImg.src = "./media/paper.png";
        paperImg.alt = "paper image";
    
        scissorsImg.src = "./media/scissors.png";
        scissorsImg.alt = "scissors image";
    }
}

function getWinner(humanScore, computerScore) {
    if (computerScore > humanScore) {
        return "Your Opponent is the Winner!";
    } else {
        return "You Win Overall!";
    }
}

function isGameOver() {
    if (humanScore >= 2 || computerScore >= 2) {
        return true;
    } else {
        return false;
    }
}

// Event listener function
function handleClick(event) {
    let opponentChoice = getComputerChoice();

    if (event.currentTarget.id === "rock") {
        playRound("rock", opponentChoice);
    } else if (event.currentTarget.id === "paper") {
        playRound("paper", opponentChoice);
    } else if (event.currentTarget.id === "scissors") {
        playRound("scissors", opponentChoice);
    }

    console.log(humanScore);
    console.log(computerScore);

    if (isGameOver()) {
        let message = getWinner(humanScore, computerScore);

        // Print winner to the h1
        let titleH1 = document.querySelector("#title-container h1");
        titleH1.textContent = message;

        // Remove event listeners
        buttons.forEach((button) => {
            button.removeEventListener("click", handleClick);
        });

        addPlayAgainButton();
    }
}

function updateScore() {
    // update my score
    myScoreH2.textContent = `You: ${humanScore}`;
    // update opponent score
    computerScoreH2.textContent = `Opponent: ${computerScore}`;
}

function addPlayAgainButton() {
    updateText.remove();
    updateContainer.appendChild(playAgainButton);

    playAgainButton.addEventListener("click", () => {
        location.reload();
    });
}

// declare variables
let humanScore = 0;
let computerScore = 0;

const rockImg = document.querySelector("#rock img");
const paperImg = document.querySelector("#paper img");
const scissorsImg = document.querySelector("#scissors img");

let updateText = document.querySelector("#update-text");

let myScoreH2 = document.querySelector("#my-score-count");
let computerScoreH2 = document.querySelector("#computer-score-count");

let updateContainer = document.querySelector("#update-container");
let playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again?";
playAgainButton.id = "play-again-button";

// add click listener to buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    // add click listener
    button.addEventListener("click", handleClick);
});
