import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tetrisApp from 'js/reducers'
import App from 'components/App';
import 'css/index.css';


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
