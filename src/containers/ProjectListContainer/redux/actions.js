
export const PROJECT_LIST_ACTION_TYPES = {
    GET_PROJECT_LIST: "GET_PROJECT_LIST",
    GET_PROJECT_LIST_SUCCESS: "GET_PROJECT_LIST_SUCCESS",
    GET_PROJECT_LIST_ERROR: "GET_PROJECT_LIST_ERROR",
    ADD_PROJECT: "ADD_PROJECT",
    ADD_PROJECT_SUCCESS: "ADD_PROJECT_SUCCESS",
    ADD_PROJECT_ERROR: "ADD_PROJECT_ERROR",

    GET_ACTIVITY_FOR_PROJECT: "GET_ACTIVITY_FOR_PROJECT",
    GET_ACTIVITY_FOR_PROJECT_ERROR: "GET_ACTIVITY_FOR_PROJECT_ERROR",
    GET_ACTIVITY_FOR_PROJECT_SUCCESS: "GET_ACTIVITY_FOR_PROJECT_SUCCESS",

    DELETE_PROJECT: "DELETE_PROJECT",
    DELETE_PROJECT_SUCCESS: "DELETE_PROJECT_SUCCESS",
    DELETE_PROJECT_ERROR: "DELETE_PROJECT_ERROR",

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
    }),
    postProject: () => ({
        type: PROJECT_LIST_ACTION_TYPES.ADD_PROJECT,
    }),
    postProjectSuccess: () =>({
        type: PROJECT_LIST_ACTION_TYPES.ADD_PROJECT_SUCCESS,
    }),
    postProjectError: (err) =>({
        type: PROJECT_LIST_ACTION_TYPES.ADD_PROJECT_ERROR,
        error: err,
    }),
    getActivitiesforProject: ()=>({
        type: PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT,
    }),
    getActivitiesforProjectSuccess: (data)=>({
        type: PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT,
        activityListforProject: data
    }),

    deleteProject: ()=>({
        type:PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT,
    }),
    deleteProjectSuccess: ()=>({
        type:PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT,
    }),
    deleteProjectError: (err)=>({
        type:PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT,
        error:err,
    }),
};
