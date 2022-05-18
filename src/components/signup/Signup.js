import * as React from "react";
import Navbarn from "../Navbar-n";
import Footerr from "../Footerr";
import { Grid, Button, TextField, Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

function Signup() {
  const navigate = useNavigate();
  const [bd_date, setBDDate] = useState(moment());
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [cPassInput, setCpassInput] = useState("");
  const [fNameInput, setFnameInput] = useState("");
  const [lNameInput, setLnameInput] = useState("");
  //const dateForm = new Date(bd_date._d);

  const signUp = () => {
    if (cPassInput !== passInput) {
      alert("password does not match !!");
      return;
    }
    api
      .post("user", {
        username: emailInput,
        password: passInput,
        firstName: fNameInput,
        lastName: lNameInput,
        DOB: bd_date.format("YYYY-MM-DD"),
        //dateForm.getFullYear()+'-'+(dateForm.getMonth() + 1)+'-'+dateForm.getDate()
      })
      .then((response) => {
        navigate("../signin");
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container display="row" rowSpacing={7}>
        <Grid item xs={12}>
          <Navbarn />
        </Grid>
        <div
          style={{ position: "relative", margin: "0 auto", textAlign: "left" }}
        >
          <Box marginTop={25} sx={{ maxWidth: 700 }}>
            <Grid container display="row" rowSpacing={4}>
              <Grid item xs={12}>
                <text
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "17%",
                    fontSize: "50px",
                    fontFamily: "Podkova, serif",
                  }}
                >
                  Sign up
                </text>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  inputProps={{
                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
                  }}
                  value={emailInput}
                  onChange={(newValue) => {
                    console.log(newValue.target.value);
                    setEmailInput(newValue.target.value);
                  }}
                  className="enteremailaddress"
                  id="emaila-required"
                  label="Enter your email address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="password"
                  fullWidth
                  value={passInput}
                  onChange={(newValue) => {
                    console.log(newValue.target.value);
                    setPassInput(newValue.target.value);
                  }}
                  className="enterepassword"
                  id="pass-required"
                  label="Enter your password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  value={cPassInput}
                  onChange={(newValue) => {
                    console.log(newValue.target.value);
                    setCpassInput(newValue.target.value);
                  }}
                  className="confirmpassword"
                  id="cpass-required"
                  label="Confirm your password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={fNameInput}
                  onChange={(newValue) => {
                    console.log(newValue.target.value);
                    setFnameInput(newValue.target.value);
                  }}
                  className="firstName"
                  id="firstname-required"
                  label="First name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={lNameInput}
                  onChange={(newValue) => {
                    console.log(newValue.target.value);
                    setLnameInput(newValue.target.value);
                  }}
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
                      console.log(newValue._d);
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
                    float: "right",
                    fontSize: "15px",
                    fontFamily: "Podkova, serif",
                    color: "rgb(0, 38, 255)",
                  }}
                >
                  Privacy and Policy
                </Link>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={signUp}
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
                    fontFamily: "Podkova, serif",
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
