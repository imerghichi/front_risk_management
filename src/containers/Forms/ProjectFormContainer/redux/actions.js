export const PROJECT_FORM_ACTION_TYPES = {
    ADD_PROJECT: "ADD_PROJECT",
    ADD_PROJECT_SUCCESS: "ADD_PROJECT_SUCCESS",
    ADD_PROJECT_ERROR: "ADD_PROJECT_ERROR"

};

export const projectFormActions = {
    postProject: () => ({
        type: PROJECT_FORM_ACTION_TYPES.ADD_PROJECT,
    }),
    postProjectSuccess: () =>({
        type: PROJECT_FORM_ACTION_TYPES.ADD_PROJECT_SUCCESS,
    }),
    postProjectError: (err) =>({
        type: PROJECT_FORM_ACTION_TYPES.ADD_PROJECT_ERROR,
        error: err,
    })

}
