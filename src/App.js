import React from 'react';
import { JokeContainer, Weather, Header } from './components/index';

const App = () => {
    return (
        <>
        <div>
            <Header title="JokeApp" />
            <Weather />
            <JokeContainer />
            </div>
        </>
    );
};

export default App;