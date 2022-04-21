import { TextField ,Button , Grid,Box} from "@mui/material";
import { useForm } from 'react-hook-form';

const CountryForm = (props) => {

    const { register,errors,handleSubmit} = useForm(); 
    const {isedit , data} = props;

    const code_field = isedit ? data.code: "";
    const name_field = isedit ? data.name : "";
    const continent_field = isedit ? data.continent: "";                     
    
    const onsubmit = (data) => {
        console.log(data.code);
        console.log(data.name);
        console.log(data.continent);
    };

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
            <Box marginLeft={2} sx={{maxWidth:350}}>
            <Grid container display="column" rowSpacing={2}>
                <h1>Country form</h1>
                <Grid item xs={12}>
                    <TextField label="Country code" inputProps={{pattern: '^[A-Z]{3}'}} autoComplete='none' type="text" defaultValue={code_field} required fullWidth {...register("code")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Country name" autoComplete='none' defaultValue={name_field} required fullWidth {...register("name")}></TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Continent" autoComplete='none' defaultValue={continent_field} required fullWidth {...register("continent")}></TextField> 
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" color="success" variant="contained" fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </Box>
        </form>
    );
};

export default CountryForm;