import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let middleware;
process.env.NODE_ENV === 'development' ? middleware = applyMiddleware(thunk, logger) : middleware = applyMiddleware(thunk);

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    middleware
  )
);

export default configureStore;