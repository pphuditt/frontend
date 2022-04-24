import FlightIcon from '@mui/icons-material/Flight';
import '../css/title.scss'
import {purple} from '@mui/material/colors';
import { Stack, Typography } from '@mui/material';

const formatter = {
    airport: "Airport",
    aircraft : "Aircraft",
    country : "Country",
    route : "Route",
    flight : "Flight",
    promotion : "Promotion",
    model : "Model",
    fi : "Flight instance",
    user: "User",
    ticket: "Ticket"
}

const Title = (props) => {
    return (
        <div className='title'>
        <Stack direction="row" alignItems="center gap={1}">
            <FlightIcon fontSize='large' sx={{color : purple[600]}}/>
            <Typography variant='h4'>{formatter[props.title]}</Typography>
        </Stack>
        </div>
        
    );
}

export default Title;