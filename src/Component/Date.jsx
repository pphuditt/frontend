import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import parse from 'html-react-parser';
import { EditorState} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import RichEditorExample from "./Editor";
import CustomDialog from "./CustomDialog";
import RouteForm from "./Popup/RouteForm";
import { login,model } from "../service/api";

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
        </div>
    );
};

export default DateTest;