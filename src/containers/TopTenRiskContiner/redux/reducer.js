import {TOP_TEN_RISK_ACTIONS} from "./action";

const initialState = {
    topRisk: [],
    loading:false,
    success: false,
    error: null
};

function topRisksReducer(state=initialState,action) {
    switch (action.type) {
        case TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK:
            return {...state,loading:true, success: false, error: null};
        case TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK_SUCCESS:
            return {...state,loading:false, success: true, error: null,topRisk: action.topRisk};
        case TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK_ERROR:
            return {...state,loading: false,success: false,error: action.error}

    }
}
