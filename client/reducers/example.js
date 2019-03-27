const example = (state = [], action) => {
    switch (action.type) {
      case 'ADD_EXAMPLE':
        return [
          ...state,
          {
            example: action.example
          }
        ]
  
      default:
        return state
    }
  }
  
  export default example