{function playGame (playerInput){ clearMessages ()

const getMoveName = function (randomNumber,playerInput){ 
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
const randomNumber = Math.floor(Math.random() * 3 + 1),
computerMove = getMoveName(randomNumber),
playerMove = getMoveName(playerInput);
printMessage('Mój ruch to: ' + computerMove);  
console.log('Wylosowana liczba to: ' + randomNumber);
 
  


  

  
  
 
  console.log('Gracz wpisał: ' + playerInput);

   





const displayResult= function(argComputerMove, argPlayerMove){
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
}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1)
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2)
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3)
});
}