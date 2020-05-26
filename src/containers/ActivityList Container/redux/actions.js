export const ACTIVITY_LIST_ACTION_TYPES = {
    GET_ACTIVITY_LIST: "GET_ACTIVITY_LIST",
    GET_ACTIVITY_LIST_SUCCESS: "GET_ACTIVITY_LIST_SUCCESS",
    GET_ACTIVITY_LIST_ERROR: "GET_ACTIVITY_LIST_ERROR",
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
    })
};