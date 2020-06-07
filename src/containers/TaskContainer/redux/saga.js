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

export function* addProject(action) {
    try {
        const {project} = action;
        const projectdetail = yield call(fetchApi, "/project",{
            method: "POST",
            body: JSON.stringify(project),
        });
        yield put(projectListActions.postProjectSuccess());
    } catch (e) {
        yield put(projectListActions.postProjectError(e));
    }
}


function* watchProjectListSaga() {
    yield all([
        takeLatest(PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST, getProjectListSaga),
        takeLatest(PROJECT_LIST_ACTION_TYPES.ADD_PROJECT, addProject)
    ]);
}

export default watchProjectListSaga;