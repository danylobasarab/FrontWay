/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { OrdersContext } from "../context-provider/orders-context-provider";
const img = require("../../images/collection.jpg");


const ItemInfo = () => {
  const { id } = useParams();
  const [ordersData] = useContext(OrdersContext);
  console.log("========== id: " + id);
  const order = ordersData.find((ord) => ord.id == id);

  const datas = [
    "Functional and intuitive interface of the system helps operators to provide a quicker more efficient service by collecting all orders on one dashboard, listed and sorted by relevancy.",
    " Address search works like a swiss clock — we spend a lot of effort to make it effective and easy-to-use. Worldwide geo-coding is only available in our taxi software.",
    " Manage your business on tablet, desktop and mobile. You can offer not only instant orders but also pre-booking to provide serviceswhenever clients need it. One click is enough to book your service.",
  ];
  let i = id - 1;
  return (
    <>
      <Card sx={{ maxWidth: 400, padding: 10 }}>
        <CardMedia component="img" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {order.full_name}
          </Typography>
          <Typography variant="body1" sx={{ minHeight: 100 }}>
            {order.destination}
          </Typography>
          <Typography>
            <b>Brand: {order.car_brand} </b>
          </Typography>
          <Typography>
            <b>Price: {order.price} UAH</b>
          </Typography>
          <Typography>
            <b>{datas[i]}</b>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ItemInfo;
