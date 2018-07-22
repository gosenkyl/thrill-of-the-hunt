import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/Header';
import Pick from './components/pick/Pick';
import Ban from './components/ban/Ban';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
    <Router>
        <div>
            <Header />

            <Route exact path='/' component={Pick} />
            <Route exact path='/ban' component={Ban} />
        </div>
    </Router>
), document.getElementById('root'));
