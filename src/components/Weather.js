import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [position, setPosition] = useState({ lat: '', long: '' });
    const [data, setData] = useState({ title:'', description: '' });
   
    const geoLocate =  () => {
        navigator.geolocation.getCurrentPosition(position => {
            const apiKey = '887f19523a682aed9fee8c804ab554ad';
            const result = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`) 
            .then(response => response.json())
            .then(datas => {
                 console.log("DATAS - title: ", datas.weather[0].main)
                 console.log("DATAS - description: ", datas.weather[0].description)
                setData({ title:  datas.weather[0].main, description: datas.weather[0].description })
               //const weatherTitle = datas.data.weather[0].main;
               // const weatherDescription = datas.data.weather[0].description;
              //  setData({ title: weatherTitle, description: weatherDescription })
                console.log("DATA: ",data)
            })
            .catch(err => {console.log(err)})
            /*setWeatherTitle(result.datas.data.weather[0].description);
            console.log("title: ",weatherTitle)
            */
           
            setPosition({ lat: position.coords.latitude, long: position.coords.longitude });
         })
       
    }
 
    useEffect(() =>{
       geoLocate();  
    }, [])

    return (
        <div>
           
            <p>Weather Component</p>
        </div>
    )
}

export default Weather;