import {Box,Grid,TextField,Button} from '@mui/material';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import authHeader from "../../service/AuthProvider";
import moment from 'moment';
import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";

const UserForm = (props) => {

    const {isedit,data,refresh,page,closeFunc} = props;
    const defaultID = data?.id;
    const defaultfName = data?.fullName?.split(" ")[0];
    const defaultlName = data?.fullName?.split(" ")[1];
    const defaultDOB = moment(data.DOB);

    const {register,errors,handleSubmit} = useForm();
    const [dob,setDOB] = useState(defaultDOB);

    const onSubmit = (item) => {
        api.put(`user/${defaultID}`,{
            firstName: item.fName,
            lastName: item.lName,
            DOB: dob.format("YYYY-MM-DD"),
        },{headers:authHeader()})
        .then((res) => {
            closeFunc();
            refresh(page);
        }).catch((err) => {
            const res = err.response;
            alert(res.status+" : "+res.data);
        });
    };

    return (
        <form   onSubmit={handleSubmit(onSubmit)}>
            <Box marginLeft={2} marginฺBottom={2} sx={{maxWidth:350}}>
                <Grid container display="column" rowSpacing={2}>
                    <h1>Flight instance form</h1>
                    <Grid item xs={12}>
                        <TextField label="First name" defaultValue={defaultfName} autoComplete="none" required fullWidth {...register("fName")}></TextField>
                    </Grid>
                    <Grid item xs={12}> 
                        <TextField label="Last name" defaultValue={defaultlName} autoComplete="none" required fullWidth {...register("lName")}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={DateAdapter}>
                      <DatePicker
                          label="Date of Birth"
                          value={dob}
                          onChange={(newValue) => {
                            setDOB(newValue);
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

export default UserForm;