import { SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE } from '../action/type';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_SUCCESS:
      return { ...state, action: action.payload };
    case SEARCH_MOVIES_FAILURE:
      return { ...state, action: action.error };
    default:
      return state;
  }
};
