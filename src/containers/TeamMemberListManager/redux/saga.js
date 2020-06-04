import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {TEAM_MEMBER_LIST_ACTION_TYPES, teamMemberListActions} from "./actions";

export function* getTemaMemberListSaga() {
    try {
        const response = yield call(fetchApi, "/teamMember");
        yield put(teamMemberListActions.getTeamMemberList(response));
    } catch (e) {
        yield put(teamMemberListActions.getTeamMemberListError(e));
    }
}


export function* addTeamMember(action) {
    try {
        const {teamMember} = action;
        const teamMemberDetails = yield call(fetchApi, "/teamMamber",{
            method: "POST",
            body: JSON.stringify(teamMember),
        });
        yield put(teamMemberListActions.postTeamMemberSuccess());
    } catch (e) {
        yield put(teamMemberListActions.postTeamMemberError(e));
    }
}

function* watchTeamMemberListSaga() {
    yield all([
        takeLatest(TEAM_MEMBER_LIST_ACTION_TYPES.GET_TEAM_MEMBER_LIST, getTemaMemberListSaga),
        takeLatest(TEAM_MEMBER_LIST_ACTION_TYPES.ADD_RISK, addTeamMember),

    ]);
}

export default watchTeamMemberListSaga();
