import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { TextRotateVerticalRounded } from '@material-ui/icons';

function FirstPagecomponent() {
  return(
    <ul>
      <li>
        <Link to="/first-page">
          ir a primera pagina
        </Link>
      </li>
      <li>
        <Link to="/second-page">
          ir a segunda pagina
        </Link>
      </li>
      <li>
        <Link to="/third-page">
          ir a tercera pagina
        </Link>
      </li>
    </ul>
  )
}

function GoBack(){
  return(
    <div>
      <Link to="/">
        Ir atras
      </Link>
    </div>
  )
}

function DynamicPageNameInfo(){
  const history = useHistory()
  console.log(history)
  return(
    <div>
      soy una pagina de datos dinamicos
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <FirstPagecomponent/>
        </Route>
        <Route exact path="/first-page">
          <GoBack/>
          <Button variant="contained" color="primary">
            Soy la primera pagina
          </Button>
        </Route>
        <Route exact path="/first-page/:query">
          <GoBack/>
          <DynamicPageNameInfo/>
        </Route>
        <Route exact path="/second-page">
          <GoBack/>
          <Button variant="contained" color="secondary">
            Soy la segunda pagina
          </Button>
        </Route>
        <Route exact path="/third-page">
          <GoBack/>
          <Button variant="contained" disabled>
            Soy la tercera pagina
          </Button>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

 