import React from 'react';
import { JokeContainer, Weather } from '../components/index';
import { Link } from 'react-router-dom';
import { BtnLink, JokesStyled } from '../components/styles';
const Jokes = () => {
    return (
        <JokesStyled>
            <div className="container">
                <div className="main-div">
                    <Weather />
                    <JokeContainer />
                    <Link to="/">
                        <BtnLink>Homepage</BtnLink>
                    </Link>
                </div>
            </div>

        </JokesStyled>
    )
}

export default Jokes;