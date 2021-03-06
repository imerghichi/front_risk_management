
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

    DELETE_ACTIVITY: "DELETE_ACTIVITY",
    DELETE_ACTIVITY_SUCCESS: "DELETE_ACTIVITY_SUCCESS",
    DELETE_ACTIVITY_ERROR: "DELETE_ACTIVITY_ERROR",


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

    postActivity: (idProject, activityData) => ({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY,
        idProject,
        activityData
    }),
    postActivitySuccess: () =>({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_SUCCESS,
    }),
    postActivityError: (err) =>({
        type: ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY_ERROR,
        error: err,
    }),

    getRiskforActivity: (id)=>({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY,
        id_activity : id,
    }),
    getRiskforActivitySuccess: (data)=>({
        type: ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_SUCCESS,
        riskListActivity: data
    }),
    getRiskforActivityError: (err) => ({
        type:ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY_ERROR,
        error: err,
    }),
    deleteActivity:() =>({
       type: ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY,
    }),
    deleteActivtySuccess: () =>({
        type:ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY_SUCCESS,
    }),
    deleteActivityError: (err)=>({
        type:ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY_ERROR,
        error: err,
    })

};
