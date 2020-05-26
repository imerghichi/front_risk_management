import { RISK_MATRIX_ACTION_TYPES } from "./actions";

const initalState = {
    riskMatrix: {},
    loading: false,
    success: false,
    error: null
};

function riskMatrixReducer(state = initalState, action) {
    switch (action.type) {
        case RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX:
            return { ...state, loading: true, error: null, success: false };
        case RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX_SUCCESS:
            return { ...state, success: true, riskMatrix: action.riskMatrix, loading: false, error: null };
        case RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX_ERROR:
            return { ...state, error: action.error, success: false, loading: false }
        default:
            return state;
    }
}

export default riskMatrixReducer;