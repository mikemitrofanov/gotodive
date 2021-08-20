import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import axios from 'axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducers from './reducers/reducers'
import rootSaga from './sagas/sagas';
import history from '../history';


export function configureStore() {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      }),
    ),
  });

  const rootReducer = combineReducers({
    requests: requestsReducer,
    router: connectRouter(history),
    ...reducers,
  });

  const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const logMiddleware = (/* storeApi */) => {
    return next => {
      return action => {
        if (process.env.NODE_ENV === 'development') {
          console.log(action.type, action)
        }

        return next(action)
      }
    }
  }

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(...requestsMiddleware, sagaMiddleware, routerMiddleware(history), logMiddleware)),
  );

  sagaMiddleware.run(rootSaga)

  window.store = store

  return store;
};
