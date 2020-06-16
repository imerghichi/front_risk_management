import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { activityListActions, ACTIVITY_LIST_ACTION_TYPES } from './actions';


export function* getActivityListSaga() {
    try {
        const response = yield call(fetchApi, "/allac/");
        yield put(activityListActions.getActivityListSuccess(response));
    } catch (e) {
        yield put(activityListActions.getActivityListError(e));
    }
}
export function* getRisksforActivitytSaga(action) {
    try {
        const id_activity = action.id_activity;
        const response = yield call(fetchApi, "/activity/"+ id_activity);
        yield put(activityListActions.getRiskforActivitySuccess(response));
    } catch (e) {
        yield put(activityListActions.getRiskforActivityError(e));
    }
}

export function* addActivity(action) {
    try {
        const { idProject, activityData } = action;
        yield call(fetchApi, "/add/",{
            method: "POST",
            body: JSON.stringify({
                project: idProject,
                ...activityData,
            }),
        });
        yield put(activityListActions.postActivitySuccess());
    } catch (e) {
        yield put(activityListActions.postActivityError(e));
    }
}
export function* deleteActivity(action) {
    try {
        const {activity} = action;
        const activityDetails = yield call(fetchApi, "/deleteact/",{
            method: "DELETE",
            body: JSON.stringify(activity),
        });
        yield put(activityListActions.deleteActivtySuccess());
    }catch (e) {
        yield put(activityListActions.getActivityListError(e));
    }

}


function* watchActivityListSaga() {
    yield all([
        takeLatest(ACTIVITY_LIST_ACTION_TYPES.GET_ACTIVITY_LIST, getActivityListSaga),
        takeLatest(ACTIVITY_LIST_ACTION_TYPES.ADD_ACTIVITY,addActivity),
        takeLatest(ACTIVITY_LIST_ACTION_TYPES.DELETE_ACTIVITY, deleteActivity),
        takeLatest(ACTIVITY_LIST_ACTION_TYPES.GET_RISK_FOR_ACTIVITY,getRisksforActivitytSaga),
    ]);
}

export default watchActivityListSaga;
