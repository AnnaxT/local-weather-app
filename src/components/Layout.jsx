import React, {useRef} from 'react';
import { Typography, Paper } from '@mui/material';
// import myVideo from '../assets/animations/rain.mp4';

const layout = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8297b0',
    opacity: '0.95',
    textAlign: 'center', 
}

const videoStyles = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: '0',
    left: '0',
    objectFit: 'cover',
    zIndex: '-1',
    opacity:' 0.3',
    margin: '0',

    //this doesn't work - to be fixed
    '@media screen and (maxDeviceWidth : 1024px) and (orientation: landscape)': {
        height: 'auto'
         }    
}


const Layout = ({videoSrc, children}) => {

    const videoRef= useRef();
    // changing the playbackRate parameter
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.5; 
    }

    return(
        <Paper sx={layout} >
        <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()} key={videoSrc} style={videoStyles} >
                    <source src={videoSrc} type='video/mp4' />
                    <source src={videoSrc} type='video/mov' />
                    <source src={videoSrc} type='video/webm' />
                    
        </video >
        {children}
        </Paper>         
    )
}

export default Layout;