const choices = ["rock", "paper", "scissors"]

const rockButton = document.querySelector(".rock")
rockButton.addEventListener('click', handleRock)

const paperButton = document.querySelector(".paper")
paperButton.addEventListener('click', handlePaper)

const scissorsButton = document.querySelector(".scissors")
scissorsButton.addEventListener('click', handleScissors)

const allButtons = document.querySelectorAll('button')

const results = document.querySelector('.results')


function handleRock() {
    playGame("rock")
}

function handlePaper() {
    playGame("paper")
}

function handleScissors() {
    playGame("scissors")
}

function createParagraph(text) {
    const p = document.createElement('p')
    p.textContent = text
    results.appendChild(p)
}

function randomPick() {
    let i = Math.floor(Math.random() * choices.length)
    const selection = choices[i]
    return selection
}

let playerPoints = 0
let npcPoints = 0

function playGame(playerElection) {
    npcElection = randomPick()
    if (playerPoints < 5 && npcPoints < 5) {
        if (
            (playerElection === "rock" && npcElection === "scissors") || 
            (playerElection === "paper" && npcElection === "rock") || 
            (playerElection === "scissors" && npcElection === "paper"))
        {
            playerPoints += 1
            createParagraph("Victory")
            console.log(playerElection, npcElection)
        }
        else if (
            (playerElection === "rock" && npcElection === "paper") || 
            (playerElection === "paper" && npcElection === "scissors") || 
            (playerElection === "scissors" && npcElection === "rock"))
        {
            npcPoints += 1
            createParagraph("Defeat")
            console.log(playerElection, npcElection)
        }
        else if (playerElection === npcElection) {
            createParagraph('Draw'); 
            console.log(playerElection, npcElection)
        }
    
        createParagraph(`YOU: ${playerPoints} /// NPC: ${npcPoints}`);
    
        if (playerPoints === 5) {
            createParagraph('Congratulations, you won bro'); 
            setTimeout(removeEventListeners, 1)
        }
        else if (playerPoints === 5) {
            createParagraph('Bruh, you lose...'); 
            setTimeout(removeEventListeners, 1)
        }
    }   
}

function removeEventListeners() {
    allButtons.forEach(function(button) {
    button.removeEventListener('click', handleRock)
    button.removeEventListener('click', handlePaper)
    button.removeEventListener('click', handleScissors)
    })
    }