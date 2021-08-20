import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout'; 
import * as platosActions from '../../redux/actions/platos'

function Platos() {
  const statePlatos = useSelector((state) => state.platos)
  const dispatch = useDispatch()

  const getDataFromAPI = () => {    
    dispatch(platosActions.fetchPlatosData())
  }

  const renderPokemonesMap = () => {
    return statePlatos.data.map((pokemon, i) => <div key={i}>{pokemon.name}</div>)
  }

  return(
    <Layout>
      Pagina de Platos
      <Button onClick={getDataFromAPI} variant="contained" color="primary">
         Agregar
      </Button>
      <br /><br />
      <div style={{ display: 'flex', flexDirection: 'column'}}>
      {renderPokemonesMap()}
      </div>
    </Layout>
  )
} 
export default Platos