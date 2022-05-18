import Footerr from "../Footerr";
import Navbar from "../Navbar";
import LandingBackground from "./landingBackground.png";
import "./landingPage.css";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from 'react';

function LandingPage() {
  const [destination, setDest] = React.useState("");
  // const dest = [Japan, NewYork, India];

  const handleChange = (event) => {
    setDest(event.target.destination);
  };

  return (
    <div className="whole-landing-page">
      <Navbar />
      <div className="content-container">
        <img
          className="landing-bg"
          src={LandingBackground}
          alt="landing-page"
        ></img>
        <Card
          style={{
            width: "80%",
            height: "288px",
            position: "relative",
            bottom: "128px",
            margin: "0 10%",
            boxShadow: "2px 2px 4px rgb(201, 201, 201)",
          }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl style={{
                width: "24%",
                backgroundColor: "#E8E8E8",
                marginLeft: "8%",
                marginTop: "80px"
            }}>
              <InputLabel id="departure">Depart</InputLabel>
              <Select
                labelId="departure-select-label"
                id="departure"
                value={destination}
                label="Depart"
                onChange={handleChange}
              >
                <MenuItem destination={10}>Thailand</MenuItem>
                <MenuItem destination={20}>New York</MenuItem>
                <MenuItem destination={30}>India</MenuItem>
              </Select>
            </FormControl>
            <span className="to">To</span>
            <FormControl style={{
                width: "24%",
                backgroundColor: "#E8E8E8",
                marginLeft: "16%",
                marginTop: "80px"
            }}>
              <InputLabel id="arrive">Arrive</InputLabel>
              <Select
                labelId="arrive-select-label"
                id="arrive"
                value={destination}
                label="Arrive"
                onChange={handleChange}
              >
                <MenuItem destination={10}>Germany</MenuItem>
                <MenuItem destination={20}>Japan</MenuItem>
                <MenuItem destination={30}>New York</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Card>
      </div>
      <Footerr />
    </div>
  );
}

export default LandingPage;
