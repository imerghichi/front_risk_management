import { PROJECT_LIST_ACTION_TYPES } from "./actions";
const initalState = {
    project_id : "",
    activityListforProject:{},
    projectList: [],
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
            return { ...state, error: action.error, success: false, loading: false };

        case PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT:
            return { ...state, loading: true, error: null, success: false };
        case PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT_SUCCESS:
            return {...state,loading: false,success: true, activityListforProject: action.data};
        case PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT_ERROR:
            return {...state,loading: false,success: false, error: action.error};

        case PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT:
        case PROJECT_LIST_ACTION_TYPES.ADD_PROJECT:
            return {...state, loading: true};
        case PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT_SUCCESS:
        case PROJECT_LIST_ACTION_TYPES.ADD_PROJECT_SUCCESS:
            return {...state, loading: false, success: true};
        case PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT_ERROR:
        case PROJECT_LIST_ACTION_TYPES.ADD_PROJECT_ERROR:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
}

export default projectListReducer;
