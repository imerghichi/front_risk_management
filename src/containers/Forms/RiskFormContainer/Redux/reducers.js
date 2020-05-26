import {RISK_FORM_ACTION_TYPES} from "./actions";
const initalState = {
    riskDetail : {},
    loading: false,
    success: false,
    error: null
};

const riskFormReducer = (state = initalState, action) =>{
    switch (action.type) {
        case RISK_FORM_ACTION_TYPES.ADD_RISK:
            return {...state, loading: true};
        case RISK_FORM_ACTION_TYPES.ADD_RISK_SUCCESS:
            return {...state, loading: false, success: true,riskDetail: action.data};
        case RISK_FORM_ACTION_TYPES.ADD_RISK_ERROR:
            return {...state,loading: false, error: action.error};
        default:
                return state;
    }
}
export default riskFormReducer;
