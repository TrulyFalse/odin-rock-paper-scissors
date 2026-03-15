/*
FUNCTION getComputerChoice():
    RANDOMIZE choice among "rock", "paper" and "scissors"
    RETURN chosen string
*/
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice());


/*
FUNCTION getHumanChoice():
    DISPLAY prompt for user's choice
    READ user choice
    RETURN user choice string
*/
function getHumanChoice(){
    return prompt("Type your choice [rock, paper or scissors]:");
}
// console.log(getHumanChoice());

let humanScore = 0, computerScore = 0;

/*
FUNCTION playRound(human choice, computer choice):
    Make human choice case-insensitive

    DETERMINE winner or draw based on game rules: 
        rock beats scissors, 
        paper beats rock, 
        scissors beat paper,
        same choices draw
    
    IF human wins THEN
        INCREMENT user score
        DISPLAY human wins message
    ELSE IF computer wins THEN
        INCREMENT computer score
        DISPLAY computer wins message
    ELSE
        DISPLAY "Draw"
    ENDIF
*/
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    switch(humanChoice){
        case computerChoice:
            console.log(`Game draw! Both players chose ${humanChoice}.`)
            break;
        case "rock":
            if(computerChoice === "paper"){
                console.log("You lose! Paper beats rock.");
                computerScore++;
            } else{
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
            break;
        case "paper":
            if(computerChoice === "scissors"){
                console.log("You lose! Scissors beat paper.");
                computerScore++;
            } else{
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            break;
        case "scissors":
            if(computerChoice === "rock"){
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            } else{
                console.log("You win! Scissors beat paper.");
                humanScore++;
            }
            break;
        default:
            console.log("Invalid choice! Try again.");
    }
}
// playRound(getHumanChoice(), getComputerChoice());


/*
FUNCTION playGame():
    SET scores and round to 0
    WHILE round is less than 5:
        CALL playRound with human choice and computer choice
        INCREMENT round
    ENDWHILE

    IF human score is greater than computer score THEN
        DISPLAY that human wins the game
    ELSE IF computer score is greater than human score THEN
        DISPLAY that computer wins the game
    ELSE
        DISPLAY that both players have drawn the game
*/
function playGame(){
    computerScore = humanScore = 0;
    let round = 0;

    while(round < 5){
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }

    if(humanScore > computerScore){
        console.log(
            `You won the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    } else if(humanScore < computerScore){
        console.log(
            `You lost the game.\nGood luck next time!\nComputer score: ${computerScore}\nYour score: ${humanScore}`)
    } else {
        console.log(
            `You and computer draw the game!\nYour score: ${humanScore}\nComputer score: ${computerScore}`)
    }
}

playGame();