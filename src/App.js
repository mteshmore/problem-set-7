import React, {Component} from 'react';
import {HashRouter as Router, Route, Link } from "react-router-dom";
import {Images} from './Images.js';
import {About} from './About.js';
import {Home} from './Home.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/Images">Images</Link>
                    {' '}
                    <Link to="/About">About</Link>

                    <Route exact path="/" component={ Home } />
                    <Route path="/Images" component={ Images } />
                    <Route path="/About" component={ About } />
                </div>
            </Router>
        );
    }
}

export default App;
