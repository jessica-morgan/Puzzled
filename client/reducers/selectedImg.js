const initialSelectedImgState = []
 
export const selectedImgID = (state = initialSelectedImgState, action) => {
    switch (action.type) {
      case 'SELECT_IMAGE':
        return action.id
      default:
        return state
    }
  }
  
