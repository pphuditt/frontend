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


    return ;
};

export default DateTest;