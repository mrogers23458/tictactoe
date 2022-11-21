const cells = document.querySelectorAll(".cell");
const cell1 = document.getElementById("cell-1");
const cell2 = document.getElementById("cell-2");
const cell3 = document.getElementById("cell-3");
const cell4 = document.getElementById("cell-4");
const cell5 = document.getElementById("cell-5");
const cell6 = document.getElementById("cell-6");
const cell7 = document.getElementById("cell-7");
const cell8 = document.getElementById("cell-8");
const cell9 = document.getElementById("cell-9");
const winnerEl = document.getElementById("winnerText");
const playBtnEl = document.getElementById("playBtn");
const gameState = {
  currentlyX: true,
  value: "X",
  winner: false,
  markedCells: [],
};

function winConditions() {
  if (
    (cell1.innerText === "X" &&
      cell2.innerText === "X" &&
      cell3.innerText === "X") ||
    (cell4.innerText === "X" &&
      cell5.innerText === "X" &&
      cell6.innerText === "X") ||
    (cell7.innerText === "X" &&
      cell8.innerText === "X" &&
      cell9.innerText === "X") ||
    (cell1.innerText === "X" &&
      cell4.innerText === "X" &&
      cell7.innerText === "X") ||
    (cell2.innerText === "X" &&
      cell5.innerText === "X" &&
      cell8.innerText === "X") ||
    (cell3.innerText === "X" &&
      cell6.innerText === "X" &&
      cell9.innerText === "X") ||
    (cell1.innerText === "X" &&
      cell5.innerText === "X" &&
      cell9.innerText === "X") ||
    (cell3.innerText === "X" &&
      cell5.innerText === "X" &&
      cell7.innerText === "X")
  ) {
    winnerEl.innerText = "The winner is X! Play again?";
    gameState.winner = true;
    return;
  }
  if (
    (cell1.innerText === "O" &&
      cell2.innerText === "O" &&
      cell3.innerText === "O") ||
    (cell4.innerText === "O" &&
      cell5.innerText === "O" &&
      cell6.innerText === "O") ||
    (cell7.innerText === "O" &&
      cell8.innerText === "O" &&
      cell9.innerText === "O") ||
    (cell1.innerText === "O" &&
      cell4.innerText === "O" &&
      cell7.innerText === "O") ||
    (cell2.innerText === "O" &&
      cell5.innerText === "O" &&
      cell8.innerText === "O") ||
    (cell3.innerText === "O" &&
      cell6.innerTex === "O" &&
      cell9.innerText === "O") ||
    (cell1.innerText === "O" &&
      cell5.innerText === "O" &&
      cell9.innerText === "O") ||
    (cell3.innerText === "O" &&
      cell5.innerText === "O" &&
      cell7.innerText === "O")
  ) {
    winnerEl.innerText = "The winner is O! Play again?";
    gameState.winner = true;
    return;
  }

  if (gameState.markedCells.length >= 9 && gameState.winner === false) {
    winnerEl.innerText = "Cat's Game!";
    return;
  }
}

function handleClick(e) {
  if (gameState.winner) {
    return;
  }
  if (gameState.markedCells.includes(e.target)) {
    return;
  }

  gameState.currentlyX = !gameState.currentlyX;

  if (gameState.currentlyX) {
    gameState.value = "O";
  }

  if (!gameState.currentlyX) {
    gameState.value = "X";
  }

  gameState.clicks += 1;
  e.target.innerText = gameState.value;
  gameState.markedCells.push(e.target);
  winConditions();
}

function app() {
  cells.forEach((cell) => {
    cell.innerText = "";
    gameState.winner = false;
    gameState.markedCells = [];
    gameState.value = "X";
    gameState.currentlyX = true;
    winnerEl.innerText = "X will start";
    cell.addEventListener("click", handleClick);
  });
}

playBtnEl.addEventListener("click", app);
