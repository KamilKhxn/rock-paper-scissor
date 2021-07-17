let playerWin = 0;
let computerWin = 0;
let ties = 0;
let computerSelection = 'daddy';
let winner = 'n/a';

//randomizes computer's options between rock, paper, scissors
function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
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
        winner = 'player'
        return winner
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        // console.log('you win, paper beats rock!');
        playerWin++;
        winner = 'player'
        return winner

    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        //   console.log('you win, scissors beats paper!');
        playerWin++;
        winner = 'player'
        return winner
    }


    //winner = 'player'
    //computer wins 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        //  console.log('you lost, rock beat scissors!');
        computerWin++;
        winner = 'computer'
        return winner
    }


    if (playerSelection == 'rock' && computerSelection == 'paper') {
        //  console.log('you lost, paper beat Rock!');
        winner = 'computer'
        computerWin++;
        return winner

    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        //   console.log('you lost, Scissor beat Paper!');
        computerWin++;
        winner = 'computer'
        return winner


    }


    //winner = 'computer'

    // tie between player and computer
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        //console.log('tie game');
        ties++;
        winner = 'tie game'
        return winner

    }

    if (playerSelection == 'paper' && computerSelection == 'paper') {
        // console.log('tie game');
        ties++;
        winner = 'tie game'
        return winner

    }

    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        // console.log('tie game');
        ties++;
        winner = 'tie game'
        return winner


    }

    //winner = 'tie game'
    //return winner;


}
function game() {
    //play 5 rounds of the game
    //let winner = 'n/a';
    //let loser = 'n/a';

    //for loop
    for (i = 1; i <= 5; i++) {
        //prints round
        console.log(`round ${i}`);

        let userInput = prompt("enter rock, paper or scissors");
        userInput = userInput.toLowerCase();

        playRound(computerPlay(), userInput);
        //prints user and computers choice
        console.log(`user chose: ${userInput}, computer chose: ${computerSelection}`)
        // prints winner
        console.log(`${winner} won round ${i}`)

        /* this system is better for telling the final win count
        if (computerWin > playerWin) {


            winner = 'computer';
            loser = 'player';

           console.log(`the computer won this round, sorry!`);
        }
        else if (playerWin > computerWin) {
            winner = 'player';
            loser = 'computer';
          console.log('player won this round, congrats!');
        }
        else if (playerWin == computerWin) {
           console.log('player and computer tied this round!');

        }*/
    }
    //final message
    if (playerWin > computerWin)
        console.log(`congrats player won! player won: ${playerWin}, computer won: ${computerWin}. There were ${ties} ties`)

    else if (computerWin > playerWin)
        console.log(`computer won! player won: ${playerWin}, computer won: ${computerWin}. There were ${ties} ties`)


    else if (computerWin == playerWin)
        console.log(`computer and player tied! player won: ${playerWin}, computer won: ${computerWin}. There were ${ties} ties`)



    /*console.log(`the winner is ${winner}, the loser is ${loser}, there were ${ties} ties`);
    if (winner == 'computer')
        console.log(`the computer won with ${computerWin} wins!`)
         else if (winner == 'player')
         console.log(`the player won with ${playerWin} wins!`)
         else 
         console.log(`there is no winner, you both tied ${ties} times!`)


         */

}



game();
