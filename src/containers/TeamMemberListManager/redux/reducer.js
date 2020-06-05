import {TEAM_MEMBER_LIST_ACTION_TYPES} from "./actions";

const initalState = {
    teamMemberList: {},
    loading: false,
    success: false,
    error: null
};

function teamMemberListReducer(state = initalState, action) {
    switch (action.type) {
        case TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST:
            return { ...state, loading: true, error: null, success: false };
        case TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST_SUCCESS:
            return { ...state, success: true, teamMemberList: action.teamMemberList, loading: false, error: null };
        case TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST_ERROR:
            return { ...state, error: action.error, success: false, loading: false };
        case TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER:
            return {...state, loading: true};
        case TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER_SUCCESS:
            return {...state, loading: false, success: true};
        case TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER_ERROR:
            return {...state,loading: false, error: action.error};
        default:
            return state;
    }
}
