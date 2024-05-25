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

getHumanChoice();