import { FormControl, InputLabel, MenuItem, Select, TextField ,Button , Grid,Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { api } from "../../service/api";
import authHeader from "../../service/AuthProvider";
import { useNavigate } from "react-router-dom";

const RouteForm = (props) => {

    const { register,errors,handleSubmit} = useForm();
    const [to_airport,setTo] = useState();
    const [selectItem,setSelect] = useState([]);
    const navigate = useNavigate();
    const {isedit,data,refresh,closeFunc,page} = props;

    const defaultCode = isedit ? data.code :""  ;
    const defaultTo = isedit ? data.toAirport: "NRT";

    const onsubmit = (item) => {
        if(isedit){
            api.put(`route/${defaultCode}`,{
                    fromAirport:"BKK",
                    toAirport:to_airport
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
            api.post(`route`,{
                code: item.code,
                fromAirport:"BKK",
                toAirport:to_airport
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
    
    useEffect(() =>{
        axios.get("http://localhost:8080/api/airport",{
            headers : authHeader()
        })
        .then((res) =>{
            let tmp1 = res.data;
            let tmp2 = [];
            tmp1 = tmp1.filter((airport) => {
                return airport.code !== "BKK"
            });
            tmp1.map((item) => {
                tmp2.push(item.code);
            });
            setSelect(tmp2);
        });
    },[]);

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Box marginLeft={4} marginBottom={2} marginRight={4}>
            <Grid container display="column" rowSpacing={2}>
                <h1>Route form</h1>
                <Grid item xs={12}>
                    <TextField label="Route code" inputProps={{pattern: '^CU\\d{3}'}} defaultValue={defaultCode} autoComplete='none' type="text" required fullWidth {...register("code")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="From airport" autoComplete='none' defaultValue="BKK" disabled required fullWidth {...register("from_airport")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                            <InputLabel id="select-label">To airport</InputLabel>
                            <Select labelid="select-label" id="select" label="Main zone" sx={{width:170}} defaultValue={defaultTo} onChange={(event) => {setTo(event.target.value)}}>
                            {selectItem.map((to) =>{
                            return (<MenuItem value={to}>{to}</MenuItem>)
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

export default RouteForm;