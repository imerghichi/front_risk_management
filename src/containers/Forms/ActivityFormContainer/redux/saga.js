import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {ACTIVITY_FORM_ACTION_TYPES, activitykFormActions} from "./actions";


export function* addActivity(action) {
    try {
        const {activity} = action;
        const riskDetails = yield call(fetchApi, "/activity",{
            method: "POST",
            body: JSON.stringify(activity),
        });
        yield put(activitykFormActions.postActivitySuccess());
    } catch (e) {
        yield put(activitykFormActions.postActivityError(e));
    }
}

function* watchActivityFormSaga() {
    yield all([
        takeLatest(ACTIVITY_FORM_ACTION_TYPES.ADD_ACTIVITY, addActivity)
    ]);
}

export default watchActivityFormSaga;
