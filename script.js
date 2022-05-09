// IGNORE FIRST PART  FROM LINE 1 to LINE 49
/* 
// score of player vs computer variables
let scorePlayer = 0
let scoreComputer = 0
let roundOutcome = ''
// function to output a random choice between the three outcomes
function computerPlay() {
    let computerArray= ['Rock', 'Paper', 'Scissors']
    let computerChoice = computerArray[Math.floor(Math.random()* computerArray.length)]
    computerChoice = computerChoice.toUpperCase()
    console.log(computerChoice)
    return computerChoice
}
let computerPick = computerPlay().toUpperCase()
// prompts player to select between Rock Paper Scissors.

// round function to compare computer to player outputs and increase respective points
function playRound(computerSelection) {
    for (let round = 1 ; round< 5; round++) {
        console.log(round)
        const playerAlert = alert ('Player choose between the three options.\n Rock, Paper, Scissors')
        let playerSelection = prompt ('Player chooose\n Rock, Paper, Scissors\n if no input then willl leave program')
        playerSelection = playerSelection.toUpperCase()
        console.log( 'player'. playerSelection)
        switch (true) {
            case(playerSelection == computerSelection):
                roundOutcome = 'tie'
                break;
            case (playerSelection == 'PAPER' && computerSelection == 'ROCK' || 
            playerSelection == 'SCISSORS' && computerSelection == 'PAPER'||
            playerSelection == 'ROCK' && computerSelection == 'SCISSORS'):
                roundOutcome = 'player wins'
                scorePlayer += 1
                break;
            case (computerSelection == 'PAPER' && playerSelection == 'ROCK' || 
                computerSelection == 'SCISSORS' && playerSelection == 'PAPER'|| 
                computerSelection== 'ROCK' && playerSelection == 'SCISSORS'):
                roundOutcome = 'computer wins'
                scoreComputer += 1
                break;
            default:
                alert ('Wrong input') 
        }}}

computerPlay()
playRound(computerPick)
*/

// global score for both computer and player set to zero 
computerScore = 0
playerScore = 0
// function to chose between rock paper scissors for computer
function computerPlay(){                                            
    const computerArray = ['rock','paper','scissors']
    let computerChoice = computerArray[Math.floor((Math.random() * computerArray.length))]
    console.log(computerChoice)
    return computerChoice
}
// variable for player to choose option. 
let playerChoice = prompt('What will player do ?? \n Either rock, paper or scissors (case insesitive)')
//function to play single round of Rock Paper Scissors
function gameRound( playerSelection , computerSelection) {
    playerSelect = playerSelection.toUpperCase()
    computerSelect = computerSelection.toUpperCase()
    switch (true){
        // outcome when both players choose same option
        case (playerSelect == computerSelect):
            console.log('TIE!!') 
            break;
        // outcome when player wins
        case (playerSelect == 'ROCK' && computerSelect == 'SCISSORS'):
        case (playerSelect == 'SCISSORS' && computerSelect == 'PAPER'):
        case (playerSelect == 'PAPER' && computerSelect == 'ROCK'):
            playerScore += 1 
            console.log(playerScore)
            console.log ('Player wins !! ' + playerSelect + ' Beats ' + computerSelect)
            return playerScore
            break;
        //outcome when computer wins 
        case (playerSelect == 'ROCK' && computerSelect == 'PAPER'):
        case (playerSelect == 'PAPER' && computerSelect == 'SCISSORS'):
        case (playerSelect == 'SCISSORS' && computerSelect == 'ROCK'):
            computerScore += 1
            console.log(computerScore)
            console.log ('Computer wins!! ' + computerSelect + ' Beats ' + playerSelect)
            return computerScore
            break;
        //outcome when player chooses wrong option
        default:
            console.log('please choose correct output retry')
            break;
}}
// game out of five where it stops at either player/bot reaching score of 5 and compares to determine winner 
function game(round){
    if (computerScore == 5 || playerScore == 5 ) {
        if (computerScore > playerScore) {
            console.log ('Computer is the winner: ' + computerScore +' versus players petite score of ' + playerScore)
        }
        else if ( playerScore > computerScore){
            console.log ('Player is the winner: ' + playerScore +' versus the bots petite score of ' + computerScore)
        }
        else if ( playerScore == computerScore){
            console.log ('NO WINNER!! THIS MATCH WAS A SCAM!!')
        }
    }
}
game(gameRound(playerChoice, computerPlay()))