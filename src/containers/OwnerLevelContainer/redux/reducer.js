import {OWNER_LEVEL_ACTION_TYPES} from "./action";

const initialState = {
    frequencies: {},
    loading: false,
    success: false,
    error: null,
};

function ownerLevelReducer(state = initialState,action) {
    switch (action.type) {
        case OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL:
            return {...state, loading: true, success: false, error: null};
        case OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL_SUCCESS:
            return {...state, loading: false,success: true,error: null, frequencies: action.frequencies};
        case OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL_ERROR:
            return {...state, loading: false,success: false,error: action.error};
        default:
            return state;
    }
}
