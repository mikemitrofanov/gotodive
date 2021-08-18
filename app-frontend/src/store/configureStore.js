import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import axios from 'axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

export function configureStore() {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      }),
    ),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const composeEnhancers = typeof window !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...requestsMiddleware)),
  );

  return store;
};
