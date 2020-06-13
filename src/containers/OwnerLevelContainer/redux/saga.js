import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {OWNER_LEVEL_ACTION_TYPES, ownerLevelActions} from "./action";

export function* getOwnerLevelSaga() {
    try {
        const response = yield call(fetchApi,"/");
        yield put(ownerLevelActions.getOwnerLevelSuccess(response));
    } catch (e) {
        yield put(ownerLevelActions.getOwnerLevelError(e));
    }
}

function* watchOwnerLevelSaga() {
    yield all([
        takeLatest(OWNER_LEVEL_ACTION_TYPES.GET_OWNER_LEVEL,getOwnerLevelSaga)
    ]);
}
export default watchOwnerLevelSaga;
