import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.js';
import { configureStore } from './store/configureStore.js'

const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
