export class FilterPrice {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  toString() {
    return this.min == -1 ? "All" : this.min + "-" + this.max;
  }
}

export const priceFilters = [
  new FilterPrice(-1, -1),
  new FilterPrice(1, 50),
  new FilterPrice(51, 100),
  new FilterPrice(101, 500),
  new FilterPrice(501, 1000),
  new FilterPrice(1001, 50000),
];

export class Filters {
  constructor(priceFilterId = 0, nameFilter = "") {
      this.priceFilterId = priceFilterId;
      this.nameFilter = nameFilter;
  }
}
