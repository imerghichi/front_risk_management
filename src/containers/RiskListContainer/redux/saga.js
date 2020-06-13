import { all, call, put, takeLatest } from 'redux-saga/effects';
import {RISK_LIST_ACTION_TYPES, riskListActions} from "./actions";
import fetchApi from "../../../common/networking";

export function* getRiskListSaga() {
    try {
        const response = yield call(fetchApi, "http://localhost:8080/aproject/2", {
            method: "GET"});
        yield put(riskListActions.getRiskListSuccess(response));
    } catch (e) {
        yield put(riskListActions.getRiskListError(e));
    }
}


export function* addRisk(action) {
    const { riskData } = action;
    try {
        yield call(fetchApi, "/postrisk", {
            method: "POST",
            body: JSON.stringify(riskData),
        });
        yield put(riskListActions.postRiskSuccess());
    } catch (e) {
        yield put(riskListActions.postRiskError(e));
    }
}

function* watchRiskListSaga() {
    yield all([
        takeLatest(RISK_LIST_ACTION_TYPES.GET_RISK_LIST, getRiskListSaga),
        takeLatest(RISK_LIST_ACTION_TYPES.ADD_RISK, addRisk),

    ]);
}

export default watchRiskListSaga;
