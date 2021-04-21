import React, { useState, useEffect } from 'react';
import { WeatherStyled } from './styles';

const Weather = () => {
    const [position, setPosition] = useState({ lat: '', long: '' });
    const [data, setData] = useState({ title: '', description: '' });

    const geoLocate = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const apiKey = 'd78ea139f797861832bdb51850293361';
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`)
                .then(response => response.json())
                .then(datas => {
                    setData({ title: datas.weather[0].main, description: datas.weather[0].description })
                })
            setPosition({ lat: position.coords.latitude, long: position.coords.longitude });
        })
    }

    useEffect(() => {
        geoLocate();
    }, [])

    return (
        <WeatherStyled>
            {/* Cloud */}
            <svg viewBox='0 0 105 105'>
                <path d='M 25,60 
           a 20,20 1 0,0 0,40 
           h 50 
           a 20,20 1 0,0 0,-40 
           a 10,10 1 0,0 -15,-10 
           a 15,15 1 0,0 -35,10  
           z' />
            </svg>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </WeatherStyled>
    )
}

export default Weather;