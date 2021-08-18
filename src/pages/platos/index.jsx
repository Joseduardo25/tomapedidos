import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout';
import * as TYPE from '../../redux/types/platos'

function Platos () {
  const statePlatos = useSelector((state) => state.platos)
  const dispatch = useDispatch()

  console.log(statePlatos)

  const onAddPlato = () =>{
    const newPlatosData = statePlatos.data
    newPlatosData.push('arros con pollo')

    dispatch({
      type: TYPE.ADD_PLATO,
      data: newPlatosData
    })
  }

 
  return(
    <Layout>
      Pagina de Platos
      <div>
        lista de Platos
      </div>
        <button onClick={onAddPlato}>Agregar Platos</button>
      <div>
        <ul>
          {statePlatos.data.map((plato) => (<li>{plato}</li>))}
        </ul>
      </div>
    </Layout>
  )
} 
export default Platos