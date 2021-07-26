import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
  
export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  
  if(process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }
  
  const enhancers = [];
  
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );
  
  return store;
}