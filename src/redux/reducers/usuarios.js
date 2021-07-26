const initialState = {
  usuarios : []
}

export default function usuarios(state = initialState, action) {
  switch (action.type) {
    case 'MY__ACTION_TYPE':
      return action.payload
  }
  return state; 
}