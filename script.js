function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
    if (random === 0){
      return "rock"}
    else if (random === 1){
      return "paper"}
    else if (random === 2){
      return "scissors"} 
    else {
        console.log("Error")
    }   
}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors?");
    return choice.toLowerCase()
}

function playGame(){
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"){
                console.log("You Win, " + humanChoice + " beats " + computerChoice);
                humanScore ++;
            }
        else if (humanChoice === "paper" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "rock" && computerChoice === "paper"){
                console.log("Computer Win, " + computerChoice + " beats " + humanChoice)
                computerScore ++
            }
        else{
            console.log("It's a Tie")
        }
      }
      
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    
    let computerScore = 0
    let humanScore = 0
    
    firstRound = playRound(humanSelection1, computerSelection1)
    console.log("Computer Score: " + computerScore)
    console.log("Your Score: " + humanScore)
    
    secondRound = playRound(humanSelection2, computerSelection2)
    console.log("Computer Score: " + computerScore)
    console.log("Your Score: " + humanScore)
    
    thirdRound = playRound(humanSelection3, computerSelection3)
    console.log("Computer Score: " + computerScore)
    console.log("Your Score: " + humanScore)
    
    fourthRound = playRound(humanSelection4, computerSelection4)
    console.log("Computer Score: " + computerScore)
    console.log("Your Score: " + humanScore)
    
    fifthRound = playRound(humanSelection5, computerSelection5)
    console.log("Computer Score: " + computerScore)
    console.log("Your Score: " + humanScore)

    if (humanScore > computerScore){
        console.log("You Win The Game!")
    }
    else if (humanScore < computerScore){
        console.log("You Lose The Game...")
    }
    else {
        console.log("It's a Tie!")
    }
}

playGame()