import React, { useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/layout';
import * as TYPE from '../../redux/types/platos'

function Platos () {
  const [listaPlatos, setListaPlatos] = useState([])

  const statePlatos = useSelector((state) => state.platos)
  const dispatch = useDispatch()

  console.log(statePlatos)

  const onAddPlato = () =>{
    const newPlatosData = statePlatos.data
    newPlatosData.push('arroz con pollo')

    dispatch({
      type: TYPE.ADD_PLATO,
      data: newPlatosData
    })
  }

  const onAddPlatoHook = () => {
    const newPlatosData = [...listaPlatos]
    newPlatosData.push('Arroz con pollo')
    setListaPlatos(newPlatosData)
  }
  console.log(listaPlatos)
 
  return(
    <Layout>
      Pagina de Platos
      <h2>Agregado con REDUX</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          lista de Platos
        </div>
        <br />
          <button onClick={onAddPlato}>Agregar Platos</button>
        <div>
          <ul>
            {statePlatos.data.map((plato, i) => (
            <li key={i}>{plato}</li>
            ))}
          </ul>
        </div>
        <hr />
        <h2>Agregado con HOOK USESTATE</h2>
        <div>
          lista de Platos
        </div>
        <br />
          <button onClick={onAddPlatoHook}>Agregar Platos</button>
        <div>
          <ul>
            {listaPlatos.map((plato, i) => (
            <li key={i}>{plato}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
} 
export default Platos