import { PROJECT_LIST_ACTION_TYPES } from "./actions";

const initalState = {
    projectList: {},
    loading: false,
    success: false,
    error: null
};

function projectListReducer(state = initalState, action) {
    switch (action.type) {
        case PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST:
            return { ...state, loading: true, error: null, success: false };
        case PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST_SUCCESS:
            return { ...state, success: true, projectList: action.projectList, loading: false, error: null };
        case PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST_ERROR:
            return { ...state, error: action.error, success: false, loading: false }
        default:
            return state;
    }
}

export default projectListReducer;