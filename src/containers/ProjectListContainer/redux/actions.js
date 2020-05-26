export const PROJECT_LIST_ACTION_TYPES = {
    GET_PROJECT_LIST: "GET_PROJECT_LIST",
    GET_PROJECT_LIST_SUCCESS: "GET_PROJECT_LIST_SUCCESS",
    GET_PROJECT_LIST_ERROR: "GET_PROJECT_LIST_ERROR",
};

export const projectListActions = {
    getProjectList: () => ({
        type: PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST,
    }),
    getProjectListSuccess: (data) => ({
        type: PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST_SUCCESS,
        projectList: data
    }),
    getProjectListError: (err) => ({
        type: PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST_ERROR,
        error: err
    })
};