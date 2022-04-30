import Footerr from "./Footerr";
import Navbar from "./Navbar";
import background from "./background.png";
import "./Flight.css";
import FlightDetails from "./FlightDetails";
// import Card from "./Card";
// import planeIcon from "../images/planeIcon.svg";

function Flight() {
  

  return (
    <div className="flight-page-whole">
      <Navbar></Navbar>
      <div className="content-container">
        <img className="bg-image" src={background} alt="background"></img>
        <div className="card-container">
          <FlightDetails></FlightDetails>
        </div>
      </div>
      <Footerr></Footerr>
    </div>
  );
}

export default Flight;
