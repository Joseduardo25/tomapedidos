import * as TYPE from '../types/platos' 

export const fetchPlatosData = (plato) => (dispatch) =>{
  const newData = plato
  dispatch({
    type: TYPE.ADD_PLATO,
    data: newData
  })
}