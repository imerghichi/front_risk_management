import {CAUSAL_TREE_ACTION_TYPES} from "./actions";

const initalState = {
    causalTree: {},
    loading: false,
    success: false,
    error: null
};

function causalTreeReducer(state = initalState, action) {
    switch (action.type) {
        case CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE:
            return { ...state, loading: true, error: null, success: false };
        case CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE_SUCCESS:
            return { ...state, success: true, causalTree: action.causalTree, loading: false, error: null };
        case CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE_ERROR:
            return { ...state, error: action.error, success: false, loading: false };

        case CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE:
            return { ...state, loading: true, error: null, success: false };
        case CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE_SUCCESS:
            return { ...state, success: true, loading: false, error: null };
        case CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE_ERROR:
            return { ...state, error: action.error, loading: false, success: false };
        default:
            return state;
    }
}

export default causalTreeReducer;
