export const CHANGE_TITLE_ACTION = "CHANGE-TITLE-ACTION"

export const changeTitleAction = (v) => {
return {
  type: CHANGE_TITLE_ACTION,
  newTitle:v
}
}