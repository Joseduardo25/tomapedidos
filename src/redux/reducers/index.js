import { combineReducers } from 'redux'
import platos from './platos'
import usuarios from './usuarios'
import recibos from './recibos'

 export default function createReducer(injectedReducers = {}) {
   const rootReducer = combineReducers({
     ...injectedReducers,
     platos,
     usuarios,
     recibos
   });
 
   return rootReducer;
 }