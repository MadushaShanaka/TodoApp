const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "msrahula97",
  //database: "todoapp",
});

// connect to the MySQL server
const init = () => {
  connection.connect(function (err) {
    if (err) {
      return console.error("errorr: " + err.message);
    }
    console.log("Database connected successfully!");

    let createDB = `CREATE DATABASE IF NOT EXISTS todoapp`;
    let selectDB = `USE todoapp`;
    let createTodos = `create table if not exists todos(
                            id int primary key auto_increment,
                            title varchar(255)not null,
                            description varchar(1000),
                            status varchar(7) not null
                        )`;

    connection.query(createDB, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
    connection.query(selectDB, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });
    connection.query(createTodos, function (err, results, fields) {
      if (err) {
        console.log(err.message);
      }
    });

    // connection.end(function (err) {
    //   if (err) {
    //     return console.log(err.message);
    //   }
    // });
  });
};

module.exports = {
  init,
  connection,
};
