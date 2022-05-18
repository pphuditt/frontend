import "./FlightDetails.css";
import Card from "./Card";
import planeIcon from "./planeIcon.svg";
import { Route, Router } from "react-router-dom";
import Payment from "./PaymentPage";
import { Switch } from "@mui/material";

function FlightDetails() {
  const flightData1 = {
    instanceId: 134,
    flightId: 3,
    fare: 20000,
    flightDate: "2022-06-15",
    departureTime: "00:00",
    arrivalTime: "06:00",
    from: "BKK",
    to: "NRT",
    departureAirportName: "SUVARNABHUMI INTERNATIONAL AIRPORT",
    arrivalAirportName: "NARITA INTERNATIONAL AIRPORT",
  };

  const flightData2 = {
    instanceId: 134,
    flightId: 3,
    fare: 20000,
    flightDate: "2022-06-15",
    departureTime: "00:00",
    arrivalTime: "06:00",
    from: "BKK",
    to: "NRT",
    departureAirportName: "SUVARNABHUMI INTERNATIONAL AIRPORT",
    arrivalAirportName: "NARITA INTERNATIONAL AIRPORT",
  };

  const array = [flightData1, flightData2];
  const nextEventHandler = () => {
    
  };

  return (
    <div>
      {array.map((flightData) => {
        return (
          <Card>
            <img className="plane-icon" src={planeIcon} alt="plane-icon"></img>
            <div className="departure-text-element">
              <p className="time-country">
                <span className="time">{flightData.departureTime}</span>
              </p>
              <p className="flight-date">{flightData.flightDate}</p>
              <p className="country-code">{flightData.from}</p>
              <p className="airport-name">{flightData.departureAirportName}</p>
            </div>
            <div className="to-text-element">
              <p>TO</p>
            </div>
            <div className="arrival-text-element">
              <p className="time-country">
                <span className="time">{flightData.arrivalTime}</span>
              </p>
              <p className="flight-date">{flightData.flightDate}</p>
              <p className="country-code">{flightData.to}</p>
              <p className="airport-name">{flightData.arrivalAirportName}</p>
            </div>
            <div className="price">
              <p>THB {flightData.fare}</p>
            </div>
            <button className="next-button" onClick={nextEventHandler}>
              Next
            </button>
          </Card>
        );
      })}
    </div>
  );
}

export default FlightDetails;
