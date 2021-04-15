import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [position, setPosition] = useState({ lat: '', long: '' });
    const [data, setData] = useState({});

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setPosition({ lat: position.coords.latitude, long: position.coords.longitude });
        })
    }
   
    const proxy = 'https://cors-anywhere.herokuapp.com/'; // It should solve CORS issues
    const apiKey = '887f19523a682aed9fee8c804ab554ad';

    useEffect(async ()=>{
        geoLocate();
         
        const result = await axios.get(`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=${apiKey}`, 
      );  
          console.log(result);
    },[])

    return (
        <div>
            <p>{position.long}</p>
            <p>{position.lat}</p>
        </div>
    )
}

export default Weather;