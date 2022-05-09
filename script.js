// global score for both computer and player set to zero 
computerScore = 0
playerScore = 0
// function to choose between rock paper scissors for computer
function computerPlay(){                                            
    const computerArray = ['rock','paper','scissors']
    let computerSelection = computerArray[Math.floor((Math.random() * computerArray.length))] 
    // console.log('computerChoice '+  computerChoice)
    return computerSelection
}

//function to play single round of Rock Paper Scissors
function gameRound( playerSelection , computerSelection) {
    playerSelect = playerSelection.toUpperCase()
    computerSelect = computerSelection.toUpperCase()
    switch (true){
        // outcome when both players choose same option
        case (playerSelect == computerSelect):
            console.log('computer score: ' + computerScore)
            console.log('player score: ' + playerScore)
            console.log('computer choice: ' + computerSelection)
            console.log ('player choice: ' + playerSelect)
            console.log('TIE!!') 
            break;
        // outcome when player wins
        case (playerSelect == 'ROCK' && computerSelect == 'SCISSORS'):
        case (playerSelect == 'SCISSORS' && computerSelect == 'PAPER'):
        case (playerSelect == 'PAPER' && computerSelect == 'ROCK'):
            playerScore += 1 
            console.log('computer score: ' + computerScore)
            console.log('player score: ' + playerScore)
            console.log('computer choice: ' + computerSelection)
            console.log ('player choice: ' + playerSelect)
            console.log ('Player wins !! ' + playerSelect + ' Beats ' + computerSelect)
            return playerScore
            break;
        //outcome when computer wins 
        case (playerSelect == 'ROCK' && computerSelect == 'PAPER'):
        case (playerSelect == 'PAPER' && computerSelect == 'SCISSORS'):
        case (playerSelect == 'SCISSORS' && computerSelect == 'ROCK'):
            computerScore += 1
            console.log('computer score: ' + computerScore)
            console.log('player score: ' + playerScore)
            console.log('computer choice: ' + computerSelection)
            console.log ('player choice: ' + playerSelect)
            console.log ('Computer wins!! ' + computerSelect + ' Beats ' + playerSelect)
            return computerScore
            break;
        //outcome when player writes wrong input
        default:
            console.log('please choose correct output retry')
            break;
}}
// Once a point of 5 reached from either side it will compare and announce who is the winner  
function gameWinner(round){
    // compare points once one reaches a point of 5 
    if (computerScore == 5 || playerScore == 5 ) {
        // if computer wins output
        if (computerScore > playerScore) {
            console.log ('Computer is the winner: ' + computerScore +' versus players small score of ' + playerScore)
        }
        // if player wins output
        else if ( playerScore > computerScore){
            console.log ('Player is the winner: ' + playerScore +' versus the bots small score of ' + computerScore)
        }
        // will never happen just for fun
        else if ( playerScore == computerScore){
            console.log ('NO WINNER!! THIS MATCH WAS A SCAM!!')
        }
    }
}
// 
function gameTotal(){
 
    while ((playerScore <= 5) || (computerScore <= 5)) {
        // variable for player to choose option. 
        let playerChoice = prompt('What will player do ?? \n Either rock, paper or scissors (case insesitive)')
        // gameWinner calls to each round and compares winner at the end
        gameWinner(gameRound(playerChoice,computerPlay()))
        // if score reaches 5 on either side the prompt will be closed
        if ((playerScore == 5 || computerScore == 5 )){
            console.log('Thanks for playing the game') 
            break;  
        }
  
}}
gameTotal()

