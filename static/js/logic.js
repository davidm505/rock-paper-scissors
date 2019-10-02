
let getRndInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let playerPlay = () => {
    
    choice = prompt("Enter Rock, Paper or Scissors!");

    return choice.toLowerCase();
    
}

function computerPlay() {
    
    let choices = ['rock', 'paper', 'scissors'];
    
    let number = getRndInt(0,3);

    return choices[number];
}

function playRound(player, computer) {

    if (player == 'rock') {
        if (computer == 'rock') return 'Rock & Rock: Tie!'
        else if (computer == 'paper') return 'Rock & Paper: Computer wins!'
        else return 'Rock & Scissors: Player wins!'
    } else if (player == 'paper') {
        if (computer == 'rock') return 'Paper & Rock: Player wins!'
        else if (computer == 'paper') return 'Paper & Paper: Tie!'
        else return 'Ppaer & Scissors: Computer wins!'
    } else {
        if (computer == 'rock') return 'Scissors & Rock: Computer wins!'
        else if (computer == 'paper') return 'Scissors & Paper: Player wins!'
        else return 'Scissors & Scissors: Tie!'
    }
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();


function runGame() {
    
    console.log(playRound(playerSelection, computerSelection));
}

runGame()