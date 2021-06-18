import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainRouter from './mainrouter'
import { TextRotateVerticalRounded } from '@material-ui/icons';


ReactDOM.render(
  <React.StrictMode>
   <MainRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);
 