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

    /* ----------- mobile devices landscape mode ----------- */
    '@media only screen and (max-device-width: 915px) and (orientation: landscape)': {
        height: 'auto',
        pt: 3,
        pb: 3,
         },
}

const videoStyles = {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    top: '0',
    left: '0',
    objectFit: 'cover',
    zIndex: '-1',
    opacity:' 0.5',
    margin: '0',
}


const Layout = ({videoSrc, children}) => {

    const videoRef= useRef();
    // changing the playbackRate parameter
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.3; 
    }

    return(
        <Paper sx={layout} >
        <video autoPlay loop muted ref={videoRef} onCanPlay={() => setPlayBack()} key={videoSrc} style={videoStyles} playsInline>
                    <source src={videoSrc} type='video/mp4' />
                    <source src={videoSrc} type='video/mov' />
                    <source src={videoSrc} type='video/webm' />
                    
        </video >
        {children}
        </Paper>         
    )
}

export default Layout;