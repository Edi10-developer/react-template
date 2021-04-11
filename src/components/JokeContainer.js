import React, { useState, useEffect } from 'react';
import Button from './Button';
import axios from 'axios';

const JokeContainer = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData]         = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://api.icndb.com/jokes/random");
            //setData(result.data.value.joke)
        };
        fetchData();
    }, []);

      const setLoading = () => {
        setData(data)
        console.log(data)
        setIsLoaded(true);
    }

    return (
        <div>
            { isLoaded ?  <h3>
               {data} </h3> : null }
            <Button
                title="Next Joke"
                onClick={setLoading}
            />
        </div>
    )
}

export default JokeContainer;