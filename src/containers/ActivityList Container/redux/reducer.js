import { ACTIVITY_LIST_ACTION_TYPES } from "./actions";

const initalState = {
    id_activity: "",
    riskListActivity:{},
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
            return { ...state, error: action.error, success: false, loading: false };
        case ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY:
            return {...state, loading: true};
        case ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_SUCCESS:
            return {...state, loading: false, success: true};
        case ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_ERROR:
            return {...state,loading: false, error: action.error};
        case ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY:
            return { ...state, loading: true, error: null, success: false, id_activity: action.id_activity};
        case ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_SUCCESS:
            return {...state, loading: false,riskListActivity: action.riskListActivity ,error: null, success: true}
        case ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_ERROR:
            return {...state, loading: false, error: action.error, success: false};
        case ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY:
            return {...state,loading: true, error: null,success: false};
        case ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY_SUCCESS:
            return  {...state,loading: false,error: null, success: true};
        case ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY_ERROR:
            return {...state, loading: false,error: action.error, success: false};
            default:
            return state;
    }
}

export default activityListReducer;
