import * as React from "react";
import Navbar from "../Navbar";
import Footerr from "../Footerr";
import { Grid, Button, TextField } from "@mui/material";


function Signup() {
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <Navbar />
      <Footerr />
      <div>
        <text className="signup-text">Sign up</text>
      </div>
      <Grid container display="row" rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            minWidth
            className="enteremailaddress"
            id="emaila-required"
            label="Enter your email address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className="enterepassword"
            id="pass-required"
            label="Enter your password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className="confirmpassword"
            id="cpass-required"
            label="Confirm your password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className="firstName"
            id="firstname-required"
            label="First name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            className="lastName"
            id="lastname-required"
            label="Last name"
          />
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Signup;
