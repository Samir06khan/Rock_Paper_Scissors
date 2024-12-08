function getComputerChoice(){
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random()*3);
  return choices[randomIndex];

}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'TIE';
    }

    if(playerChoice === 'Rock'){
        if(computerChoice === 'Scissors'){
            return 'YOU WIN';
        } else {
        return 'YOU LOOSE';
    }
}

    if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
          return 'YOU WIN';
        } else {
          return 'YOU LOSS';
        }
      }

      if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
          return 'YOU WIN';
        } else {
          return 'YOU LOSS';
        }
      }
}

function playGame(playerChoice){
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    document.getElementById('result').textContent = `You choice ${playerChoice},computer choice ${computerChoice}. ${result}`;
}
document.getElementById('rock').addEventListener('click', () =>playGame('Rock'));
document.getElementById('paper').addEventListener('click', () => playGame('Paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('Scissors'));