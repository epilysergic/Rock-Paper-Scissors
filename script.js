
// function to randomly pick a string from the array gameArray for the computer.
function computerPlay(){
    let gameArray= ['Rock', 'Paper', 'Scissors'];
    var randItem = gameArray[Math.floor(Math.random()* gameArray.length)];
    console.log (randItem);
    return randItem
}
// prompts player to select between Rock Paper Scissors.
function playerSelector() {
    const playerAlert = alert ('Player choose between the three options.\n Rock, Paper, Scissors')
    let playerPrompt = prompt ('Player chooose\n Rock, Paper, Scissors\n if no input then willl leave program')
    return playerPrompt
}
// used playerSelector() function and computerPlay() to create two variables to be used in gamePlay function
let playerSelection = playerSelector().toUpperCase()
let computerSelection = computerPlay().toUpperCase()

// Allows to compare the results of player and computer and increase the score of each
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == computerSelection):
            console.log('Play again no winner.\nComputer chose ' + computerSelection.toLowerCase() + ' player chose ' + playerSelection.toLowerCase()+' no winners this round.');
           // console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer + '.');
            break;
        case (playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER'|| playerSelection == 'ROCK' && computerSelection == 'SCISSORS'):
            //scorePlayer += 1;
            console.log('player wins!\nPlayer chose ' + playerSelection.toLowerCase() +  ' beating computers choice ' + computerSelection.toLowerCase()+' for this round.');
           // console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer+'.');
            break;
        case (computerSelection == 'PAPER' && playerSelection == 'ROCK' || computerSelection == 'SCISSORS' && playerSelection == 'PAPER'|| computerSelection== 'ROCK' && playerSelection == 'SCISSORS'):
            //scoreComputer += 1;
            console.log('Computer wins!\nPlayer chose ' + playerSelection.toLowerCase() + ' losing to computers choice ' + computerSelection.toLowerCase()+' for this round.');
            //console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer + '.');
            break;
        default:
            const wrongInput = alert('Wrong answer. Try Again.')
   // return (scorePlayer, scoreComputer)
    }      
}
//

function game(playRound) {
     let scorePlayer = 0;
     let scoreComputer = 0; 
    for (let round = 0; round < 5; round++) {
        
       /* switch (true) {
            case (playerSelection == computerSelection):
                console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer + '.');
                break;
            case (playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER'|| playerSelection == 'ROCK' && computerSelection == 'SCISSORS'):
                scorePlayer += 1;
                console.log('player wins!\nPlayer chose ' + playerSelection.toLowerCase() +  ' beating computers choice ' + computerSelection.toLowerCase()+' for this round.');
                console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer+'.');
                break;
            case (computerSelection == 'PAPER' && playerSelection == 'ROCK' || computerSelection == 'SCISSORS' && playerSelection == 'PAPER'|| computerSelection== 'ROCK' && playerSelection == 'SCISSORS'):
                scoreComputer += 1;
                console.log('Computer wins!\nPlayer chose ' + playerSelection.toLowerCase() + ' losing to computers choice ' + computerSelection.toLowerCase()+' for this round.');
                console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer + '.');
                break;
            default:
                console.log('Computer score: ' + scoreComputer + '\nPlayer score: ' + scorePlayer + '.');
        if (scorePlayer > 3 && scoreComputer <2) {
            console.log('Player has won ' + scorePlayer + 'points earned\nComputer has lost ' + scoreComputer + ' earned points.');     
        }
            
        else if (scoreComputer> 3 && scorePlayer <2){
            console.log('Player has lost ' + scorePlayer + 'points earned\nComputer has won ' + scoreComputer + ' earned points.');    
        }
    }
*/
    }

}
game(playRound)
