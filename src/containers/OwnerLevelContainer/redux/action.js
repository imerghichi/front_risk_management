export const OWNER_LEVEL_ACTION_TYPES = {
    GET_OWNER_LEVEL:"GET_OWNER_LEVEL",
    GET_OWNER_LEVEL_SUCCESS:"GET_OWNER_LEVEL_SUCCESS",
    GET_OWNER_LEVEL_ERROR:"GET_OWNER_LEVEL_ERROR",
};

export const ownerLevelActions ={
    getOwnerLevel: () => ({
        type:OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL,
    }),
    getOwnerLevelSuccess: (data) => ({
        type: OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL_SUCCESS,
        frequencies:data,
    }),
    getOwnerLevelError: (err) => ({
        type: OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL_ERROR,
        error: err,
    }),
}
