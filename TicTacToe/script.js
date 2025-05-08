document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("statusText");
    const restartBtn = document.getElementById("restartBtn");

    let currentPlayer = "X";
    let gameActive = true;
    const board = ["", "", "", "", "", "", "", "", ""];

    const winningCombinations = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    function handleCellClick(e) {
      const index = e.target.dataset.index;

      if (board[index] !== "" || !gameActive) return;

      board[index] = currentPlayer;
      e.target.textContent = currentPlayer;
      e.target.classList.add(currentPlayer === "X" ? "text-blue-600" : "text-red-600");

      if (checkWin()) {
        statusText.textContent = `¡Ganó ${currentPlayer}!`;
        gameActive = false;
      } else if (board.every(cell => cell !== "")) {
        statusText.textContent = "¡Empate!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Turno de ${currentPlayer}`;
      }
    }

    function checkWin() {
      return winningCombinations.some(comb => {
        return comb.every(index => board[index] === currentPlayer);
      });
    }

    function restartGame() {
      currentPlayer = "X";
      gameActive = true;
      board.fill("");
      cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("text-blue-600", "text-red-600");
      });
      statusText.textContent = `Turno de ${currentPlayer}`;
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartBtn.addEventListener("click", restartGame);

    statusText.textContent = `Turno de ${currentPlayer}`;
  });