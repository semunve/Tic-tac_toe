alert ("Bienvenido/a a Tic Tac Toe!")

const celdas = document.querySelectorAll('td');
let currentPlayer = 'X';
let gameOver = false;

function Move(cell) {
  if (!cell.textContent && !gameOver) {
    cell.textContent = currentPlayer;
if(currentPlayer==='X'){
  cell.style.color="green"
}

    if (checkWinner(currentPlayer)) {
      gameOver = true;
      showMessage('¡Has ganado!', askToRestart);
    } else {
      currentPlayer = 'X';
      setTimeout(computerMove, 500);
    }
  }
}

function computerMove() {
  if (!gameOver) {
    const eCeldas = Array.from(celdas).filter(cell => !cell.textContent);
    if (eCeldas.length > 0) {
      const randomIndex = Math.floor(Math.random() * eCeldas.length);
      eCeldas[randomIndex].textContent = 'O';
      eCeldas[randomIndex].style.color="red"
      if (checkWinner('O')) {
        gameOver = true;
        showMessage('¡Has perdido!', askToRestart);
      }
    
  }else{
    gameOver=true;
    showMessage('!No hay mas movimientos!',resetGame)
  }
    currentPlayer = 'X';
  }
}

function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]            // Diagonales
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => celdas[index].textContent === player);
  });
}

function showMessage(message, callback) {
  alert(message);
  if (callback) {
    callback();
  }
}

function askToRestart() {
  resetGame()
}
function resetGame(){
  for(const cell of celdas){
    cell.textContent='';
  }
  currentPlayer='X';
  gameOver=false;
}