function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

function playRound(computerChoice, humanChoice){
    let computerScore = 0;
    let humanScore = 0;
    
    switch(humanChoice){
        case 'rock':
            if (computerChoice === 'paper'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            } else if (computerChoice === 'scissors'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else{
                console.log(`It's a draw! ${computerChoice} is equal to ${humanChoice}`)
            }
        
            break
        
        case 'paper':
            if (computerChoice === 'scissors'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            } else if (computerChoice === 'rock'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else{
                console.log(`It's a draw! ${computerChoice} is equal to ${humanChoice}`)
            }
            
            break;
        
        case 'scissors':
            if (computerChoice === 'rock'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore++;
            } else if (computerChoice === 'paper'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore++;
            } else{
                console.log(`It's a draw! ${computerChoice} is equal to ${humanChoice}`)
            }

        break
    }
}
    


let rock = document.createElement('button')
let paper = document.createElement('button')
let scissors = document.createElement('button')

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';

rock.setAttribute('style', 'background-color: grey')
paper.setAttribute('style', 'background-color: beige')
scissors.setAttribute('style', 'background-color: red')


let div = document.createElement('div');
let body = document.querySelector('body')

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors)

body.appendChild(div)

rock.addEventListener('click', () => {
    playRound(getComputerChoice(), 'rock')
})
paper.addEventListener('click', () => {
    playRound(getComputerChoice(), 'paper')
})
scissors.addEventListener('click', () => {
    playRound(getComputerChoice(), 'scissors')
})