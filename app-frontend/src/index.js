import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { NotificationContainer } from 'react-notifications';
import history from './history';

import './assets/styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';

import Router from './Router';
import { configureStore } from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
      <NotificationContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
