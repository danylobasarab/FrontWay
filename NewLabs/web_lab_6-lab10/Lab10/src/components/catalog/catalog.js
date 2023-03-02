import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import OrderCard from "../orders/order-card";
import Typography from "@mui/material/Typography";
import { centerContainer } from "./catalog.style";
import { FilterBlock } from "../filterblock/filter-block";
import { useContext, useState, useEffect } from "react";
import { OrdersContext } from "../context-provider/orders-context-provider";
import { FiltersContext } from "../context-provider/filters-context-provider";
import { priceFilters } from "../filterblock/filter/filters-common";
import Loader from "../loading/loading";
const img = require("../../images/collection.jpg");

function Catalog() {
  const [ordersData, isDataLoading] = useContext(OrdersContext);
  const [filters] = useContext(FiltersContext);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    console.log("LOADING: " + isDataLoading);
    applyFilters();
  }, [ordersData]);

  const applyFilters = () => {
    let priceFilter = priceFilters[filters.priceFilterId];
    let filteredItems = ordersData.filter(
      (order) =>
        (priceFilter.min < 0 ||
          (order.price >= priceFilter.min && order.price <= priceFilter.max)) &&
        (!filters.nameFilter || order.full_name.includes(filters.nameFilter))
    );
    setDisplayData(filteredItems);
  };

  const discardFilters = () => {
    console.log("discardFilters" + ordersData);
    setDisplayData(ordersData);
  };

  return (
    <>
      <Box sx={{ ...centerContainer, pt: 1 }}>
        <Typography variant="h5" mb="5px">
          Filters
        </Typography>
        <Grid container sx={{ mb: 5 }}>
          <FilterBlock
            applyFilters={applyFilters}
            discardFilters={discardFilters}
          />
        </Grid>
        <Typography variant="h5" mb="10px">
          Catalog
        </Typography>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {isDataLoading && <Loader />}
         
        </Grid>

        {displayData.length && (
          <Grid container spacing={2} sx={{}}>
            {displayData.map((record, index) => (
              <Grid item key={index} sx={{ ml: 15 }}>
                <OrderCard
                  id={record.id}
                  img={img}
                  full_name={record.full_name}
                  destination={record.destination}
                  car_brand={record.car_brand}
                  price={record.price}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default Catalog;
