import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';
import {DivStyled}  from './styles.js';

const JokeContainer = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState({ setup: '', delivery: '' });

    const fetchData = async () => {
        const result = await axios('https://v2.jokeapi.dev/joke/Any');
        setData({
            setup: result.data.setup,
            delivery: result.data.delivery
        })
        setIsLoaded(true)
    };

    const jokeLoaded = () => fetchData();

    return (
        <DivStyled>
            <h1>Ready to laugh?</h1>

            { isLoaded ?
                <h3> {data.setup} <br />
                    {data.delivery}
                </h3> : null }
            <Button
                title="Next Joke"
                onClick={jokeLoaded}
            />
        </DivStyled>
    )
}

export default JokeContainer;