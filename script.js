let playerWin = 0;
let computerWin = 0;
let ties = 0;
//randomizes computer's options between rock, paper, scissors
function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    let computerSelection = 'daddy';
    if (rand == 1) {
        computerSelection = 'rock';
    }
    else if (rand == 2) {
        computerSelection = 'paper';
    }
    else if (rand == 3) {
        computerSelection = 'scissors';
    }
    else {
        computerSelection = 'invalid number';
    }
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {
    //player wins if statement
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        //console.log('you win, rock beats scissors!');
        playerWin++;

        if (playerSelection == 'paper' && computerSelection == 'rock') {
           // console.log('you win, paper beats rock!');
            playerWin++;

            if (playerSelection == 'scissors' && computerSelection == 'paper') {
             //   console.log('you win, scissors beats paper!');
                playerWin++;
            }
        }

    }
    //computer wins 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
      //  console.log('you lost, rock beat scissors!');
        computerWin++;

        if (playerSelection == 'rock' && computerSelection == 'paper') {
          //  console.log('you lost, paper beat Rock!');
            computerWin++;

            if (playerSelection == 'paper' && computerSelection == 'scissors') {
             //   console.log('you lost, Scissor beat Paper!');
                computerWin++;

            }


        }

    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        //console.log('tie game');
        ties++;

        if (playerSelection == 'paper' && computerSelection == 'paper') {
           // console.log('tie game');
           ties++;

            if (playerSelection == 'scissors' && computerSelection == 'scissors') {
               // console.log('tie game');
               ties++;
            }

        }
    }

}
function game() {
    for (i = 0; i <= 5; i++) {
        playRound(computerPlay(), 'rock');


        let winner = 'n/a';
        let loser = 'n/a';
        if(computerWin > playerWin){
            winner = 'computer won'
            loser = 'player lost'
        }
        else if (playerWin > computerWin){
            winner = 'player won! congrats'
            loser = 'computer lost'
        }
        else if (playerWin == computerWin){

        }
        console.log(`the winner is ${winner}, the loser is ${loser}, there were ${ties} ties`)


    }
}



game();
