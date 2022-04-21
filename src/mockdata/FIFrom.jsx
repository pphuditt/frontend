import { FormControl, InputLabel, MenuItem, Select, TextField ,Button,Grid,Box} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import { useForm } from 'react-hook-form';
import { useState,useEffect } from "react";

const FIForm = (props) => {

    const [aircraft_reg_num,setReg] = useState("");
    const [selectionData,setSel] = useState([]);

    const onsubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
    };

    useEffect(() => {
        setSel(["HS-123","HS-VHF"]);
    },[]);
    // don't forget to set default value from props  and change select data
    return (
        <form onSubmit={onsubmit}>
            <Box marginLeft={2} marginTop={1} sx={{maxWidth:350}}>
            <Grid container display="column" rowSpacing={2}>
                <Grid item xs={12}>
                    <h1>Flight instance form</h1>
                    <TextField label="Instance ID" disabled fullWidth></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Flight ID" disabled  fullWidth></TextField>
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DateTimePicker
                        label="Flight date"
                        value={props.date}
                        disabled
                        renderInput={(params) => <TextField  fullWidth {...params} />}
                    />            
                    </LocalizationProvider>
                </Grid>
                <Grid container item display="row" spacing={1}>
                    <Grid item xs={12}>
                        <InputLabel>Aircraft reg number</InputLabel>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <Select id="reg-select" sx={{width:170}} onChange={(event) => {setReg(event.target.value)}}>
                            {selectionData.map((number) =>{
                            return (<MenuItem value={number}>{number}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>

        </form>
    );
};

export default FIForm;