import * as TYPE from '../types/platos' 

export const fetchPlatosData = (plato) => async (dispatch) =>{
  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    const data = await response.json()
    const newData = data.results
    dispatch({
      type: TYPE.ADD_PLATO,
      data: newData
    })
  } catch (e) {
    console.log(e)
  } finally {
    console.log('termino el fetch')
  }
}