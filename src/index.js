import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/Header';
import Pick from './components/pick/Pick';
import Ban from './components/ban/Ban';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                <Route exact path='/' component={Pick} />
                <Route exact path='/ban' component={Ban} />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));
