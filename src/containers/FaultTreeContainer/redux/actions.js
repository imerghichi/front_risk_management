
export const FAULT_TREE_ACTION_TYPES = {
    GET_FAULT_TREE: "GET_FAULT_TREE",
    GET_FAULT_TREE_SUCCESS: "GET_FAULT_TREE_SUCCESS",
    GET_FAULT_TREE_ERROR: "GET_FAULT_TREE_ERROR",
    ADD_FAULT_TREE: "ADD_FAULT_TREE",
    ADD_FAULT_TREE_SUCCESS: "ADD_FAULT_TREE_SUCCESS",
    ADD_FAULT_TREE_ERROR: "ADD_FAULT_TREE_ERROR"

};

export const faultTreeActions = {
    getFaultTree: () => ({
        type: FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE,
    }),
    getFaultTreeSuccess: (data) => ({
        type: FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE_SUCCESS,
        faultTree: data
    }),
    getFaultTreeError: (err) => ({
        type: FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE_ERROR,
        error: err
    }),
    postFaultTree: () => ({
        type: FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE,
    }),
    postFaultTreetSuccess: () =>({
        type: FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE_SUCCESS,
    }),
    postFaultTreetError: (err) =>({
        type: FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE_ERROR,
        error: err,
    })
};
