import { PORTFOLIO_LIST_ACTION_TYPES } from "./actions";

const initalState = {
    portfolioList: {},
    loading: false,
    success: false,
    error: null
};

function portfolioListReducer(state = initalState, action) {
    switch (action.type) {
        case PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST:
            return { ...state, loading: true, error: null, success: false };
        case PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST_SUCCESS:
            return { ...state, success: true, portfolioList: action.portfolioList, loading: false, error: null };
        case PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST_ERROR:
            return { ...state, error: action.error, success: false, loading: false }
        default:
            return state;
    }
}

export default portfolioListReducer;