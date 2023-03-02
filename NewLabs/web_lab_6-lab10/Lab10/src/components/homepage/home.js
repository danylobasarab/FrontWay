import "./home.css";

import main_img from "../../images/mainPhoto.webp";
import { useState } from "react";

import DefaultCards from "./default-card-container";
const cardList = [<DefaultCards key={1} />, <DefaultCards key={2} />];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const ordersSmoll = 1;

  return (
    <main>
      <div className="main-img-block">
        <img src={main_img} alt=""></img>
        <h1>Jewelry</h1>
        <p className="text-desc">
          Jewelry is an easy app to schedule trips, dispatch them to
          other drivers, manage bookings and track your taxi business as driver
          or owner. Fully implemented taximeter, printing receipts, charts and
          more. Taxi app allows entry into the database and easily monitor the
          income of taxi drivers. Also enables statistical processing of data
          daily, weekly, monthly and annual basis.Data are owned taxi driver and
          stored on a local device. Bluetooth printing reports, receipts and
          statistics. Integration with our "Taximeter" application. You can use
          "Taximeter" who send data to "Taximanager" and use full power of both
          application.
        </p>
      </div>

      <div className="cards-container">
        {cardList.slice(0, showMore ? cardList.size : ordersSmoll)}
        <div className="home_page_sec">
          <button
            className="non_but"
            onClick={() => setShowMore((currShowMore) => !currShowMore)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </main>
  );
}
