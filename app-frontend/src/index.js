import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import history from './history';

import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './Router';
import { configureStore } from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
