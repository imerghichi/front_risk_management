import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { activityListActions, ACTIVITY_LIST_ACTION_TYPES } from './actions';


export function* getActivityListSaga() {
    try {
        const response = yield call(fetchApi, "/activity");
        yield put(activityListActions.getActivityListSuccess(response));
    } catch (e) {
        yield put(activityListActions.getActivityListError(e));
    }
}

export function* addActivity(action) {
    try {
        const {activity} = action;
        const activityDetails = yield call(fetchApi, "/activity",{
            method: "POST",
            body: JSON.stringify(activity),
        });
        yield put(activityListActions.postActivitySuccess());
    } catch (e) {
        yield put(activityListActions.postActivityError(e));
    }
}

function* watchActivityListSaga() {
    yield all([
        takeLatest(ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST, getActivityListSaga)
    ]);
}

export default watchActivityListSaga;
