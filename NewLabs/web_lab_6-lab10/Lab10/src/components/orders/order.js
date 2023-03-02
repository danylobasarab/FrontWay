export class Order {
  constructor(id, full_name, destination, car_brand, order_date, price, img) {
    this.id = id;
    this.full_name = full_name;
    this.destination = destination;
    this.car_brand = car_brand;
    this.order_date = order_date;
    this.price = price;
    this.img = img;
  }
}
