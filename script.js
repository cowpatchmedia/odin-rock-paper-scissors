

function getComputerChoice () {
    let randNum = Math.random();
    let result = ""
    
    if (randNum <= .33) {
        result = "rock"
    } else if (randNum <= .67) {
        result = "paper"
    } else {
        result = "scissor"
    }
    return result;
};

getComputerChoice();

console.log(getComputerChoice());
