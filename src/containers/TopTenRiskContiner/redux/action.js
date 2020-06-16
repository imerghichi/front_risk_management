export const TOP_TEN_RISK_ACTIONS = {
    GET_TOP_TEN_RISK : "GET_TOP_TEN_RISK",
    GET_TOP_TEN_RISK_ERROR : "GET_TOP_TEN_RISK_EROOR",
    GET_TOP_TEN_RISK_SUCCESS : "GET_TOP_TEN_RISK_SUCCESS",
};
export const topTenRiskActions ={
    gettopTen: () => ({
        type: TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK,
    }),
    gettopTenError: (err) => ({
        type: TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK_ERROR,
        error: err,
    }),
    gettopTenSuccess: (data) => ({
        type: TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK_SUCCESS,
        topRisk: data,
    }),

}
