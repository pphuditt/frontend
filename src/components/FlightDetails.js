import "./FlightDetails.css";
import Card from "./Card";
import planeIcon from "./planeIcon.svg";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Link } from "react-router-dom";

const FlightDetails = ({data}) => {
  
  const navigate = useNavigate();

  const nextEventHandler = () => {
    navigate("../payment");
  };

  return (
    <div>
      {data.map((flightData) => {
        return (
          <Card>
            <img className="plane-icon" src={planeIcon} alt="plane-icon"></img>
            <div className="departure-text-element">
              <p className="time-country">
                <span className="time">{moment(flightData.flightDate).format('h:mm a')}</span>
                {" "+flightData.fromTimezone.split("/")[1].replace('_','')}
              </p> 
              <p className="flight-date">{moment(flightData.flightDate).format("ddd D MMM YYYY")}</p>
              <p className="country-code">{flightData.from}</p>
            </div>
            <div className="to-text-element">
              <p>TO</p>
            </div>
            <div className="arrival-text-element">
              <p className="time-country">
                <span className="time">{moment(flightData.flightDate).add(flightData.takenTime,'m').format('h:mm a')}</span>
                {" "+flightData.toTimezone.split("/")[1].replace('_','')}
              </p>
              <p className="flight-date">{moment(flightData.flightDate).add(flightData.takenTime,'m').format("ddd D MMM YYYY")}</p>
              <p className="country-code">{flightData.to}</p>
            </div>
            <div className="price">
              <p>THB {flightData.fare}</p>
            </div>
            <Link to='/payment' state={{data : flightData}}>
              <button className="next-button">
                Next
              </button>
            </Link>

          </Card>
        );
      })}
    </div>
  );
}

export default FlightDetails;
