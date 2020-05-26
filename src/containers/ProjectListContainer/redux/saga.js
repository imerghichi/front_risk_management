import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { projectListActions, PROJECT_LIST_ACTION_TYPES } from './actions';


export function* getProjectListSaga() {
    try {
        const response = yield call(fetchApi, "/project");
        yield put(projectListActions.getProjectListSuccess(response));
    } catch (e) {
        yield put(projectListActions.getProjectListError(e));
    }
}

function* watchProjectListSaga() {
    yield all([
        takeLatest(PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST, getProjectListSaga)
    ]);
}

export default watchProjectListSaga;