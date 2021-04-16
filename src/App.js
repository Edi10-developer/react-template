import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from '../src/pages/Welcome';
import Jokes from '../src/pages/Jokes';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>      
                    <Route exact path="/" component={ Welcome } />
                    <Route path="/jokes" component={ Jokes } />
                </Switch>
            </Router>
        </div>
    );
};

export default App;