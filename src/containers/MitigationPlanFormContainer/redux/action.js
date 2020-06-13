export const MITIGATION_PLAN_ACTION_TYPES = {
    ADD_MITIGATION_PLAN: "ADD_MITIGATION_PLAN",
    ADD_MITIGATION_PLAN_SUCCESS: "ADD_MITIGATION_PLAN_SUCCESS",
    ADD_MITIGATION_PLAN_ERROR: "ADD_MITIGATION_PLAN_ERROR"

};

export const mitigationPlanListActions = {
    postMitigationPlan: () => ({
        type: MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN,
    }),
    postMitigationPlanSuccess: () =>({
        type: MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN_SUCCESS,
    }),
    postMitigationPlanError: (err) =>({
        type: MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN_ERROR,
        error: err,
    })
};
