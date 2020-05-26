import {RISK_FORM_ACTION_TYPES} from "./actions";

const riskFormReducer = (state = [], action) =>{
    switch (action.type) {
        case RISK_FORM_ACTION_TYPES.ADD_RISK:
            return {...state, action: action.data};
        default:
                return state;
    }
}
export default riskFormReducer;
