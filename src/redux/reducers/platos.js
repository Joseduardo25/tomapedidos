const initialState = {
  nombrePlato : 'Arroz con Pollo'
}

export default function platos(state = initialState, action) {
  switch (action.type) {
    case 'MY__ACTION_TYPE':
      return action.payload
  }
  return state; 
}