import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { addOrderIdAction, removeOrderIdAction } from "../../current-redux/cart-slice";


const OrderCard = ({ id, img, full_name, destination, car_brand, price }) => {
  const orderIds = useSelector((state) => state.cart.ids);

  const onAddClicks = (clickedId) =>  {   
    dispatch(addOrderIdAction(clickedId));
  }

  const dispatch = useDispatch();
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {full_name}
          </Typography>
          <Typography variant="body1" sx={{ minHeight: 100 }}>
            {destination}
          </Typography>
          <Typography>
            <b>Brand: {car_brand} </b>
          </Typography>
          <Typography>
            <b>Price: {price} UAH</b>
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={"/item/" + id}> View More </NavLink>
        </CardActions>
        <CardActions>
          {orderIds.includes(id) ? (
            <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={() => dispatch(removeOrderIdAction(id))}>
              Remove from Cart
            </Button>
          ) : (
            <Button 
            size="small"
            variant="outlined"
            onClick={() => onAddClicks(id)}>
                Add to Cart
            </Button>
          )
        }
        </CardActions>
      </Card>
    </>
  );
};

export default OrderCard;
