export const ORIGIN_ACTION_TYPE = {
    GET_FREQUENCIES : "GET_FREQUENCIES",
    GET_FREQUENCIES_SUCESS : "GET_FREQUENCIES_SUCCESS",
    GET_FREQUENCIES_ERROR : "GET_FREQUENCIES_ERROR",
};

export const originActions = {
    getOrigin : () => ({
        type:ORIGIN_ACTION_TYPE.GET_FREQUENCIES,
    }),
    getOriginSuccess: (data) => ({
        type:ORIGIN_ACTION_TYPE.GET_FREQUENCIES_SUCESS,
        frequencies: data
    }),
    getOriginError: (err) =>({
        type:ORIGIN_ACTION_TYPE.GET_FREQUENCIES_ERROR,
        error: err,
    })
}
