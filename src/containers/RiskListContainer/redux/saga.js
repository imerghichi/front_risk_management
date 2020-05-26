import { all, call, put, takeLatest } from 'redux-saga/effects';
import {RISK_LIST_ACTION_TYPES, riskListActions} from "./actions";
import fetchApi from "../../../common/networking";

export function* getRiskListSaga() {
    try {
        const response = yield call(fetchApi, "/risk");
        yield put(riskListActions.getRiskListSuccess(response));
    } catch (e) {
        yield put(riskListActions.getRiskListError(e));
    }
}

function* watchRiskListSaga() {
    yield all([
        takeLatest(RISK_LIST_ACTION_TYPES.GET_RISK_LIST, getRiskListSaga)
    ]);
}

export default watchRiskListSaga;
