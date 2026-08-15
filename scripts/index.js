

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


function playRound(computerChoice,humanChoice){
    if(humanChoice=="invalid"){
        return -1
    }
    switch(humanChoice){
        case "rock":return(computerChoice=="scissors")?0:1
        case "paper":return(computerChoice=="rock")?0:1
        case "scissors":return(computerChoice=="paper")?0:1
}
}
function playGame(){
    let i=0
    let humanScore=0
    let computerScore=0
    while(i<5){
    let winner=playRound(getComputerChoice(),getHumanChoice())
    if(winner==0) {
        console.log("Player won!")
        humanScore++
    }
    else if(winner==1){
        console.log("Computer won!")
        computerScore++
    }
    i++
}
    return humanScore-computerScore
}

if(playGame()<0) console.log("Player won the game!")
else console.log("Computer won the game!")
