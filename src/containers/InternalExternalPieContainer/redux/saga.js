import {ORIGIN_ACTION_TYPE, originActions} from "./actions";
import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";

export function* getOriginFrequenciesSaga() {
    try {
        const response  = yield call(fetchApi, "/activity");
        yield put(originActions.getOriginSuccess(response));
    } catch (e) {
        yield put(originActions.getOriginError(e));
    }
    }

function* watchOriginSaga(){
    yield all ([
        takeLatest(ORIGIN_ACTION_TYPE.GET_FREQUENCIES,getOriginFrequenciesSaga),
        ]
    )
}

