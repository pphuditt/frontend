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
import * as React from "react";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import authHeader from "../../service/AuthProvider";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import mileimg from "./mileimg.svg";
import covidimg from "./covidimg.svg";
import birthdayimg from "./birthdayimg.svg";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const [depart, setDepart] = React.useState("");
  const [arrive, setArrive] = React.useState("");
  const [airport1, setAirport1] = React.useState([]);
  const [airport2, setAirport2] = React.useState([]);
  const [date, setDate] = React.useState(moment());
  const minDate = moment();
  const navigate = useNavigate();

  const clickEventHandler = () => {
    if (depart === null || arrive === null) return alert("Please select your destination");
    else
    navigate(`../search/${depart}.${arrive}.${date.format('YYYY-MM-DD')}`);
  };

  useEffect(() => {
    api
      .get("airport", {
        headers: authHeader(),
      })
      .then((res) => {
        let tmp1 = res.data;
        let tmp2 = [];
        tmp1.map((item) => {
          tmp2.push(item.code);
        });
        setAirport1(tmp2);
        setAirport2(tmp2);
      });
  }, []);


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
                      if(event.target.value!=="BKK"){
                        setArrive("BKK");
                      }
                      setDepart(event.target.value);
                    }}
                  >
                    {airport1.map((to) => {
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
                    {airport2.map((to) => {
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
                    minDate={minDate}
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
      <Grid container display="row" rowSpacing={5}>
        <div
          style={{ position: "relative", margin: "0 auto", textAlign: "left" }}
        >
          <Grid container item spacing={3}>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image={mileimg}
                    alt="mile"
                  />
                  <CardContent>
                    <Typography variant="body2" color="red">
                      1 ~ 15 May 2022
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h5" component="div">
                      บินแลกไมล์
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      สะสมไมล์เที่ยวบินเพื่อแลกตั๋ว บินฟรี ไม่ว่าจะเอเชีย ยุโรป
                      หรือ อเมริกา ก็แลกได้
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      navigate("../mile");
                    }}
                  >
                    more details . .
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image={covidimg}
                    alt="covid"
                  />
                  <CardContent>
                    <Typography variant="body2" color="red">
                      1 ~ 15 May 2022
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h5" component="div">
                      เที่ยวสู้ COVID-19
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ยุคโควิดเราไม่หวั่น กายพร้อม ใจพร้อมลุยเอเชีย ยุโรป หรือ
                      อเมริกา
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      navigate("../covid");
                    }}
                  >
                    more details . .
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="320"
                    image={birthdayimg}
                    alt="birthday"
                  />
                  <CardContent>
                    <Typography variant="body2" color="red">
                      ไม่มีกำหนดการสิ้นอายุโปรโมชัน
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h5" component="div">
                      สุขสันต์วันเกิด
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ถึงเดือนเกิดทั้งทีต้องลาพัก ร้อนสักหน่อย ไม่ว่าจะเอเชีย
                      ยุโรป หรือ อเมริกา
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      navigate("../birthday");
                    }}
                  >
                    more details . .
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>

        <Grid item xs={12}>
          <Footerr />
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
