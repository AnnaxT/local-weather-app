import React, {useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
import GridContainer from './components/GridContainer';
import skyVideo from './assets/animations/clear-sky.mp4';
import cloudsVideo from './assets/animations/clouds.mov';
import rainVideo from './assets/animations/rain.mp4';
import snowVideo from './assets/animations/snow.mp4';
import thunderVideo from './assets/animations/thunderstorm.mp4';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [country, setCountry] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  


  const url = "https://weather-proxy.freecodecamp.rocks/"
 
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const getGeolocation = () => {

  // check if navigator.geolocation is supported by web browser
  if(navigator.geolocation)  {
    navigator.geolocation.getCurrentPosition((position) => {
      setLoading(false);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    },
    () => {
      alert('Unable to retrieve your location');
      setLoading(false);
    });
  } else {
    alert('Geolocation is not supproted by your broswer')
    setLoading(false);
  }

}

const fetchCurrentWeather = () => {
  fetch(`${url}api/current?lat=${latitude}&lon=${longitude}`)
  .then(response => response.json())
  .then(data => {
    setLocation(data.name);
    setCountry(data.sys.country);
    setCurrentWeather(data.weather[0].main);
    setTemperature(Math.round(data.main.temp));
    setUnit('C')
  })
}

const videoSource = () => {
  switch(currentWeather.toLowerCase()) {
  case 'drizzle':
    setVideoSrc(rainVideo)
    break;
  case 'clouds':
    console.log('clouds');
    setVideoSrc(cloudsVideo)
    break;
  case 'rain':
    setVideoSrc(rainVideo)
    break;
  case 'snow':
    setVideoSrc(snowVideo)
    break;
  case 'clear':
    setVideoSrc(skyVideo)
    break;
  case 'thunderstorm':
    setVideoSrc(thunderVideo)
  }
}

   
useEffect(() => {
  getGeolocation();

  if (latitude && longitude) {
    fetchCurrentWeather();
  }

  if (currentWeather) {
    videoSource();
  }
  console.log(videoSrc);


},[latitude, longitude, currentWeather,videoSrc])


const unitConverter = () => {
  if (unit === 'C') {
    setTemperature(Math.round((temperature * 9 / 5) + 32))
    setUnit('F')
  } else {
    setTemperature(Math.round((temperature -32 ) *  5 / 9));
    setUnit('C')
  }
}


  return (
    <>
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Layout
        videoSrc={videoSrc}
      >
    <GridContainer
      location={location}
      country={country}
      temperature={temperature}
      unit={unit}
      currentWeather={currentWeather}
      onChange={unitConverter}
      loading={loading}
    />
      
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
