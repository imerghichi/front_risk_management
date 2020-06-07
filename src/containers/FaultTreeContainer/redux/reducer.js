import {FAULT_TREE_ACTION_TYPES} from "./actions";

const initalState = {
    faultTree: {},
    loading: false,
    success: false,
    error: null
};

function faultTreeReducer(state = initalState, action) {
    switch (action.type) {
        case FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE:
            return { ...state, loading: true, error: null, success: false };
        case FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE_SUCCESS:
            return { ...state, success: true, faultTree: action.faultTree, loading: false, error: null };
        case FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE_ERROR:
            return { ...state, error: action.error, success: false, loading: false }
        case FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE:
            return {...state, loading: true};
        case FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE_SUCCESS:
            return {...state, loading: false, success: true};
        case FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}

export default faultTreeReducer;
