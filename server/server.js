const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  const mysql = require("mysql2");
// const dbConfig = require(“db.config.js");
// Create a connection to the database
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '6hsr5swd',
database: 'teacherfinder'
});
// open the MySQL connection
connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM teachers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});