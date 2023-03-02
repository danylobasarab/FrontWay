import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { FiltersContext } from "../../context-provider/filters-context-provider";
import { Filters, FiltersData, priceFilters } from "./filters-common";

export function PriceFilter() {
  const [filters, setFilters] = useContext(FiltersContext);

  const onChange = (event) => {
    setFilters({...filters, priceFilterId: event.target.value});
    //setFilters(new Filters(event.target.value, filters.nameFilter));
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth>
        <label id="label_id">Filter by price...</label>
        <Select label="label_id" value={filters.priceFilterId} onChange={onChange}>
          {createMenuItems()}
        </Select>
      </FormControl>
    </Box>
  );
}

function createMenuItems() {
  let items = [];
  for (let i = 0; i < priceFilters.length; i++) {
    items.push(<MenuItem value={i} key={i}>{priceFilters[i].toString() }</MenuItem>);
  }
  return items;
}
