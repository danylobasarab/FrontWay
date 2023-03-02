const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "localhost",
  password: "danbas.myr",
  database: "jewelry",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connection established successfully!");
  } else {
    console.log("Connection failed:" + err);
  }
});

const formatDate = (date) => {
  return new Date(date).toISOString().slice(0, 10);
};

// setup server port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/orders", (req, res) => {
  const date = formatDate(req.body.date);
  mysqlConnection.query(
    "INSERT INTO orders(id, fullName, description, type, date, price) values(?,?,?,?,?,?)",
    [
      req.body.id,
      req.body.fullName,
      req.body.description,
      req.body.type,
      date,
      req.body.price,
    ],
    (err, response) => {
      if (!err) {
        res.send("Record has been inserted successfully!");
      } else {
        throw err;
      }
    }
  );
});

app.get("/orders", (req, res) => {
  mysqlConnection.query("SELECT * FROM orders", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      throw err;
    }
  });
});

app.delete("/orders/:id", (req, res) => {
  mysqlConnection.query(
    "DELETE FROM orders WHERE id=?",
    [req.params.id],
    (err) => {
      if (!err) {
        res.send("Order has been deleted successfully!");
      } else {
        throw err;
      }
    }
  );
});

app.patch("/orders/:id", (req, res) => {
  const backToDate = formatDate(req.body.date);

  mysqlConnection.query(
    "UPDATE orders SET fullName=?, description=?, type=?, date=?, price=? WHERE id=?",
    [
      req.body.fullName,
      req.body.description,
      req.body.type,
      backToDate,
      req.body.price,
      req.params.id,
    ],
    (err) => {
      if (!err) {
        res.send("Order has been updated successfully!");
      } else {
        throw err;
      }
    }
  );
});
