import { SELECTED_TIMINGS_DETAILS } from '../action/type';

const defaultState = {
    timingDetails: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SELECTED_TIMINGS_DETAILS:
            return { ...state, timingDetails: action.timingDetails };
        default:
            return state;
    }
};