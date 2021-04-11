import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

const JokeContainer = () => {
const [data, setData] = useState('');
const [isLoaded, setIsLoaded] = useState(false);

const setLoading = () => {setIsLoaded(true)};

useEffect(()=>{
    const fetchData = async () => {
    const result = await axios('http://api.icndb.com/jokes/random');

    setData(result.data.value.joke);
    };

    fetchData();

}, []);

    return (
        <div 
        isLoaded={isLoaded}>
        {isLoaded ? <h3>{data}</h3> : null } 
        <Button onClick={setLoading} title="Otro ciste"/>
        </div>
    )
}

export default JokeContainer;