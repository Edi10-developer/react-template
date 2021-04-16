import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button } from '../components/index';
import { WelcomeStyled } from '../components/styles';

const Welcome = () => {
    return (
        <WelcomeStyled>
            <div className="container">
                <div className="main-div">
                    <Header title="Welcome to LaughingApp" />
                    <Link to="/jokes">
                        <Button title="Go to Jokes" />
                    </Link>
                </div>
            </div>
        </WelcomeStyled>
    )
}

export default Welcome;