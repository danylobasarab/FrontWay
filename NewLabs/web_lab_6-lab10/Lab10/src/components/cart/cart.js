import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { OrdersContext } from "../context-provider/orders-context-provider";
const img = require("../../images/collection.jpg");

export default function Cart() {
  const [ordersData] = useContext(OrdersContext);
  const orderIds = useSelector((state) => state.cart.ids);

  if (orderIds.size == 0) {
    return (
      <>
        <h1>Cart Orders is EMPTY!!!</h1>
      </>
    );
  } else {
    return (
      <>
        <Grid>
          <Typography variant="h5" mb={3}>
            Shopping cart
          </Typography>
          {ordersData
            .filter((order) => orderIds.includes(order.id))
            .map((order, index) => (
              <Card key={index} sx={{ maxWidth: 345 }}>
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
                </CardContent>
              </Card>
            ))}
        </Grid>
      </>
    );
  }
}
