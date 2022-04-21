import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Navbar from '../Navbar';
import Footerr from '../Footerr';
import Signup from '../signup/Signup';
import './Signin.css';
import {TextField} from '@mui/material';
import {Button} from '@mui/material';


function Signin(){

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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

    return(
    <div>
        <Navbar/>
        <div >
            <text className='signin-text'>Sign in</text>
        </div>
         <TextField
            className='enteremail'
            id="demo-helper-text-aligned-1"
            label="Enter your email address"
        /> 
        {/* <TextField
            className='enterpassword'
            type="password"
            id="demo-helper-text-aligned-2"
            label="Enter your password"
        />  */}
        <FormControl  variant="outlined" className='enterpassword'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained"
            sx={{backgroundColor: '#000000', 
            borderColor: '#111',
            width: '600px',
            right: '600px',
            top: '400px',
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#111',
                borderColor: '#111'},
            '&:hover': {
                backgroundColor: '#969C9F',
                borderColor: '#969C9F',
                boxShadow: 'none',
            },
            fontFamily: ['Arial', 'Helvetica', 'sans-serif']}}
        >Log in</Button>
        <Footerr/>
    </div>
    );
};

export default Signin;