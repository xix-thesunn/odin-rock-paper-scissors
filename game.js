const startButton = document.querySelector("button");
startButton.addEventListener("click", () => {
    startGame()
})

let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
    let computerChoise;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {computerChoise = "rock"};
    if (randomNumber == 1) {computerChoise = "paper"};
    if (randomNumber == 2) {computerChoise = "scissors"};
    return(computerChoise);
}

function getHumanChoise(i) {
    let humanChoise = prompt("Round: " + ++i + "\n\nYour score: " + humanScore + "\nCPU score: " + computerScore + "\n\nEnter your choise: ");
    if (humanChoise === null) {
        return null;
    }
    else {    
        humanChoise = humanChoise.toLowerCase();

        if (humanChoise === "rock" || humanChoise === "paper" || humanChoise == "scissors") {
            return(humanChoise);
        }
        else {
            alert("You сan pick only between ROCK, PAPER and SCISSORS. Try again.")
            return("none");
        }
    }
}

function gameRoundAlert(cpuChoise, message) {
    alert("CPU choose " + cpuChoise.toUpperCase() + ".\n\n" + message);
}

function winnerAlert(message) {
    alert(message + "\n\nYour score: " + humanScore + "\nCPU score: " + computerScore);
}



function playRound(humanChoise, computerChoise) {
    let isHumanWin;

    if (humanChoise === computerChoise) {
        gameRoundAlert(computerChoise, "PARRY!")
    }

    else {
        if (humanChoise === "rock") {
            if (computerChoise === "paper") {
                gameRoundAlert(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                gameRoundAlert(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }

        if (humanChoise === "paper") {
            if (computerChoise === "scissors") {
                gameRoundAlert(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                gameRoundAlert(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }

        if (humanChoise === "scissors") {
            if (computerChoise === "rock") {
                gameRoundAlert(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                gameRoundAlert(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }
    }

    if (isHumanWin === true) {
        ++humanScore;
    }
    if (isHumanWin === false) {
        ++computerScore;
    }

}