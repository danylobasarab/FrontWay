import car_img from "../../images/collection.jpg";

export default function DefaultCards() {
  let i = 0;
  return (
    <div className="card-container" key={i++}>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Ring</h2>
        <p>
          Rings are functional and intuitive interface of the system helps operators to
          provide a quicker more efficient service by collecting all orders on
          one dashboard, listed and sorted by relevancy.
        </p>
      </div>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Braslet</h2>
        <p>
          Braslets address search works like a swiss clock — we spend a lot of effort to
          make it effective and easy-to-use. Worldwide geo-coding is only
          available in our taxi software.
        </p>
      </div>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Earrings</h2>
        <p>
          Manage your business on tablet, desktop and mobile. You can offer not
          only instant orders but also pre-booking to provide services whenever
          clients need it. One click is enough to book your service.
        </p>
      </div>
    </div>
  );
}
