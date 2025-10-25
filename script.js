
let humanScore = 0;
let compScore = 0;

function getCompChoice () {
    let randNum = Math.random();
    let compResult = "";
    
    if (randNum <= .33) {
        compResult = "Rock"
    } else if (randNum <= .67) {
        compResult = "Paper"
    } else {
        compResult = "Scissors"
    }
    return compResult;
};

function getHumanChoice () {
    let humanResult = prompt("Enter Rock, Paper, or Scissors");
    return humanResult;
};

function playRound(compChoice,humanChoice){
    if (humanChoice === compChoice){
        console.log("It's a tie.");
    }
    else if (
        (humanChoice === "Scissors" && compChoice === "Paper") || //double line is "OR"
        (humanChoice === "Rock" && compChoice === "Scissor") ||
        (humanChoice === "Paper" && compChoice === "Scissor")
        ){
            console.log(`${humanChoice} beats ${compChoice}! You win this round.`);// ${} prints variable
            humanScore++;
        }
    else {
        console.log(`${compChoice} beats ${humanChoice}! You lose this round.`);// make sure to use backtick ` not '
        compScore++;    
    }
};

function playGame(){
    playRound(compSelection, humanSelection);
};

let humanSelection = getHumanChoice();
let compSelection = getCompChoice();

playGame();
console.log("Human Score:", humanScore);
console.log("Computer Score:", compScore);