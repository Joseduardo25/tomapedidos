import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import App from './App';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import { TextRotateVerticalRounded } from '@material-ui/icons';

function Index() {
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

function FirstPageComponent () {
  const getDataFromApi = async () => {
    try{
      const response = await axios.get( 'https://pokeapi.co/api/v2/pokemon/ditto')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (() => {
    getDataFromApi()
  }, [])
  return(
    <div>
      <GoBack/>
          <Button variant="contained" color="primary">
            Soy la primera pagina
          </Button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/first-page">
          <FirstPageComponent/>
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
 