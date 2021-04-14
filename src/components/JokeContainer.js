import React, { useState } from 'react';
import axios from 'axios';
import { Button, Header, Joke } from './index.js';
import { DivStyled } from './styles.js';

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
            <Header
                title="Ready to laugh?"
                emojy="&#129315;"
            />

            { isLoaded ?
                <Joke
                    setup={data.setup}
                    delivery={data.delivery}
                />
                : null }

            <Button
                title="Next Joke"
                onClick={jokeLoaded}
            />
        </DivStyled>
    )
}

export default JokeContainer;