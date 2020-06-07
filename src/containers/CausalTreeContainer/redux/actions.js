export const CAUSAL_TREE_ACTION_TYPES = {
    GET_CAUSAL_TREE: "GET_CAUSAL_TREE",
    GET_CAUSAL_TREE_SUCCESS: "GET_CAUSAL_TREE_SUCCESS",
    GET_CAUSAL_TREE_ERROR: "GET_CAUSAL_TREE_ERROR",

    POST_CAUSAL_TREE: "POST_CAUSAL_TREE",
    POST_CAUSAL_TREE_SUCCESS: "POST_CAUSAL_TREE_SUCCESS",
    POST_CAUSAL_TREE_ERROR: "POST_CAUSAL_TREE_ERROR",
};
export const causalTreeActions = {
    getCausalTree: () => ({
        type: CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE,
    }),
    getCausalTreeSuccess: (data) => ({
        type: CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE,
        causalTree: data
    }),
    getCausalTreeError: (err) => ({
        type: CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE,
        error: err
    }),

    postCausalTree: (data) => ({
        type: CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE,
        formValues: data
    }),
    postCausalTreeSuccess: () => ({
        type: CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE_SUCCESS,
    }),
    postCausalTreexError: (err) => ({
        type: CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE_ERROR,
        error: err
    }),
};
