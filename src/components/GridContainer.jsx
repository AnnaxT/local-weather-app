import React from 'react';
import Grid from '@mui/material/Grid';
import Header from './Header';
import WeatherBox from './WeatherBox';

const GridContainer = (props) => {

    return (
        <Grid container spacing={3}  direction="column"> 
            <Grid item xs={6} md={6}>
                <Header />
            </Grid>
            <Grid item xs={6} md={6}>
                 <WeatherBox {...props}/>
            </Grid>
        </Grid>
    )
}

export default GridContainer;