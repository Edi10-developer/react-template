import React from 'react';
import { JokeContainer, Weather } from './components/index';

const App = () => {
    return (
        <>
            <h1>Joke App</h1>
            <Weather />
            <JokeContainer />
        </>
    );
};

export default App;