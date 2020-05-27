import {PROJECT_FORM_ACTION_TYPES} from "./actions";

const initialState = {
    loading: false,
    success: false,
    error: null
};

const projectFormReducer = (state = initialState, action) =>{
    switch (action.type) {
        case PROJECT_FORM_ACTION_TYPES.ADD_PROJECT:
            return {...state, loading: true};
        case PROJECT_FORM_ACTION_TYPES.ADD_PROJECT_SUCCESS:
            return {...state, loading: false, success: true};
        case PROJECT_FORM_ACTION_TYPES.ADD_PROJECT_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}
export default projectFormReducer;
