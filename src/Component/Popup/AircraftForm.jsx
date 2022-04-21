import { TextField ,Button , Grid,Box} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from 'moment';
import {api} from '../../service/api';
import authHeader from "../../service/AuthProvider";

const AircraftForm = (props) => {

    const {isedit,data} = props;
    const defaultFF = isedit ? data.firstFlight: moment();
    const defaultDeliver = isedit ? data.develierDate :moment();
    const defaultICAO = isedit ? data.ICAOCode : "";
    const defaultReg = isedit ? data.regNum : "";
    const defaultMSN = isedit ? data.MSN : "";
    const lockPK = isedit ? true:false;

    const { register,errors,handleSubmit} = useForm();
    const [ff_date,setFFDate] = useState(defaultFF);
    const [deliver_date,setDeliverDate] = useState(defaultDeliver);
    
    const onsubmit = (item) => {
        if(isedit){
            api.put(`aircraft/${item.reg_number}`,{
                ICAOCode: item.ICAO_code,
                MSN: item.MSN,
                firstFlight: ff_date.format('YYYY-MM-DD'),
                deliverDate: deliver_date.format('YYYY-MM-DD')
                },
                {
                    headers: authHeader()
                }
            ).then((res) => {
                console.log(res.data);
            });
        }else{
            api.post(`aircraft`,{
                regNum: item.reg_number,
                ICAOCode: item.ICAO_code,
                MSN: item.MSN,
                firstFlight: ff_date.format('YYYY-MM-DD'),
                deliverDate: deliver_date.format('YYYY-MM-DD')
            },
            {
                headers: authHeader()
            }
            ).then((res) => {
                console.log(res.data);
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Box marginLeft={2} marginTop={1} sx={{maxWidth:350}}>
            <Grid container display="column" rowSpacing={2}>
                <h1>Aircaft form</h1>
                <Grid item xs={12}>                    
                    <TextField label="Registration number" defaultValue={defaultReg} disabled={lockPK}  autoComplete='none' required fullWidth {...register("reg_number")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    {/* change to select that get icao code from model */}
                    <TextField label="ICAO" defaultValue={defaultICAO} autoComplete='none' required fullWidth {...register("ICAO_code")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="MSN" defaultValue={defaultMSN} autoComplete='none' required fullWidth {...register("MSN")}></TextField> 
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                        label="First flight date"
                        value={ff_date}
                        onChange={(newValue) => {
                          setFFDate(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />            
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                        label="Deliver date"
                        value={deliver_date}
                        onChange={(newValue) => {
                          setDeliverDate(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                    />            
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>
            

        </form>
    );
};

export default AircraftForm;