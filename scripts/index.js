

function getComputerChoice() {
    let value = parseInt((Math.random() * 10) % 3)
    switch (value) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

}

function getHumanChoice() {
    let choice = prompt("Insert one of the following: rock, paper, scissors")
    return (choice.toLowerCase() == "rock" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "scissors") ? choice.toLowerCase() : "invalid"
}


function playRound(computerChoice, humanChoice) {
    if (humanChoice == "invalid") {
        return -1
    }
    switch (humanChoice) {
        case "rock": return (computerChoice == "scissors") ? "Congratulations! You win!" : (computerChoice == "rock") ? ("It's a tie!") : ("The computer won! Try again!")
        case "paper": return (computerChoice == "rock") ? "Congratulations! You win!" : (computerChoice == "paper") ? ("It's a tie!") : ("The computer won! Try again!")
        case "scissors": return (computerChoice == "paper") ? "Congratulations! You win!" : (computerChoice == "scissors") ? ("It's a tie!") : ("The computer won! Try again!")
    }
}


const result = document.querySelector(".result")

const rockbtn = document.querySelector(".rock")
const scissorsbtn = document.querySelector(".scissors")
const paperbtn = document.querySelector(".paper")

const buttons = document.querySelectorAll("button")

const usrScore = document.querySelector(".userScore")
const computerScore = document.querySelector(".computerScore")
let usr = 0
let computer = 0
let roundsPlayed=0

document.addEventListener("gameOver",()=>{
    const gameOverMessage = document.createElement("h2");
    gameOverMessage.textContent = "Game Over! 5 Rounds Complete.";
    result.appendChild(gameOverMessage);
    buttons.forEach(button => {
        button.disabled = true;
    });
})
rockbtn.addEventListener("click", () => {
    result.textContent = ""
    const winner = playRound(getComputerChoice(), "rock")
    result.appendChild(handlePlay(winner))
    roundsPlayed++
    isGameOver(roundsPlayed)
})
scissorsbtn.addEventListener("click", () => {
    result.textContent = ""
    const winner = playRound(getComputerChoice(), "scissors")
    result.appendChild(handlePlay(winner))
    roundsPlayed++
    isGameOver(roundsPlayed)
})
paperbtn.addEventListener("click", () => {
    result.textContent = ""
    const winner = playRound(getComputerChoice(), "paper")
    result.appendChild(handlePlay(winner))
    roundsPlayed++
    isGameOver(roundsPlayed)

})

function handlePlay(winner) {
    switch (winner) {
        case ("Congratulations! You win!"):
            usrScore.textContent = (++usr).toString()
            break
        case ("It's a tie!"):
            usrScore.textContent = (++usr).toString();
            computerScore.textContent = (++computer).toString()
            break
        case ("The computer won! Try again!"):
            computerScore.textContent = (++computer).toString()
            break
    }
    const p = document.createElement("p")
    p.textContent = winner
    return p
}
function isGameOver(games){
    if(games>=5){
        document.dispatchEvent(new CustomEvent("gameOver"))
    }

}