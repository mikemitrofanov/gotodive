import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { NotificationContainer } from 'react-notifications';
import history from '../history';

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import 'react-notifications/lib/notifications.css';
import '../assets/styles/main.scss';

import Router from '../Router';
import { configureStore } from '../store/configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
      <NotificationContainer />
    </ConnectedRouter>
  </Provider>
)

export default App
