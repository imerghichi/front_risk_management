import { ACTIVITY_LIST_ACTION_TYPES } from "./actions";

const initalState = {
    activityList: {},
    loading: false,
    success: false,
    error: null
};

function activityListReducer(state = initalState, action) {
    switch (action.type) {
        case ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST:
            return { ...state, loading: true, error: null, success: false };
        case ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST_SUCCESS:
            return { ...state, success: true, activityList: action.activityList, loading: false, error: null };
        case ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST_ERROR:
            return { ...state, error: action.error, success: false, loading: false }
        default:
            return state;
    }
}

export default activityListReducer;