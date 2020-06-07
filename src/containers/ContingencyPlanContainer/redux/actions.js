
export const CONTINGENCY_PLAN_ACTION_TYPES = {
    ADD_CONTINGENCY_PLAN: "ADD_CONTINGENCY_PLAN",
    ADD_CONTINGENCY_PLAN_SUCCESS: "ADD_CONTINGENCY_PLAN_SUCCESS",
    ADD_CONTINGENCY_PLAN_ERROR: "ADD_CONTINGENCY_PLAN_ERROR"

};

export const contingencyPlanListActions = {
    postContingencyPlan: () => ({
        type: CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN,
    }),
    postContingencyPlanSuccess: () =>({
        type: CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN_SUCCESS,
    }),
    postContingencyPlanError: (err) =>({
        type: CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN_ERROR,
        error: err,
    })
};
