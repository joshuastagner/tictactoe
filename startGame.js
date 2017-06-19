var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {
  db.run(`CREATE TABLE gameboard (
    board varchar(200)
  )`);

});

db.run('INSERT INTO gameboard (board) VALUES ("____________")' );

db.run('SELECT * FROM gameboard', (err, result) => console.log(err, result));
console.log('tic tac toe!')

module.exports = db;
