import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {RISK_FORM_ACTION_TYPES, riskFormActions} from "./actions";


export function* addRisk(action) {
    try {
        const {risk} = action;
        const riskDetails = yield call(fetchApi, "/risk",{
            method: "POST",
            body: JSON.stringify(risk),
        });
        yield put(riskFormActions.postRiskSuccess());
    } catch (e) {
        yield put(riskFormActions.postRiskError(e));
    }
}

function* watchRiskFormSaga() {
    yield all([
        takeLatest(RISK_FORM_ACTION_TYPES.ADD_RISK, addRisk)
    ]);
}

export default watchRiskFormSaga;
