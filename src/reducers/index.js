import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';
import selectedMovieDetails from './selectedMovieReducer';
import selectedTimingDetails from './selectedTimingReducer'

export default combineReducers({
  searchResults: searchMovieReducer,
  selectedMovie: selectedMovieDetails,
  selectedTime: selectedTimingDetails
});
