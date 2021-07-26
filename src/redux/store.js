

 import { createStore, applyMiddleware, compose } from 'redux';


 import createReducer from './reducers';
 
 export default function configureStore(initialState = {}, history) {
   let composeEnhancers = compose;
 
   // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
   /* istanbul ignore next */
   if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
     /* eslint-disable no-underscore-dangle */
     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
       composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
 
     // NOTE: Uncomment the code below to restore support for Redux Saga
     // Dev Tools once it supports redux-saga version 1.x.x
     // if (window.__SAGA_MONITOR_EXTENSION__)
     //   reduxSagaMonitorOptions = {
     //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
     //   };
     /* eslint-enable */
   }
 
  
   
   // Create the store with two middlewares
   // 1. sagaMiddleware: Makes redux-sagas work
   // 2. routerMiddleware: Syncs the location/URL path to the state
   
 
   const enhancers = [];
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers),
   );
 
   return store;
 }