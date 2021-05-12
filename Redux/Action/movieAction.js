import { ActionTypes } from "../Constants/actionTypes";
export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};
