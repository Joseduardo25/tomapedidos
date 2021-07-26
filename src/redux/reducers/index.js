import { combineReducers } from 'redux'
import platos from './platos'
 export default function createReducer(injectedReducers = {}) {
   const rootReducer = combineReducers({
     ...injectedReducers,
     platos
   });
 
   return rootReducer;
 }