const express = require("express");
const mysql = require('mysql');
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(cors());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'danbas.myr',
    database: 'taximanager'
});

mysqlConnection.connect((err) => {
    if (!err) {
      console.log("Connection established succesfull!");
    } else {
      console.log("Connection failed!!!" + err);
    }
  });

// setup server port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

console.log(PORT);
  
  
  app.post("/orders", (req, res) => {
    let price = parseInt(req.body.price, 0);
    const backToDate = new Date(req.body.order_date);
    console.log(price);
    console.log(backToDate);
    mysqlConnection.query(
      "INSERT INTO orders(id, full_name, destination, car_brand, order_date, price) values(?,?,?,?,?,?)",
      [
        req.body.id,
        req.body.full_name,
        req.body.destination,
        req.body.car_brand,
        backToDate,
        price,
      ],
      (err, response) => {
        if (!err) {
          res.send("Record has been inserted succesfull!");
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

  app.delete("/orders/:id", (req,res) => {
    mysqlConnection.query('DELETE FROM orders WHERE id=?', [req.params.id],(err,rows,fields)=>{
      if(!err){
        res.send('Order has been deleted successfully!');
      }
      else{
        throw err;
      }
    })
  })

  app.patch("/orders/:id", (req,res)  =>{
    let price = parseInt(req.body.price, 0);
    const backToDate = new Date(req.body.order_date);

    mysqlConnection.query('UPDATE orders SET full_name=?, destination=?, car_brand=?, order_date=?, price=? WHERE id=?', 
    [
      req.body.full_name,
      req.body.destination,
      req.body.car_brand,
      backToDate,
      price,
      req.params.id
    ],
    (err,rows,fields)=>{
      if(!err){
        res.send('Order has been updated successfully!');
      }
      else{
        throw err;
      }
    })
  });