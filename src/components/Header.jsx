import React from 'react';
import { Typography, Paper } from '@mui/material';


const styles = {

    width:  {
        sm:  '500px',
      },
    height: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.9',
    margin: 'auto',
    backgroundColor: '#1d4370',
    '@media screen and (max-width: 414px)': {
        width:'100vw',
    }
}

const Header = () => {

    return (
        <Paper elevation={15} sx={styles}>
             <Typography component="h1" variant="h2" sx={{fontWeight:400}} color="textPrimary">
                Weather App
            </Typography> 
        </Paper>

    )
}

export default Header;