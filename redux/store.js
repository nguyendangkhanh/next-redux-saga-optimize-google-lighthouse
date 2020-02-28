import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import './actions';
import rootSaga from './saga';

export default function(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, promiseMiddleware];

  const devTools =
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(...middlewares)
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(require('./reducer').default, initialState, devTools);

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}
