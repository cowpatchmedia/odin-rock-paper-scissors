let humanScore = 0; //initializes score variables
let compScore = 0;

function getCompChoice () { //this randomly generates a computer choice based on random and percentages of 1. 
        let randNum = Math.random();
        let compResult = "";

        if (randNum <= .33) {
            compResult = "rock"
        } else if (randNum <= .67) {
            compResult = "paper"
        } else {
            compResult = "scissors"
        }
        return compResult; //return result so that function can be called in other functions
    };

function getHumanChoice () { //let human enter in answer
    let humanResult = prompt("Enter Rock, Paper, or Scissors");
    return humanResult.toLowerCase(); // return result so it can be referenced in other functions
};

function playRound(compChoice,humanChoice){ //explicitly check for human win conditions, if not then computer wins round
    if (humanChoice === compChoice){
        console.log("It's a tie."); // tie don't increment scores
    }
    else if (
        (humanChoice === "scissors" && compChoice === "paper") || //double line is "OR"
        (humanChoice === "rock" && compChoice === "scissors") || // and is using &&
        (humanChoice === "paper" && compChoice === "rock") // use === not = which changes value. 
        ){
            console.log(`${humanChoice} beats ${compChoice}! You win this round.`);// ${} prints variable
            humanScore++;//increments human score 
        }
    else {
        console.log(`${compChoice} beats ${humanChoice}! You lose this round.`);// make sure to use backtick ` not '
        compScore++;    
    }
    console.log("Human Score:", humanScore); //print scores after round is done and win message is displayed
    console.log("Computer Score:", compScore);
};

function playGame(){

    playRound(getCompChoice(), getHumanChoice()); // doing 5 rounds like this since I don't know loops yet. 
    playRound(getCompChoice(), getHumanChoice());
    playRound(getCompChoice(), getHumanChoice());
    playRound(getCompChoice(), getHumanChoice());
    playRound(getCompChoice(), getHumanChoice());

    console.log("Final Score: Human", humanScore, "| ", "Computer:", compScore) //prints final score at end of game.
};

playGame(); // calls playRound 5x - put at end of code. I think this helps initialize everything else before it runs. 
