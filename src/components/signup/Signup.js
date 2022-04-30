import * as React from "react";
import Navbarn from "../Navbar-n";
import Footerr from "../Footerr";
import { Grid, Button, TextField, Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import Privacy from "./privacy";

function Signup() {
  const [bd_date, setBDDate] = useState(moment());

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container display="row" rowSpacing={7}>
        <Grid item xs={12}>
          <Navbarn />
        </Grid>
        <div style={{ position: "relative", margin: "0 auto", textAlign: "left" }}>
          <Box marginTop={25} sx={{ maxWidth: 700 }}>
            <Grid container display="row" rowSpacing={4}>
              <Grid item xs={12}>
                <text
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "17%",
                    fontSize: "50px",
                    fontFamily: 'Podkova, serif',
                  }}
                >
                  Sign up
                </text>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="enteremailaddress"
                  id="emaila-required"
                  label="Enter your email address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="enterepassword"
                  id="pass-required"
                  label="Enter your password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="confirmpassword"
                  id="cpass-required"
                  label="Confirm your password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="firstName"
                  id="firstname-required"
                  label="First name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="lastName"
                  id="lastname-required"
                  label="Last name"
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DatePicker
                    label="Birth day"
                    value={bd_date}
                    onChange={(newValue) => {
                      setBDDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12}>
                <Link
                  to="/privacy"
                  style={{
                    float:"right",
                    fontSize: "15px",
                    fontFamily: 'Podkova, serif',
                    color: "rgb(0, 38, 255)",
                  }}
                >
                  Privacy and Policy
                </Link>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#C07D6F",
                    borderColor: "#C07D6F",
                    top: "10%",
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "#111",
                      borderColor: "#111",
                    },
                    "&:hover": {
                      backgroundColor: "#f3a999",
                      borderColor: "#f3a999",
                      boxShadow: "none",
                    },
                    fontFamily: 'Podkova, serif',
                  }}
                >
                  Create account
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
        <Grid item xs={12}>
          <Footerr />
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;
