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