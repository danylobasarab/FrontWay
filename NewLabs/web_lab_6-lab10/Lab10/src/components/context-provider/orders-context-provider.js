import React, { useState, useEffect } from "react";
import { getAllOrders } from "../../api/orders-api";

export const OrdersContext = React.createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [ordersData, setOrdersData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    getAllOrders()
      .then((result) => {
        setOrdersData([...result]);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log("no server response ", error);
        setOrdersData([]);
      });
  }, []);
  return (
    <OrdersContext.Provider value={[ordersData, isDataLoading]}>
      {children}
    </OrdersContext.Provider>
  );
};
