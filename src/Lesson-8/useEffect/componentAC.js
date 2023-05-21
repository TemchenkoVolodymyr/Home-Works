import {CHANGE_IMAGE} from "./reduxShouldComponentUpdate";

export const componentAC = (image) => {
  return {
    type:CHANGE_IMAGE,
    newImage:image
  }
}