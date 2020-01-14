import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';

export default combineReducers({
  searchResults: searchMovieReducer,
});
