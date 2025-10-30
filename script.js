// revisit to improve graphics and add button to reset after game.

let humanScore = 0; //initializes score variables
let compScore = 0;
let roundsPlayed = 0; //initilize rounds and game
const maxRounds = 5;

// initialize the JS selectors for HTML elements
const messagesContainer = document.querySelector("#gameMessages");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

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

// changed the click functions to be one combined function to help control game flow. 
function handleClick(humanChoice){
    if (roundsPlayed >= maxRounds) return; //ends function if game is over. 

    const compChoice = getCompChoice(); //run compChoice function
    playRound(compChoice,humanChoice); //run playRound function

    roundsPlayed++; //increment rounds played after click

    if (roundsPlayed === maxRounds){ //this "if" check will run before previous if when rounds = 5 due to incrementation.
        rockButton.disabled=true; //shuts game down when done
        paperButton.disabled=true; 
        scissorsButton.disabled=true;

        const finalMessage = document.createElement("div"); //game over message
        finalMessage.textContent = `Game Over! Final Score: Human: ${humanScore} | Computer: ${compScore}`;
        messagesContainer.appendChild(finalMessage)
    }
};

// add event listeners. buttons have already been selected with JS in the earlier code, the handleClick.
// functions runs, then the event listener is assigned to tell the button press which function to run. 
rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"))
scissorsButton.addEventListener("click", () => handleClick("scissors"))


function playRound(compChoice,humanChoice){ //explicitly check for human win conditions, if not then computer wins round
    let message = ""; //initialize messages

    const gameInstructions = document.querySelector("#gameInstructions"); 
    if(gameInstructions) gameInstructions.remove(); // removes this div from the DOM after first round

    if (humanChoice === compChoice){
        message = `It's a tie.<br><br>`; // tie don't increment scores
    }
    else if (
        (humanChoice === "scissors" && compChoice === "paper") || //double line is "OR"
        (humanChoice === "rock" && compChoice === "scissors") || // and is using &&
        (humanChoice === "paper" && compChoice === "rock") // use === not = which changes value. 
        ){
            message = `${humanChoice} beats ${compChoice}! You win this round.<br><br>`;// ${} prints variable
            humanScore++;//increments human score 
        }
    else {
        message = `${compChoice} beats ${humanChoice}! You lose this round.<br><br>`;// make sure to use backtick ` not '
        compScore++;    
    }
    

//creates messages after button click for winner and round score. 
const scoreDiv = document.createElement("div");
scoreDiv.innerHTML = `Human Score: ${humanScore} | Computer Score ${compScore}`;
messagesContainer.appendChild(scoreDiv);

const messageDiv = document.createElement("div");
messageDiv.innerHTML = message;
messagesContainer.appendChild(messageDiv);
};