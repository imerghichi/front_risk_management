export const ACTIVITY_FORM_ACTION_TYPES = {
    ADD_ACTIVITY: "ADD_ACTIVITY",
    ADD_ACTIVITY_SUCCESS: "ADD_ACTIVITY_SUCCESS",
    ADD_ACTIVITY_ERROR: "ADD_ACTIVITY_ERROR"

};

export const activitykFormActions = {
    postActivity: () => ({
        type: ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY,
    }),
    postActivitySuccess: () =>({
        type: ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY_SUCCESS,
    }),
    postActivityError: (err) =>({
        type: ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY_ERROR,
        error: err,
    })

}
