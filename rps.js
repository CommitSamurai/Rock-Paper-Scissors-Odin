function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, humanChoice){
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let para3 = document.createElement('p')

    para1.setAttribute('style', 'background-color: yellow;')
    para2.setAttribute('style', 'background-color: green;')
    para3.setAttribute('style', 'background-color: blue; color: white;')

    switch(humanChoice){
        case 'rock':
            if (computerChoice === 'paper'){
                para1.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                div.appendChild(para1);
                computerScore++;
            } else if (computerChoice === 'scissors'){
                para1.textContent = `You win! ${humanChoice} beats ${computerChoice}`
                div.appendChild(para1);
                humanScore++;
            } else{
                para1.textContent = `It's a draw! ${computerChoice} is equal to ${humanChoice}`
                div.appendChild(para1);
            }
        
            para2.textContent = `You: ${humanScore}
            | The computer ${computerScore}`
            div.appendChild(para2);

            break
        
        case 'paper':
            if (computerChoice === 'scissors'){
                para1.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                div.appendChild(para1);
                computerScore++;
            } else if (computerChoice === 'rock'){
                para1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                div.appendChild(para1);
                humanScore++;
            } else{
                para1.textContent = `It's a draw! ${computerChoice} is equal to ${humanChoice}`;
                div.appendChild(para1);
            }
            
            para2.textContent = `You: ${humanScore}
            | The computer ${computerScore}`
            div.appendChild(para2);
            
            break;
        
        case 'scissors':
            if (computerChoice === 'rock'){
                para1.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                div.appendChild(para1)
                computerScore++;
            } else if (computerChoice === 'paper'){
                para1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                div.appendChild(para1)
                humanScore++;
            } else{
                para1.textContent = `It's a draw! ${computerChoice} is equal to ${humanChoice}`;
                div.appendChild(para1)
            }
            
            para2.textContent = `You: ${humanScore}
            | The computer ${computerScore}`
            div.appendChild(para2);
            break;
    }

    
    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
        para3.textContent = `You win!`;
        } else if (computerScore === 5){
            para3.textContent = `You lose!`;
        }
        
        div.appendChild(para3)
        humanScore = 0;
        computerScore = 0;
    };
}
    


let rock = document.createElement('button')
let paper = document.createElement('button')
let scissors = document.createElement('button')
let cleanPage = document.createElement('button')

rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissors.textContent = 'Scissors';
cleanPage.textContent = 'Clean page'

rock.setAttribute('style', 'background-color: grey')
paper.setAttribute('style', 'background-color: beige')
scissors.setAttribute('style', 'background-color: red')

let div = document.createElement('div');
let body = document.querySelector('body')

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);
body.appendChild(cleanPage)

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

cleanPage.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    div.textContent = '';
})