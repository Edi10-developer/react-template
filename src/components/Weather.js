import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [position, setPosition] = useState({ lat: '', long: '' });
    const [data, setData] = useState({});

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            //setPosition({ lat: position.coords.latitude, long: position.coords.longitude });
        })
    }
    
    const apiKey = '96420e6d80d22f09002374ea99b14b86';

    useEffect(async ()=>{
        geoLocate();
         
        const result = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.long}&appid=${apiKey}`);
        console.log(result.weather);
    },[])

    return (
        <div>
            <p>{position.long}</p>
            <p>{position.lat}</p>
        </div>
    )
}

export default Weather;