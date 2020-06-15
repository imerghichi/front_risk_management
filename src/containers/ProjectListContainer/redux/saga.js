import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { projectListActions, PROJECT_LIST_ACTION_TYPES } from './actions';


export function* getProjectListSaga() {
    try {
        const response = yield call(fetchApi, "/allproject/");
        yield put(projectListActions.getProjectListSuccess(response));
        console.log("nunu", response);
    } catch (e) {
        yield put(projectListActions.getProjectListError(e));
    }
}

export function* addProject(action) {
    try {
        const {project} = action;
        const projectdetail = yield call(fetchApi, "/postproject/",{
            method: "POST",
            body: JSON.stringify(project),
        });
        yield put(projectListActions.postProjectSuccess());
    } catch (e) {
        yield put(projectListActions.postProjectError(e));
    }
}

export function* getActivitiesforProjectSaga(action) {
    try {
        const id_project = action.project_id;
        const response = yield call(fetchApi, "/allproject/"+ id_project);
        yield put(projectListActions.getActivitiesforProjectSuccess(response));
    } catch (e) {
        yield put(projectListActions.getProjectListError(e));
    }
}

export function* deleteProject(action) {
    const { id } = action;
    try {
        yield call(fetchApi, `/deleteproject/${id}`, {
            method: "DELETE"
        });
        yield put(projectListActions.deleteProjectSuccess());

        // when delete success, we fetch projects list again, to automatically fetch new data from server
        yield put(projectListActions.getProjectList());
    } catch (e) {
        yield put(projectListActions.deleteProjectError(e));
    }
}


function* watchProjectListSaga() {
    yield all([
        takeLatest(PROJECT_LIST_ACTION_TYPES.GET_PROJECT_LIST, getProjectListSaga),
        takeLatest(PROJECT_LIST_ACTION_TYPES.ADD_PROJECT, addProject),
        takeLatest(PROJECT_LIST_ACTION_TYPES.GET_ACTIVITY_FOR_PROJECT,getActivitiesforProjectSaga),
        takeLatest(PROJECT_LIST_ACTION_TYPES.DELETE_PROJECT, deleteProject)
    ]);
}

export default watchProjectListSaga;
