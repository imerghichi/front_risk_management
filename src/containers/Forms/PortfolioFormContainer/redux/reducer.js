import {PORTFOILIO_FORM_ACTION_TYPES} from "./actions";

const initialState = {
    loading: false,
    success: false,
    error: null
};

const portfolioFormReducer = (state = initialState, action) =>{
    switch (action.type) {
        case PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO:
            return {...state, loading: true};
        case PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO_SUCCESS:
            return {...state, loading: false, success: true};
        case PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}
export default portfolioFormReducer;
