import {MITIGATION_PLAN_ACTION_TYPES} from "./action";

const initalState = {
    mitigationPlan: {},
    loading: false,
    success: false,
    error: null
};

function mitigationPlanReducer(state = initalState, action) {
    switch (action.type) {
        case MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN:
            return {...state, loading: true};
        case MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN_SUCCESS:
            return {...state, loading: false, success: true};
        case MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}

export default mitigationPlanReducer;
