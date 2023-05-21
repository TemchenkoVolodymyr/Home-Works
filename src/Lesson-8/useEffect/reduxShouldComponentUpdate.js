import {initialState} from "../../redux/initialState";

export const CHANGE_IMAGE = "CHANGE_IMAGE"

 export const reduxShouldCU = (images = initialState.images, action) => {
  switch (action.type) {
    case CHANGE_IMAGE :
      return {
        images: action.newImage
      }
    default:return images
  }
}