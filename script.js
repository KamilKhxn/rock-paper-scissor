let userScore = 0;
let computerScore = 0;
//dom variables (_span, _div) 
const userScore_Span = document.getElementById('user-score');
const computerScore_Span = document.getElementById('computer-score');
//const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.querySelector('.choice')
//document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function main(){
    rock_div.addEventListener('click', () => game('r'));    
    paper_div.addEventListener('click', () => game('p'));   
    scissors_div.addEventListener('click', () =>game('s'));
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case 'sp':
            win(userChoice, computerChoice);
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;

         case 'rr':
         case 'pp':
         case 'ss':
             draw(userChoice, computerChoice);
             break;
    }
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}
function win(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);  
    userScore++;
    userScore_Span.innerHTML = userScore;
    //computerScore_Span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`; 
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);  
    computerScore++;
    //userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`; 
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>userChoice_div.classList.remove('red-glow'), 500);
 }
function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallCompWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);  
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`; 
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}

main();
