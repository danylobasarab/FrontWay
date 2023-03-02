import React, { useState, createContext } from "react";
import { Filters } from "../filterblock/filter/filters-common";

export const FiltersContext = createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const [filters, setFilters] = useState(new Filters());
  return (
    <FiltersContext.Provider value={[filters, setFilters]}>
      {children}
    </FiltersContext.Provider>
  );
};
