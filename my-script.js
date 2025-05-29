function getComputerChoice() { 
  const ComputerChoice = Math.floor((Math.random() * 3) + 1);
  
  if (ComputerChoice === 1) {
    return 'rock';
  } else if (ComputerChoice === 2) {
    return 'paper';
  } else if (ComputerChoice === 3) {
    return 'scissors';
  }  
}

function getHumanChoice() {  
  const HumanChoice = prompt('Enter your choice');
  const HumanChoiceLower = HumanChoice.toLowerCase();
  return HumanChoiceLower;
}

// Initialize humanScore variable
let humanScore = 0;

// Initialize computerScore variable
let computerScore = 0;

function playGame() {
  
  // Create a playRound function with two parameters
  function playRound(humanChoice, computerChoice) {
    
    // Compare
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      console.log('You win! Rock beats Scissors');
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
      console.log('Tie');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      console.log('You lose! Paper beats Rock');
    
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      console.log('You win! Paper beats Rock');
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
      console.log('Tie');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      console.log('You lose! Scissors beats Paper');
    
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      console.log('You win! Scissors beats Paper');
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
      console.log('Tie');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      console.log('You lose! Rock beats Scissors');
    }
  
  }
  
  // Generate humanChoice
  const humanSelection = getHumanChoice().toLowerCase();
  // console.log(humanSelection);
  // Generate computerChoice
  const computerSelection = getComputerChoice();
  // console.log(computerSelection);
  // Call playRound function
  playRound(humanSelection, computerSelection);

  console.log(`${humanScore} : ${computerScore}`);

}

for (let i = 1; i <= 5; i++) {
  console.log(`Round ${i}`);
  playGame();
}

if (humanScore > computerScore) {
  console.log(`Result: ${humanScore} : ${computerScore}, Human win!`);
} else if (humanScore < computerScore) {
  console.log(`Result: ${humanScore} : ${computerScore}, Computer win!`);
} else {
  console.log(`Result: ${humanScore} : ${computerScore}, Tie!`);
}