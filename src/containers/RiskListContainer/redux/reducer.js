import { RISK_LIST_ACTION_TYPES } from "./actions";

const initalState = {
    riskList: {},
    loading: false,
    success: false,
    error: null
};

function riskListReducer(state = initalState, action) {
    switch (action.type) {
        case RISK_LIST_ACTION_TYPES.GET_RISK_LIST:
            return { ...state, loading: true, error: null, success: false };
        case RISK_LIST_ACTION_TYPES.GET_RISK_LIST_ERROR:
            return { ...state, success: true, riskList: action.riskList, loading: false, error: null };
        case RISK_LIST_ACTION_TYPES.GET_RISK_LIST_SUCCESS:
            return { ...state, error: action.error, success: false, loading: false };
        case RISK_LIST_ACTION_TYPES.ADD_RISK:
            return {...state, loading: true};
        case RISK_LIST_ACTION_TYPES.ADD_RISK_SUCCESS:
            return {...state, loading: false, success: true};
        case RISK_LIST_ACTION_TYPES.ADD_RISK_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}

export default riskListReducer;
