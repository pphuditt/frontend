import "./FlightDetails.css";
import Card from "./Card";
import planeIcon from "./planeIcon.svg";

function FlightDetails() {

    const obj1 = {
        instanceId : "InstanceId",
        flightId : "FlightId",
        fare : "fare",
        flightDate : "flightDate",
        from: "from",
        to: "to",
        availableSeat: "availableSeat",
        departureTime: "departureTime",
        arrivalTime: "arrivalTime",
        departureAirportName: "departureAirportName",
        arrivalAirportName: "arrivalAirportName"
    }

    const array = [obj1];

    const flightData = {
        "instanceId": 134,
        "flightId": 3,
        "fare": 20000,
        "flightDate": "2022-06-15",
        "departureTime": "00:00",
        "arrivalTime": "06:00",
        "from": "BKK",
        "to": "NRT",
        "departureAirportName": "SUVARNABHUMI INTERNATIONAL AIRPORT",
        "arrivalAirportName": "NARITA INTERNATIONAL AIRPORT" 
    }

    const destCountry = "JAPAN";

    return (
        <Card>
            <img className="plane-icon" src={planeIcon} alt="plane-icon"></img>
            <div className="departure-text-element">
              <p className="time-country">
                <span className="time">{flightData.departureTime}</span> {destCountry}
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
                <span className="time">{flightData.arrivalTime}</span> {destCountry}
              </p>
              <p className="flight-date">{flightData.flightDate}</p>
              <p className="country-code">{flightData.to}</p>
              <p className="airport-name">{flightData.arrivalAirportName}</p>
            </div>
            <div className="price">
              <p>THB {flightData.fare}</p>
            </div>
            <button className="next-button">Next</button>
          </Card>
    );
}

export default FlightDetails;