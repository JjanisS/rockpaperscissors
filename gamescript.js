let win = "You won! Frank played "
let loss = "You lost! Frank played "
let tie = "No winners this time"

let myscore = 0
let frankscore = 0

let btnrock = document.querySelector("#rock")
let btnpaper = document.querySelector("#paper")
let btnscissors = document.querySelector("#scissors")

btnrock.addEventListener("click", function() {
    myselection = "rock";
    game()
});
btnpaper.addEventListener("click", function() {
    myselection = "paper";
    game()
});
btnscissors.addEventListener("click", function() {
    myselection = "scissors";
    game()
});