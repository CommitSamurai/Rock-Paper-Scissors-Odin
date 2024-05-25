function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    let randomChoices = Math.floor(Math.random() * choices.length);
    return choices[randomChoices];
}

function getHumanChoice(){
    let validchoice = false;
    const textchoice = 'Rock, paper or scissors?';
    let humanChoice = undefined;
    
    while (validchoice === false){
    humanChoice = prompt(textchoice).toLowerCase();
      switch(humanChoice){
        case 'rock':
        case 'paper':
        case 'scissors':
            validchoice = true;
            break
        default:
            console.log('Invalid choice. Please select a valid option.')
      }

    
    }

    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    i = 1;

    function playRound(computerChoice, humanChoice){
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

    while (i <= 5){
        i++;
        playRound(getComputerChoice(), getHumanChoice());
    }

    if(humanScore > computerScore){
        console.log(`You win! You beat the computer a total of ${humanScore} times!`)
    } else if (humanScore < computerScore){
        console.log(`You lost. You beat the computer a total of ${humanScore} times.`)
    } else{
        console.log(`It's a draw! You beat the computer a total of ${humanScore} times.`)
    }
}

playGame()