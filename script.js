//attributes
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

}// end of computerPlay()

function playRound(computerSelection, playerSelection) {


    //player wins statements
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerWin++;
        winner = 'player'
        return winner
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWin++;
        winner = 'player'
        return winner

    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWin++;
        winner = 'player'
        return winner
    }

    //computer wins statements
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWin++;
        winner = 'computer'
        return winner
    }


    if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'computer'
        computerWin++;
        return winner

    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWin++;
        winner = 'computer'
        return winner


    }

    // tie between player and computer
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        ties++;
        winner = 'tie game'
        return winner

    }

    if (playerSelection == 'paper' && computerSelection == 'paper') {
        ties++;
        winner = 'tie game'
        return winner

    }

    if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        ties++;
        winner = 'tie game'
        return winner


    }


}// end of playRound()
function game() {
    //play 5 rounds of the game


    //loop iterates through round 1 to 5
    for (i = 1; i <= 5; i++) {
        //prints round #
        console.log(`round ${i}`);
        //prompts user and changes input to lowercase
        let userInput = prompt("enter rock, paper or scissors");
        userInput = userInput.toLowerCase();

        playRound(computerPlay(), userInput);
        //prints user and computers choice
        console.log(`user chose: ${userInput}, computer chose: ${computerSelection}`)
        // prints winner
        console.log(`${winner} won round ${i}`)

    }//end of for loop

    //final message
    console.log('<--- FINAL RESULTS --->')
    if (playerWin > computerWin)
        console.log(`congrats player won! \nplayer won: ${playerWin} \ncomputer won: ${computerWin} \nThere were ${ties} ties`)

    else if (computerWin > playerWin)
        console.log(`computer won! \nplayer won: ${playerWin} \ncomputer won: ${computerWin} \nThere were ${ties} ties`)


    else if (computerWin == playerWin)
        console.log(`computer and player tied! \nplayer won: ${playerWin} \ncomputer won: ${computerWin} \nThere were ${ties} ties`)

}// end of game()



game();
