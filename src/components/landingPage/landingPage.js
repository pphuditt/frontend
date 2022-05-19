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
import moment from "moment";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as React from "react";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import authHeader from "../../service/AuthProvider";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const [depart, setDepart] = React.useState("");
  const [arrive, setArrive] = React.useState("");
  const [airport, setAirport] = React.useState([]);
  const [date, setDate] = React.useState(moment());

  const navigate = useNavigate();

  // const {depart, arrive, date} = props;

  
  const clickEventHandler = () => {
    if (depart === null || arrive === null) return alert("Please select your destination");
    else
    navigate("../availableFlight");
  };

  useEffect(() => {
    api
      .get("airport", {
        headers: authHeader(),
      })
      .then((res) => {
        let tmp1 = res.data;
        let tmp2 = [];
        // tmp1 = tmp1.filter((airport) => {
        //     return airport.code !== "BKK"
        // });
        tmp1.map((item) => {
          tmp2.push(item.code);
        });
        setAirport(tmp2);
      });
  }, []);

  // const handleChange = (event) => {
  //   setDest(event.target.destination);
  // };

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
            <Grid container spacing={2} paddingTop={10} paddingLeft={20}>
              <Grid item xs={4}>
                <FormControl
                  style={{
                    width: "100%",
                    backgroundColor: "#E8E8E8",
                  }}
                >
                  <InputLabel id="departure">From</InputLabel>
                  <Select
                    labelId="departure-select-label"
                    id="departure"
                    value={depart}
                    label="From"
                    onChange={(event) => {
                      setDepart(event.target.value);
                      // console.log(event.target.value);
                    }}
                  >
                    {airport.map((to) => {
                      return <MenuItem value={to}>{to}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl
                  style={{
                    width: "100%",
                    backgroundColor: "#E8E8E8",
                  }}
                >
                  <InputLabel id="arrive">To</InputLabel>
                  <Select
                    labelId="arrive-select-label"
                    id="arrive"
                    value={arrive}
                    label="To"
                    onChange={(event) => {
                      setArrive(event.target.value);
                    }}
                  >
                    {airport.map((to) => {
                      if (depart !== "BKK") return <MenuItem value={to}>{"BKK"}</MenuItem>;
                      else
                      return <MenuItem value={to}>{to}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    label="Departure Date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              paddingLeft={0}
              paddingRight={0}
              paddingTop={4}
              textAlign="center"
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    width: "24%",
                    height: "64px",
                    backgroundColor: "#F4C300",
                    fontSize: 24,
                    "&:hover": { backgroundColor: "#DEB100" },
                  }}
                  onClick = {clickEventHandler}
                >
                  Find
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </div>
      <Footerr />
    </div>
  );
}

export default LandingPage;
