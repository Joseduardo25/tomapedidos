import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainRouter from './router'
import { TextRotateVerticalRounded } from '@material-ui/icons';
import  { Provider }  from 'react-redux';
import configureStore from './redux/store';
import history from './utils/history'
import './style.css'

const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
