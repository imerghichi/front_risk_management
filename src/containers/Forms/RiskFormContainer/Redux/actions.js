export const RISK_FORM_ACTION_TYPES = {
    ADD_RISK: "ADD_RISK",
    ADD_RISK_SUCCESS: "ADD_RISK_SUCCESS",
    ADD_RISK_ERROR: "ADD_RISK_ERROR"

};

export const riskFormActions = {
    postRisk: () => ({
        type: RISK_FORM_ACTION_TYPES.ADD_RISK,
    }),
    postRiskSuccess: () =>({
        type: RISK_FORM_ACTION_TYPES.ADD_RISK_SUCCESS,
    }),
    postRiskError: (err) =>({
        type: RISK_FORM_ACTION_TYPES.ADD_RISK_ERROR,
        error: err,
    })

}
