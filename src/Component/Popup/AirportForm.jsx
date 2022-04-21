import { FormControl, InputLabel, MenuItem, Select, TextField ,Button,Grid,Box} from "@mui/material";
import { main_zone,sub_zone } from "../../mockdata/timezone";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { api } from "../../service/api";
import authHeader from "../../service/AuthProvider";
import { useNavigate } from "react-router-dom";

const AirportForm = (props) => {

    const {isedit,data,refresh,closeFunc,page} = props;
    const defaultCode = isedit ? data.code : "";
    const defaultName = isedit ? data.name : "";
    const defaultCCode = isedit ? data.countryCode : "";
    const defaultLatitude = isedit ? data.latitude: "";
    const defaultLongtitude = isedit ? data.longitude: "";
    const [defaultMainZone,defaultSubZone] = isedit ? data.timeZone.split("\/"):["Africa","Abidjan"];

    const { register,errors,handleSubmit} = useForm(); 
    const [mainZone,setMainZone] = useState(defaultMainZone);
    const [subZone,setSubZone] = useState(defaultSubZone);
    const navigate = useNavigate();


    const number_regex = "^-?\\d*\\.\\d*$";
    
    const onsubmit = (item) => {
        if(isedit){
            api.put(`airport/${defaultCode}`,{
                    countryCode:item.countryCode,
                    latitude:parseFloat(item.latitude).toFixed(6),
                    longitude:parseFloat(item.longitude).toFixed(6),
                    name:item.name,
                    timeZone:mainZone+"/"+subZone
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
            api.post(`airport`,{
                code:item.code,
                countryCode:item.countryCode,
                latitude:item.latitude,
                longitude:item.longitude,
                name:item.name,
                timeZone:mainZone+"/"+subZone
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
                <h1>Airport form</h1>
                <Grid item xs={12}>
                    <TextField label="Airport code" inputProps={{pattern: '^[A-Z]{3}'}} defaultValue={defaultCode} autoComplete='none' disabled={isedit} required fullWidth {...register("code")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Airport Name" defaultValue={defaultName} autoComplete='none' required fullWidth {...register("name")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Country code" inputProps={{pattern: '^[A-Z]{3}'}} defaultValue={defaultCCode} autoComplete='none' required fullWidth {...register("countryCode")}></TextField>
                </Grid>

                <Grid container item display="row" spacing={1}>
                    <Grid item xs={12}>
                        <InputLabel>Time zone</InputLabel>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel id="main-select-label">Main zone</InputLabel>
                            <Select labelid="main-select-label" id="main-select" label="Main zone" defaultValue={mainZone} sx={{width:170}} onChange={(event) => {setMainZone(event.target.value)}}>
                            {main_zone.map((zone) =>{
                            return (<MenuItem key={zone} value={zone}>{zone}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <InputLabel id="sub-label">Sub zone</InputLabel>
                            <Select labelid="sub-label" id='sub-selector' label="Sub zone" defaultValue={subZone} sx={{width:170}} onChange={(e) => {setSubZone(e.target.value)}}> 
                            {sub_zone[mainZone].map((zone) =>{
                            return (<MenuItem key={zone} value={zone}>{zone}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Latitude" inputProps={{pattern: `${number_regex}`}} defaultValue={defaultLatitude} autoComplete='none' required fullWidth {...register("latitude")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Longtitude" inputProps={{pattern: `${number_regex}`}} defaultValue={defaultLongtitude} autoComplete='none' required fullWidth {...register("longitude")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>
            

        </form>
    );
};

export default AirportForm;