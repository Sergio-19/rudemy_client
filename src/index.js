import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';

const app = <BrowserRouter><Provider store = {store}><App /></Provider></BrowserRouter>


ReactDOM.render(app, document.getElementById('root'));


reportWebVitals();
