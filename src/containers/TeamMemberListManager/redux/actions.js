export const TEAM_MEMBER_LIST_ACTION_TYPES = {
    GET_TEAM_MEMBER_LIST: "GET_TEAM_MEMBER_LIST",
    GET_TEAM_MEMBER_LIST_SUCCESS: "GET_TEAM_MEMBER_LIST_SUCCESS",
    GET_TEAM_MEMBER_LIST_ERROR: "GET_TEAM_MEMBER_LIST_ERROR",
    ADD_TEAM_MEMBER: "ADD_TEAM_MEMBER",
    ADD_TEAM_MEMBER_SUCCESS: "ADD_TEAM_MEMBER_SUCCESS",
    ADD_TEAM_MEMBER_ERROR: "ADD_TEAM_MEMBER_ERROR",
};
export const teamMemberListActions = {
    getTeamMemberList: () => ({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST,
    }),
    getTeamMemberListSuccess: (data) => ({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST_SUCCESS,
        riskList: data
    }),
    getTeamMemberListError: (err) => ({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST_ERROR,
        error: err
    }),
    postTeamMember: () => ({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER,
    }),
    postTeamMemberSuccess: () =>({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER_SUCCESS,
    }),
    postTeamMemberError: (err) =>({
        type: TEAM_MEMBER_LIST_ACTION_TYPES.ADD_TEAM_MEMBER_ERROR,
        error: err,
    })
};
