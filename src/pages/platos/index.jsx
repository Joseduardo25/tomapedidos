import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout'; 
import * as platosActions from '../../redux/actions/platos'

function Platos() {
  const statePlatos = useSelector((state) => state.platos)
  const dispatch = useDispatch()

  console.log(statePlatos)

  const getDataFromAPI = () => {
    const plato = 'arroz con pollo'
    dispatch(platosActions.fetchPlatosData(plato))
  }

  return(
    <Layout>
      Pagina de Platos
      <Button onClick={getDataFromAPI} variant="contained" color="primary">
         Agregar
      </Button>
    </Layout>
  )
} 
export default Platos