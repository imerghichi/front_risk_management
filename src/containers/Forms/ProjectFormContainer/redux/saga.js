import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {PROJECT_FORM_ACTION_TYPES, projectFormActions} from "./actions";


export function* addProject(action) {
    try {
        const {project} = action;
        const projectdetail = yield call(fetchApi, "/project",{
            method: "POST",
            body: JSON.stringify(project),
        });
        yield put(projectFormActions.postProjectSuccess());
    } catch (e) {
        yield put(projectFormActions.postProjectError(e));
    }
}

function* watchProjectFormSaga() {
    yield all([
        takeLatest(PROJECT_FORM_ACTION_TYPES.ADD_PROJECT, addProject)
    ]);
}

export default watchProjectFormSaga;
