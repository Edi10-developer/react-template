import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from '../src/pages/Welcome';
import Jokes from '../src/pages/Jokes';

const App = () => {
    return (
        <div>
            <Router>
                <Link exact to="/" />
                <Link to="/Jokes" />

                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/jokes">
                        <Jokes />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;