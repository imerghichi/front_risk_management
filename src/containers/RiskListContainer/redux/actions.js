export const RISK_LIST_ACTION_TYPES = {
    GET_RISK_LIST: "GET_RISK_LIST",
    GET_RISK_LIST_SUCCESS: "GET_RISK_LIST_SUCCESS",
    GET_RISK_LIST_ERROR: "GET_RISK_LIST_ERROR",
};

export const riskListActions = {
    getRiskList: () => ({
        type: RISK_LIST_ACTION_TYPES.GET_RISK_LIST,
    }),
    getRiskListSuccess: (data) => ({
        type: RISK_LIST_ACTION_TYPES.GET_RISK_LIST_SUCCESS,
        riskList: data
    }),
    getRiskListError: (err) => ({
        type: RISK_LIST_ACTION_TYPES.GET_RISK_LIST_ERROR,
        error: err
    })
};