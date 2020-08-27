
function getMoveName(randomNumber,playerInput){
  if(randomNumber == 1){
    return 'kamień';
  }
  else if(randomNumber == 2){
      return 'papier'
  }
  else if(randomNumber == 3){
      return 'nożyce'
  }
  if(playerInput == '1'){
    return 'kamień';
  }
  
  else if(playerInput == '2'){
    return 'papier';
    }
  
  else if(playerInput == '3'){
    return 'nożyce';
    }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);


 /* if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier'
}
else if(randomNumber == 3){
    computerMove = 'nożyce'
} */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
  }

else if(playerInput == '3'){
    playerMove = 'nożyce';
  }*/



function displayResult(argComputerMove, argPlayerMove){
  
  printMessage('Twój ruch to: ' + playerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }


  else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrywasz!');
  }

  else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrywasz!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrywasz!');
  }


  else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
  }
}
displayResult(computerMove, playerMove)