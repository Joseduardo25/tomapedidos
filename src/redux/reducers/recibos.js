const initialState = {
  recibos : []
}

export default function recibos(state = initialState, action) {
  switch (action.type) {
    case 'MY__ACTION_TYPE':
      return action.payload
  }
  return state; 
}