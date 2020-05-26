import {RISK_FORM_ACTION_TYPES} from "./actions";
const initialState = {
    loading: false,
    success: false,
    error: null
};

const riskFormReducer = (state = initialState, action) =>{
    switch (action.type) {
        case RISK_FORM_ACTION_TYPES.ADD_RISK:
            return {...state, loading: true};
        case RISK_FORM_ACTION_TYPES.ADD_RISK_SUCCESS:
            return {...state, loading: false, success: true};
        case RISK_FORM_ACTION_TYPES.ADD_RISK_ERROR:
            return {...state,loading: false, error: action.error};
        default:
                return state;
    }
}
export default riskFormReducer;
