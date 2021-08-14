


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
