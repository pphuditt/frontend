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
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import mileimg from "./mileimg.svg";
import covidimg from "./covidimg.svg";
import birthdayimg from "./birthdayimg.svg";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
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
            <FormControl
              style={{
                width: "24%",
                backgroundColor: "#E8E8E8",
                marginLeft: "8%",
                marginTop: "80px",
              }}
            >
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
            <FormControl
              style={{
                width: "24%",
                backgroundColor: "#E8E8E8",
                marginLeft: "16%",
                marginTop: "80px",
              }}
            >
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
                      1 ~ 31 May 2022
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
