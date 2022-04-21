import { TextField ,Button , Grid,Box} from "@mui/material";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import {api} from '../../service/api';
import authHeader from "../../service/AuthProvider";

const ModelForm = (props) => {
    const {isedit,data,closeFunc,refresh,page} = props;
    const { register,errors,handleSubmit} = useForm();    
    const navigate = useNavigate();

    const defaultICAO = isedit ? data.ICAOCode: "";
    const defaultModel = isedit ? data.name: "";
    const defaultSeats = isedit ? data.seats: "";
    const defaultAgent = isedit ? data.agent: "";
    const defaultSpeed = isedit ? data.speed: "";
    const lockPK = isedit ? true:false;
    
    const onsubmit = (item) => {
        if(isedit){
            api.put(`model/${defaultICAO}`,{
                    name:item.name,
                    seats:item.seats,
                    agent:item.agent,
                    speed:item.speed
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
            api.post(`model`,{
                ICAOCode:item.ICAOCode,
                name:item.name,
                seats:item.seats,
                agent:item.agent,
                speed:item.speed
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

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Box marginLeft={2} marginBottom={2} sx={{maxWidth:350}}>
            <Grid container display="column" rowSpacing={2}>
                <h1>Model form</h1>
                <Grid item xs={12}>
                    <TextField label="ICAO code" defaultValue={defaultICAO} disabled={lockPK} autoComplete='none' type="text" required fullWidth {...register("ICAOCode")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Model name" defaultValue={defaultModel} autoComplete='none' required fullWidth {...register("name")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Seats" inputProps={{pattern: "\\d*"}} defaultValue={defaultSeats} autoComplete='none' required fullWidth {...register("seats")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Agent" autoComplete='none' defaultValue={defaultAgent} required fullWidth {...register("agent")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Speed (mph)" inputProps={{pattern: "^\\d*\\.\\d{2}$"}} defaultValue={defaultSpeed} autoComplete='none' required fullWidth {...register("speed")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>
        </form>
    );
};

export default ModelForm;