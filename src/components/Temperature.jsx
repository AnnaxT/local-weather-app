import React from 'react';
import {Box, Typography, Switch, FormControlLabel} from '@mui/material';


  const Temperature = ({ temperature,currentWeather, onChange, unit }) => {

   
    const currentUnit = unit === "C" ? <span>&#8451;</span> : <span>&#8457;</span>
    
    return (
        <Box sx={{mt:2, mb:2}}>
            <div style={{backgroundColor: '#6882a0', width: '100%', padding:'15px'}}>
                <Typography variant="h2"  sx={{mb:1, fontWeight:400}}> {temperature} {currentUnit} </Typography>
                <Typography variant="h5"> {currentWeather} </Typography>
            </div>
            <FormControlLabel 
                control={<Switch  />}
                sx={{mt:3, fontSize: 3}}
                onChange={() => onChange()}
                label={<Typography variant="h6">Show in &#8457;</Typography>}

            />
        </Box>
    )
}

export default Temperature;