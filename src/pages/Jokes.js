import React from 'react';
import { JokeContainer, Weather, Header, Button } from '../components/index';

const Jokes = () => {
    return (
        <div>
            <Header title="JokeApp" />
            <Weather />
            <JokeContainer />
            <a href="/">Home</a>
        </div>
    )
}

export default Jokes;