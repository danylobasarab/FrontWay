import { PriceFilter } from "./filter/price-filter";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { NameFilter } from "./filter/name-filter";

export function FilterBlock({ applyFilters, discardFilters }) {
  return (
    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid item>
        <PriceFilter />
      </Grid>
      <Grid item>
        <NameFilter />
      </Grid>
      <Grid item sx={{ ml: "50px", my: "auto" }}>
        <Grid container spacing={2}>
          <Grid item>
            <Button color="primary" variant="contained" onClick={applyFilters}>
              Apply
            </Button>
          </Grid>
          <Grid item>
            <Button color="error" variant="contained" onClick={discardFilters}>
              Discard
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
