import {ORIGIN_ACTION_TYPE} from "./actions";

const initialState = {
    frequencies:{},
    loading:false,
    success:false,
    error:null
}

function originReducer (state = initialState,action) {
    switch (action.type) {
        case ORIGIN_ACTION_TYPE.GET_FREQUENCIES :
            return{...state,loading: true,error: null,success: false};
        case ORIGIN_ACTION_TYPE.GET_FREQUENCIES_SUCESS:
            return {...state,success: true, error: null,loading: false,frequencies: action.frequencies};
        case ORIGIN_ACTION_TYPE.GET_FREQUENCIES_ERROR:
            return {...state,success: false, error: action.error,loading: false};
        default:
            return state;
    }

}
export default originReducer;
