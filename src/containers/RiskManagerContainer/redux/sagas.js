import { all, call, put, takeLatest } from 'redux-saga/effects';
import {RISK_MATRIX_ACTION_TYPES, riskMatrixActions} from "./actions";
import fetchApi from "../../../common/networking";

export function* getRiskMatrixSaga() {
    try {
        const response = yield call(fetchApi, "http://localhost:9000/v1/intervenants?requestId=wr");
        yield put(riskMatrixActions.getRiskMatrixSuccess(response));
    } catch (e) {
        yield put(riskMatrixActions.getRiskMatrixError(e));
    }
}

function* watchRiskMatrixSaga() {
    yield all([
        takeLatest(RISK_MATRIX_ACTION_TYPES.GET_RISK_MATRIX, getRiskMatrixSaga)
    ]);
}

export default watchRiskMatrixSaga;