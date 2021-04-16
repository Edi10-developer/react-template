import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [position, setPosition] = useState({ lat: '', long: '' });
   /// const [data, setData] = useState({ title: '', description: '' });

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const apiKey = '887f19523a682aed9fee8c804ab554ad';
            const result = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
/*
            const weatherTitle = result.weather[0].main;
            const weatherDescription = datas.data.weather[0].description;
            setData({ title: weatherTitle, description: weatherDescription })
            console.log(data)
            /*
            const weatherDescription = datas.data.weather[0].description;
            const re = () => { setData({ title: weatherTitle, description: weatherDescription })} */
        })
        //setPosition({ lat: position.coords.latitude, long: position.coords.longitude });

       // console.log(weatherTitle)
    }

    useEffect(async () => {
        geoLocate();
    }, [])

    return (
        <div>
            <h3>Weather Component</h3>
        </div>
    )
}

export default Weather;