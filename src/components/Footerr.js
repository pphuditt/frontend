import './Footerr.css';

import React from 'react';
import { Grid } from '@mui/material';

function Footerr() {
    return (
        <div className="footer-container">
            <Grid className='footer' container spacing={3}>
                <Grid className="footer-heading airway" item xs={4}>
                    <p>Nglaew Airways</p>
                </Grid>
                <Grid className="footer-heading contact" item xs={4}>
                    <p>Contact us</p>
                </Grid>
                <Grid className='footer-heading-two' item xs={4}>
                    <p>0863281080</p>
                    <p>bewithfil@gmail.com</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footerr;