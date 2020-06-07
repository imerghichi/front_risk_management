import {CONTINGENCY_PLAN_ACTION_TYPES} from "./actions";

const initalState = {
    contingencyPlan: {},
    loading: false,
    success: false,
    error: null
};

function contingenyPlanReducer(state = initalState, action) {
    switch (action.type) {
        case CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN:
            return {...state, loading: true};
        case CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN_SUCCESS:
            return {...state, loading: false, success: true};
        case CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}

export default contingenyPlanReducer;
