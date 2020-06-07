
export const ACTIVITY_LIST_ACTION_TYPES = {
    GET_ACTIVITY_LIST: "GET_ACTIVITY_LIST",
    GET_ACTIVITY_LIST_SUCCESS: "GET_ACTIVITY_LIST_SUCCESS",
    GET_ACTIVITY_LIST_ERROR: "GET_ACTIVITY_LIST_ERROR",
    ADD_ACTIVITY: "ADD_ACTIVITY",
    ADD_ACTIVITY_SUCCESS: "ADD_ACTIVITY_SUCCESS",
    ADD_ACTIVITY_ERROR: "ADD_ACTIVITY_ERROR",

    GET_RISK_FOR_ACTIVITY: "GET_RISK_FOR_ACTIVITY",
    GET_RISK_FOR_ACTIVITY_SUCCESS: "GET_RISK_FOR_ACTIVITY_SUCCESS",
    GET_RISK_FOR_ACTIVITY_ERROR: "GET_RISK_FOR_ACTIVITY_ERROR",

};

export const activityListActions = {
    getActivityList: () => ({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST,
    }),
    getActivityListSuccess: (data) => ({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST_SUCCESS,
        activityList: data
    }),
    getActivityListError: (err) => ({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST_ERROR,
        error: err
    }),
    postActivity: () => ({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY,
    }),
    postActivitySuccess: () =>({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_SUCCESS,
    }),
    postActivityError: (err) =>({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_ERROR,
        error: err,
    }),
    getRiskforActivity: ()=>({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY,
    }),
    getRiskforActivitySuccess: (data)=>({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_SUCCESS,
        riskListActivity: data
    }),
    getRiskforActivityError: (err) => ({
        type:ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_ERROR,
        error: err,
    })

};
