import {ACTIVITY_FORM_ACTION_TYPES} from "./actions";

const initialState = {
    loading: false,
    success: false,
    error: null
};

const activityFormReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY:
            return {...state, loading: true};
        case ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY_SUCCESS:
            return {...state, loading: false, success: true};
        case ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}
export default activityFormReducer;
