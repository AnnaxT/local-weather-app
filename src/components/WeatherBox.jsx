import React from 'react';
import { Paper, Typography } from '@mui/material'
import Temperature from './Temperature';
import Loader from './Loader';

const container = {
    width: {
        sm: '500px',
    },
    height: '350px',
    backgroundColor: '#1d4370',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 'auto',    
    opacity: '0.9',
    '@media screen and (max-width: 414px)': {
        width:'100vw',
    },
}

const WeatherBox = (props) => {

    const {location, country, temperature, currentWeather, unit, onChange, loading} = props;

    return(
  <Paper sx={container} elevation={8}>
        {loading && (<Loader />)}
       {location && (<Typography variant="h4" sx={{p: 2}}>{location}, {country} </Typography>) }
      { temperature && ( <Temperature  temperature={temperature} onChange={onChange} unit={unit} currentWeather={currentWeather}/>)}
       
    

  </Paper>
    )
}

export default WeatherBox;