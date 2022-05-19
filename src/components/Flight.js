import Footerr from "./Footerr";
import Navbar from "./Navbar";
import background from "./background.png";
import "./Flight.css";
import FlightDetails from "./FlightDetails";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../service/api";
import axios from "axios";
import authHeader from "../service/AuthProvider";
// import Card from "./Card";
// import planeIcon from "../images/planeIcon.svg";

function Flight() {

  const {msg} = useParams();
  const [departure,arrival,date] = msg.split(".");
  const [array,setArray] = useState([]);
  
  useEffect(() =>{
    axios.get(`http://localhost:8080/api/availableFlight?from=${departure}&to=${arrival}&date=${date}`,{
      headers : authHeader()
    }).then((res) => {
      setArray(res.data);
    });
  },[]);

  return (
    <div className="flight-page-whole">
      <Navbar></Navbar>
      <div className="content-container">
        <img className="bg-image" src={background} alt="background"></img>
        <div className="card-container">
          <FlightDetails data={array}></FlightDetails>
        </div>
      </div>
      <Footerr></Footerr>
    </div>
  );
}

export default Flight;
