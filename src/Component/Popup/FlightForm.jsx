import { FormControl, InputLabel, MenuItem, Select, TextField ,Button,Grid,Box} from "@mui/material";
import { TimePicker, LocalizationProvider } from "@mui/lab";
import { useForm } from 'react-hook-form';
import { useState,useEffect } from "react";
import { api } from "../../service/api";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from 'moment';
import authHeader from "../../service/AuthProvider";
import { useNavigate } from "react-router-dom";

const FlightForm = (props) => {

    const {isedit,data,refresh,page,closeFunc} = props;

    const defaultID = isedit ? data.flightId:"";
    const defaultTime = isedit ? moment(data.departureTime,"HH/mm/ss"):moment(new Date(),"HH/mm/ss");
    const defaultFare = isedit ? data.fare:"";
    const defaultICAO = isedit ? data.ICAOCode:"";
    const defaultRoute = isedit ? data.routeCode:"";
    const lockPK = isedit ? true:false;

    const navigate = useNavigate();
    const { register,errors,handleSubmit} = useForm();
    const [departureTime,setTime] = useState(defaultTime);
    const [selICAO,setSelICAO] = useState(defaultICAO);
    const [selRoute,setSelRoute] = useState(defaultRoute);
    const [ICAOarr,setArrICAO] = useState([]);
    const [Routearr,setArrRoute] = useState([]);

    const number_regex = "^\\d*(\\.\\d*)?$";

    const onsubmit = (item) => {
        console.log(departureTime.format('HH:mm:00'));
        console.log(selICAO);
        console.log(selRoute);
        if(isedit){
            api.put(`flight/${defaultID}`,{
                routeCode:defaultRoute,
                departureTime:defaultTime.format("HH:mm:00"),
                fare:item.fare,
                ICAOCode:selICAO
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
            api.post(`flight`,{
                routeCode:selRoute,
                departureTime:departureTime.format("HH:mm:00"),
                fare:item.fare,
                ICAOCode:selICAO
            },
            {
                headers: authHeader()
            }
            ).then((res) => {
                console.log(res.data);
                closeFunc();
                console.log(page);
                navigate(0);
            });
        }
    };

    useEffect(() => {
        api.get(`model`,{headers : authHeader()})
            .then(res => {
                let tmp1 = res.data;
                let tmp2 = tmp1.map((item) => item.ICAOCode);
                setArrICAO(tmp2);
            });
        api.get(`route`,{headers: authHeader()})
            .then(res => {
                let tmp1 = res.data;
                let tmp2 = tmp1.map((item) => item.code);
                setArrRoute(tmp2);
            });
    },[]);
    // don't forget to set default value from props  and change select data, derive regex from return
    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Box marginLeft={2} marginฺBottom={2} sx={{maxWidth:350}}>
            <Grid container display="column" rowSpacing={2}>
                <h1>Flight form</h1>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <TimePicker
                        label="Flight time"
                        disabled={isedit}
                        value={departureTime}
                        onChange={(value) => {setTime(value);}}
                        renderInput={(params) => <TextField  fullWidth {...params} />}
                    />            
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}> 
                    <FormControl>
                        <InputLabel id="route-select-label">Route</InputLabel>
                        <Select labelId="route-select-label" defaultValue={defaultRoute} id="route-select" label="Route" disabled={isedit} sx={{width:350}} onChange={(event) => {setSelRoute(event.target.value);}}>
                        {Routearr.map((route) =>{
                        return (<MenuItem value={route}>{route}</MenuItem>)
                        })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}> 
                    <FormControl>
                        <InputLabel id="icao-select-label">ICAO</InputLabel>
                        <Select labelId="icao-select-label" id="icao-select" defaultValue={defaultICAO} label="ICAO" sx={{width:350}} onChange={(event) => {setSelICAO(event.target.value);}}>
                        {ICAOarr.map((icao) =>{
                        return (<MenuItem value={icao}>{icao}</MenuItem>)
                        })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Fare" inputProps={{pattern: `${number_regex}`}} defaultValue={defaultFare} autoComplete='none' required fullWidth {...register("fare")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>

        </form>
    );
};

export default FlightForm;