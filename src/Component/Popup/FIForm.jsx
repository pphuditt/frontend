import {Box,Grid,TextField,FormControl,Select,InputLabel,MenuItem,Button} from '@mui/material';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import authHeader from "../../service/AuthProvider";


const FIForm = (props) => {

    const {isedit,data,refresh,page,closeFunc} = props;
    const navigate = useNavigate();
    const defaultID = data.instanceId;
    const defaultFID = data.flightId;
    const defaultDate = data.flightDate;
    const defaultAircraft = data.aircraftRegNum;

    const {register,errors,handleSubmit} = useForm();
    const [aircraftArr,setArr] = useState([]);
    const [selAircraft,setAircraft] = useState(defaultAircraft);

    const onSubmit = (item) => {
        api.put(`fi/${defaultID}`,{
            aircraftRegNum: selAircraft
        },{headers:authHeader()})
        .then((res) => {
            closeFunc();
            refresh(page);
        }).catch((err) => {
            const res = err.response;
            alert(res.status+" : "+res.data);
        });
    };

    useEffect(() => {
        api.get(`aircraft`,{headers: authHeader()})
        .then((res) =>{
            let tmp1 = res.data;
            let tmp2 = tmp1.map((item) => item.regNum);
            setArr(tmp2);
        });
    },[]);

    return (
        <form   onSubmit={handleSubmit(onSubmit)}>
            <Box marginLeft={2} marginฺBottom={2} sx={{maxWidth:350}}>
                <Grid container display="column" rowSpacing={2}>
                    <h1>Flight instance form</h1>
                    <Grid item xs={12}>
                        <TextField label="Instance ID" defaultValue={defaultID} disabled={isedit} required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField label="Flight ID" defaultValue={defaultFID} disabled={isedit} required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Flight Date" defaultValue={defaultDate} disabled={isedit} required fullWidth></TextField>
                    </Grid>
                    <Grid item xs={12}> 
                    <FormControl>
                        <InputLabel id="aircraft-select-label">Aircraft</InputLabel>
                        <Select labelId="aircraft-select-label" defaultValue={defaultAircraft} id="aircraft-select" label="Aircraft" sx={{width:350}} onChange={(event) => {setAircraft(event.target.value);}}>
                        {aircraftArr.map((aircraft) =>{
                        return (<MenuItem value={aircraft}>{aircraft}</MenuItem>)
                        })}
                        </Select>
                    </FormControl>
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