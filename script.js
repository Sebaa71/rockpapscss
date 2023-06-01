const choices = ["rock", "paper", "scissors"]

function randomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const answer = choices[randomIndex]
    return answer
}

function playGame() {
    let userPoints = 0
    let cpuPoints = 0
    while (cpuPoints < 5 && userPoints < 5) {
        const user = prompt("Choose between rock, paper scissors", "");
        if (typeof user === "string" ) user.toLowerCase

        const cpu = randomChoice()

        //Here are the rules
        if (user === "rock" && cpu === "scissors") {
            userPoints += 1
            alert(`Nice, you won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === "rock" && cpu === "paper") {
            cpuPoints += 1
            alert(`Oops, your opponent won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === "paper" && cpu === "rock") {
            userPoints += 1
            alert(`Nice, you won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === "paper" && cpu === "scissors") {
            cpuPoints += 1
            alert(`Oops, your opponent won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === "scissors" && cpu === "paper") {
            userPoints += 1
            alert(`Nice, you won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === "scissors" && cpu === "rock") {
            cpuPoints += 1
            alert(`Oops, your opponent won 1 point, opponent pick was ${cpu}`)
        }
        else if (user === null) {
                cpuPoints += 1
                alert('You did not choose anything... a point was granted to your opponent')
        }
        else if (user === cpu) {
            alert(`It was a tie between ${user}s, let's do it again`)
        }
        else alert(`"${user}" is not a valid choice, let's do it again`)
    }

    if (userPoints > cpuPoints) alert(`Congrats, you won ${userPoints} to ${cpuPoints}`)
    else alert(`Oops, you lose ${cpuPoints} to ${userPoints}`)

}

const button = document.querySelector(".pene");
button.addEventListener("click", playGame);
