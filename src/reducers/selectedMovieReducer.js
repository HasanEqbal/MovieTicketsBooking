import { SELECTED_MOVIE_DETAILS } from '../action/type';

export default (state = {}, action) => {
  switch (action.type) {
    case SELECTED_MOVIE_DETAILS:
      return { ...state, ...action.movieDetails };
    default:
      return state;
  }
};