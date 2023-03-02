import Box from "@mui/material/Box";
import { useContext } from "react";

import { TextField } from "@mui/material";
import { FiltersContext } from "../../context-provider/filters-context-provider";

export function NameFilter() {
    const [filters, setFilters] = useContext(FiltersContext);
  
    const onChange = (event) => {
      setFilters({...filters, nameFilter: event.target.value});
    };
  
    return (
      <Box sx={{ width: 150, pl: 6 , pt: 1}}>
        <TextField value={filters.nameFilter} id="search-by-name" label="Find by name" variant="standard" onChange={onChange} />
      </Box>
    );
  }