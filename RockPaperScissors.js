/*
FUNCTION getComputerChoice():
    RANDOMIZE choice among "Rock", "Paper" and "Scissors"
    RETURN chosen string
*/
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
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
    return prompt("Type your choice [Rock, Paper or Scissors]:");
}
// console.log(getHumanChoice());