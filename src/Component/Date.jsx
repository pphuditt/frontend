import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { Button, Dialog, DialogActions, DialogTitle, Icon, TextField,Box,Grid, Typography } from "@mui/material";
import { useState } from "react";
import parse from 'html-react-parser';
import { EditorState} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import RichEditorExample from "./Editor";
import CustomDialog from "./CustomDialog";
import RouteForm from "./Popup/RouteForm";
import { login,model } from "../service/api";
import StarIcon from '@mui/icons-material/Star';

const signIn = () =>{
    console.log("click");
    console.log(login('parichaya@gmail.com','12123'));
};

const signOut = () => {
    console.log("out")
    localStorage.removeItem("user");
};

const getTest = () => {
    console.log("get");
    console.log(model());
};

const DateTest = () => {


    return (
        <div>
            {/* <Button variant="contained" onClick={signIn} color="success">Login</Button> */}
            {/* <Button variant="contained" onClick={signOut} color="error">Logout</Button> */}
            {/* <Button variant="contained" onClick={getTest} >getTest</Button> */}
            <Box sx={{maxWidth:350,backgroundColor:'#fefefe',paddingLeft:4,paddingTop:4,paddingBottom:4}}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            Title
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <StarIcon></StarIcon>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={3}>
                            <Typography variant="h5">Value</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">หน่วย</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default DateTest;