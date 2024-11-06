let board = [];
let num = 1;

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(num);
    num++;
  }
  board.push(row);
}

let currentPlayer = "O";
let winner = null;
let numberOfMoves = 0;

while (true) {
  let number = +prompt("Enter a number between 1 and 9");

  while (number < 1 || number > 9) {
    number = +prompt("Entr a number between 1 and 9");
  }

  let row = Math.floor((number - 1) / 3);
  let col = (number - 1) % 3;

  while (board[row][col] === "X" || board[row][col] === "O") {
    number = +prompt("Number already taken, enter another number");
    while (number < 1 || number > 9) {
      number = +prompt("Entr a number between 1 and 9");
    }
    row = Math.floor((number - 1) / 3);
    col = (number - 1) % 3;
  }

  board[row][col] = currentPlayer;
  numberOfMoves += 1;

  for (let i = 0; i < 3; i++) {
    console.log(board[i]);
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";

  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      winner = board[i][0];
      break;
    }
  }

  for (let j = 0; j < 3; j++) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
      winner = board[0][j];
      break;
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    winner = board[0][0];
    break;
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    winner = board[1][1];
    break;
  }

  if (winner) {
    break;
  }

  if (numberOfMoves === 9) {
    break;
  }
}

if (numberOfMoves === 9) {
  console.log("Nema pobjednika");
} else {
  console.log(`Pobjednik je ${winner}!`);
}
