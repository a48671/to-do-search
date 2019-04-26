import { createStore, applyMiddleware, compose } from 'redux';
import tasksReducer from '../reducers/tasksReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const middleware = [];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(tasksReducer, enhancer);

export default store;
