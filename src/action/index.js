import searchmovies from '../apis/api';
import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from './type';

export const searchMoviesSucess = (payload) => (
  {
    type: SEARCH_MOVIES_SUCCESS,
    payload
  });

export const searchMoviesFailure = (payload) => (
  {
    type: SEARCH_MOVIES_FAILURE,
    payload
  });

export const searchMovies = (keyword) => async (dispatch) => {
  await searchmovies.get(`?s=${keyword}&apikey=dcfbfd3c`).then((response) => {
    if (response.data.Response === "True") {
      dispatch(searchMoviesSucess(response.data.Search))
    } else {
      dispatch(searchMoviesFailure(response.data.Error))
    }
  });
};

