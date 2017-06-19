const db = require('./startGame');
console.log(process.env.move);

db.run('SELECT * FROM gameboard;', (result) => console.log(result));

if (process.env.player === 'X') {
  player = 'O';
} else {
  player = 'X';
}

let gameBoard = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];

gameBoard.map(row => {
  console.log(row[0] + '|' + row[1] + '|' +row[2] + '\n');
})

console.log(`player ${player}: your move`);
