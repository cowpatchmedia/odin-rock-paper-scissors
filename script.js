
let humanScore = 0;
let computerScore = 0;



function getComputerChoice () {
    let randNum = Math.random();
    let compResult = "";
    
    if (randNum <= .33) {
        compResult = "rock"
    } else if (randNum <= .67) {
        compResult = "paper"
    } else {
        compResult = "scissor"
    }
    return compResult;
};

function getHumanChoice () {
    let humanResult = prompt("Enter Rock, Paper, or Scissors");
    return humanResult;
};

console.log(getComputerChoice());
console.log(getHumanChoice());