


const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase()
    if (userInput === "rock" || userInput ==="paper" || userInput === "scissors") {
    return userInput;
    } else {
        console.log("Please enter: rock, paper, or scissors");
    }
}
 console.log(getUserChoice('Paper'))

 const getComputerChoice = () => {
     randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
    return "paper"
 }  else if (randomNumber === 1) {
    return "rock"
 }  else if (randomNumber ===2)  {
     return "scissors"
 }  else {
     console.log("I will have to think about this. This question will take some time, 7... million.... years....")
 }
 }
console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
       return 'Game Tied, go again!';
    }
    if(userChoice === "rock"){
        if(computerChoice === "paper") {
            return "No one understands how paper beats a rock, PC WINS!"
        } else {
            return 'Running with scissors is both dangerous and futile. ROCK SMASH! You WIN!!!';
        }
    } else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return "You got cut so bad, you wish you nevah been cut! PC WINS!"
            } else { 
                return "Covering up that rock again? You WIN...for now."
            }
    } else if (userChoice === "scissors") {
         if (computerChoice === "rock") {
         return "Stop getting so smashed!!! Loser!"
         } else { 
             return "Yay! you a weeeeener"
         }
        }
    }

console.log (determineWinner("rock", "scissors"))
   
    
