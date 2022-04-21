import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { Button, InputLabel, TextField, Grid,Box } from "@mui/material";
import { useState } from "react";
import parse from 'html-react-parser';
import { EditorState,convertFromHTML,ContentState} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import RichEditorExample from "../Editor";
import { useForm } from 'react-hook-form';
import moment from 'moment';
import { useNavigate } from "react-router-dom";
import {api} from '../../service/api';
import authHeader from "../../service/AuthProvider";


function htmlEscape(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\//g, '&#x2F;');
}

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}


const PromotionForm = (props) => {

    const {isedit,data,refresh,closeFunc,page} = props;
  
    const blocksFromHTML = convertFromHTML(htmlDecode(isedit ? data.description: ""));
    const backup = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap,
    );
    
    const defaultTitle = isedit ? data.title:"";
    const defaultID = isedit ? data.id:"";
    const defaultDiscount = isedit ? data.discountAmount:0;
    const defaultEnd = isedit ? moment(data.endDate):moment();
    const defaultDesc = isedit ? EditorState.createWithContent(backup):EditorState.createEmpty();
    const lockPK = isedit ? true:false;

    const { register,errors,handleSubmit} = useForm();
    const [end_date,setEnd] = useState(defaultEnd);
    const [editorState, setEditorState] = useState(defaultDesc);
    const navigate = useNavigate();

 
    const condition_string ="<p><br></p>";
    const htmlString = () => stateToHTML(editorState.getCurrentContent());
    const submit_cont = condition_string === htmlString;

    const onSubmit = (item) => {
        if(isedit){
            api.put(`promotion/${defaultID}`,{
                    title:item.title,
                    description:htmlEscape(htmlString()),
                    discountAmount:item.discountAmount,
                    endDate:end_date.format('YYYY-MM-DD')
                },
                {
                    headers: authHeader()
                }
            ).then((res) => {
                console.log(res.data);
                closeFunc();
                refresh(page);
            });
        }else{
            api.post(`promotion`,{
                id:item.id,
                title:item.title,
                description:htmlEscape(htmlString()),
                discountAmount:item.discountAmount,
                endDate:end_date.format('YYYY-MM-DD')
            },
            {
                headers: authHeader()
            }
            ).then((res) => {
                console.log(res.data);
                navigate(0);
            });
        }
    };
    
    const button = submit_cont ? <Button type="submit" color="success" variant="contained" disabled fullWidth>Submit</Button>:<Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginLeft={2} marginTop={1} marginRight={2}>
        <Grid container display="column" rowSpacing={2}>
            <Grid item xs={12}>
                <h1>Promotion form</h1>
                <TextField label="Promotion ID" defaultValue={defaultID} disabled={lockPK} autoComplete='none' type="text" required fullWidth {...register("id")}></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Title" defaultValue={defaultTitle} autoComplete='none' required fullWidth {...register("title")}></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Discount" defaultValue={defaultDiscount} autoComplete='none' required fullWidth {...register("discountAmount")}></TextField>
            </Grid>
            <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                    <DateTimePicker
                        label="End of the promotion"
                        value={end_date}
                        onChange={(newValue) => {
                          setEnd(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />            
                    </LocalizationProvider>
                </Grid>
            <Grid item xs={12}>
                <InputLabel>Description</InputLabel>
                <RichEditorExample editorState={editorState} onChange={setEditorState}/>
            </Grid>
            <Grid item xs={2}>
                {button}
            </Grid>
        </Grid>
        </Box>
    </form>

    );
};

export default PromotionForm;