export const RISK_MATRIX_ACTION_TYPES = {
    GET_RISK_MATRIX: "GET_RISK_MATRIX",
    GET_RISK_MATRIX_SUCCESS: "GET_RISK_MATRIX_SUCCESS",
    GET_RISK_MATRIX_ERROR: "GET_RISK_MATRIX_ERROR",
};

export const riskMatrixActions = {
    getRiskMatrix: () => ({
        type: RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX,
    }),
    getRiskMatrixSuccess: (data) => ({
        type: RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX_SUCCESS,
        riskMatrix: data
    }),
    getRiskMatrixError: (err) => ({
        type: RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX_ERROR,
        error: err
    })
};