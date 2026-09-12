const choiseButtons = document.querySelector(".choiseButtons");
const buttons = choiseButtons.querySelectorAll('button');
buttons.forEach(function(button) { 
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoise())
    });
});

const scoreboard = document.querySelector(".scoreboard");
const commentator = document.querySelector(".commentator")

const winnerAnnouncer = document.createElement('p');
winnerAnnouncer.classList.add('winnerAnnouncer');

const gameScoreLimit = 5;

let humanScore = 0;
let computerScore = 0;

let humanScoreTable = document.querySelector("#humanScoreTable");
let computerScoreTable = document.querySelector("#computerScoreTable");

function getComputerChoise() {
    let computerChoise;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {computerChoise = "rock"};
    if (randomNumber == 1) {computerChoise = "paper"};
    if (randomNumber == 2) {computerChoise = "scissors"};
    return(computerChoise);
}

function disableButtons() {
    buttons.forEach((button) => button.disabled = true);
}

function enableButtons() {
    buttons.forEach((button) => button.disabled = false);
}

function announceTheWinnerAndReset(winner, isHumanWin) {
    winnerAnnouncer.textContent = winner + " took " + gameScoreLimit + " rounds! " + winner + " win!";
    if (isHumanWin === false) {
        winnerAnnouncer.classList.remove("winState");
        winnerAnnouncer.classList.add("failState");
    } else {
        winnerAnnouncer.classList.add("winState");
        winnerAnnouncer.classList.remove("failState");
    }
    document.body.appendChild(winnerAnnouncer);
    disableButtons();
    setTimeout(() => {
        document.body.removeChild(winnerAnnouncer);
        humanScore = 0;
        computerScore = 0;
        enableButtons();
        commentator.classList.remove("winState");
        commentator.classList.remove("failState");
        commentator.textContent = "Make your choise to start the game...";
    }, 2000)
    }
    

function updateScoreboard() {
    humanScoreTable.textContent = "You: " + humanScore;
    computerScoreTable.textContent = "CPU: " + computerScore;

    if (humanScore >= gameScoreLimit) {
        announceTheWinnerAndReset("You", true);
    };

    if (computerScore >= gameScoreLimit) {
        announceTheWinnerAndReset("CPU", false);
    }

}


function writeRoundResults(cpuChoise, message) {
    commentator.textContent = "CPU choose " + cpuChoise.toUpperCase() + ".\n\n" + message;
}

function winnerAlert(message) {
    alert(message + "\n\nYour score: " + humanScore + "\nCPU score: " + computerScore);
}



function playRound(humanChoise, computerChoise) {
    let isHumanWin;

    if (humanChoise === computerChoise) {
        writeRoundResults(computerChoise, "PARRY!")
        commentator.classList.remove("winState");
        commentator.classList.remove("failState");
    }

    else {
        if (humanChoise === "rock") {
            if (computerChoise === "paper") {
                writeRoundResults(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                writeRoundResults(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }

        if (humanChoise === "paper") {
            if (computerChoise === "scissors") {
                writeRoundResults(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                writeRoundResults(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }

        if (humanChoise === "scissors") {
            if (computerChoise === "rock") {
                writeRoundResults(computerChoise, "YOU LOSE!")
                isHumanWin = false;
            }
            else {
                writeRoundResults(computerChoise, "YOU WIN!")
                isHumanWin = true;
            }
        }
    }

    if (isHumanWin === true) {
        ++humanScore;
        commentator.classList.add("winState");
        commentator.classList.remove("failState");
    }
    if (isHumanWin === false) {
        ++computerScore;
        commentator.classList.remove("winState");
        commentator.classList.add("failState");
    }

    updateScoreboard();
}