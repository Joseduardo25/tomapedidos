import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Login from './pages/login'
import Platos from './pages/platos'
import Recibos from './pages/recibos'
import Usuarios from './pages/usuarios'

function MainRouter () {
  return(
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/platos' component={Platos} />
        <Route exact path='/recibos' component={Recibos} />
        <Route exact path='/usuarios' component={Usuarios} />
      </Switch>
    </Router>
  )
}

export default MainRouter;