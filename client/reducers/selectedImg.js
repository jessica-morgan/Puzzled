//sets intital state as empty
const initialSelectedImgState = []
 //can add more actions later to be performed on image to the reducer object, case '' etc
export const selectedImgID = (state = initialSelectedImgState, action) => {
    switch (action.type) {
      //if action called is selected_image
      case 'SELECT_IMAGE':
      //return id
        return action.id
      default:
        return state
    }
  }
  
