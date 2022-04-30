import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Navbarn from "../Navbar-n";
import Footerr from "../Footerr";
import Signup from "../signup/Signup";
//import "./Signin.css";
import { TextField, Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { login } from "../../service/api";
import { useState } from "react";

function Signin() {
  const [emailInput, setEmailInput] = useState("");
  const handleEmailInputChange = (e) => {
    console.log(e.target.value);
    setEmailInput(e.target.value);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signIn = () => {
    console.log("click");
    console.log(login(emailInput, values.password));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container display="row" rowSpacing={29.1}>
        <Grid item xs={12}>
          <Navbarn />
        </Grid>
        <div
          style={{ position: "relative", margin: "0 auto", textAlign: "left" }}
        >
          <Box marginTop={40} sx={{ maxWidth: 500 }}>
            <Grid container display="row" rowSpacing={3}>
              <Grid item xs={12}>
                <div>
                  <text
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: "48%",
                      fontSize: "50px",
                      fontFamily: "Podkova, serif",
                    }}
                    className="signin-text"
                  >
                    Sign in
                  </text>
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputProps={{
                    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
                  }}
                  type="text"
                  className="enteremail"
                  value={emailInput}
                  onChange={handleEmailInputChange}
                  label="Enter your email address"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  variant="outlined"
                  className="enterpassword"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Link
                  style={{
                    //position: "absolute",
                    float: "right",
                    fontSize: "15px",
                    fontFamily: "Podkova, serif",
                    color: "rgb(0, 38, 255)",
                  }}
                  to="/signup"
                  className="sign-up-textlink"
                >
                  Sign up
                </Link>
                <Button
                  onClick={signIn}
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#C07D6F",
                    borderColor: "#C07D6F",
                    top: "20%",
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
                  Log in
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

export default Signin;
