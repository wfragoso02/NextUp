import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let middlewareLogger;
process.env.NODE_ENV === 'development' ? middlewareLogger = logger : middlewareLogger = false;

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, middlewareLogger)
  )
);

export default configureStore;