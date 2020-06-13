
export const RISK_LIST_ACTION_TYPES = {
    GET_RISK_LIST: "GET_RISK_LIST",
    GET_RISK_LIST_SUCCESS: "GET_RISK_LIST_SUCCESS",
    GET_RISK_LIST_ERROR: "GET_RISK_LIST_ERROR",
    ADD_RISK: "ADD_RISK",
    ADD_RISK_SUCCESS: "ADD_RISK_SUCCESS",
    ADD_RISK_ERROR: "ADD_RISK_ERROR",
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
    }),

    postRisk: (riskData) => ({
        type: RISK_LIST_ACTION_TYPES.ADD_RISK,
        riskData: riskData,
    }),
    postRiskSuccess: () =>({
        type: RISK_LIST_ACTION_TYPES.ADD_RISK_SUCCESS,
    }),
    postRiskError: (err) =>({
        type: RISK_LIST_ACTION_TYPES.ADD_RISK_ERROR,
        error: err,
    })
};
