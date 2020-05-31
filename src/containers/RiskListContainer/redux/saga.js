import { all, call, put, takeLatest } from 'redux-saga/effects';
import {RISK_LIST_ACTION_TYPES, riskListActions} from "./actions";
import fetchApi from "../../../common/networking";
import {RISK_FORM_ACTION_TYPES} from "../../Forms/RiskFormContainer/Redux/actions";

export function* getRiskListSaga() {
    try {
        const response = yield call(fetchApi, "/risk");
        yield put(riskListActions.getRiskListSuccess(response));
    } catch (e) {
        yield put(riskListActions.getRiskListError(e));
    }
}


export function* addRisk(action) {
    try {
        const {risk} = action;
        const riskDetails = yield call(fetchApi, "/risk",{
            method: "POST",
            body: JSON.stringify(risk),
        });
        yield put(riskListActions.postRiskSuccess());
    } catch (e) {
        yield put(riskListActions.postRiskError(e));
    }
}

function* watchRiskListSaga() {
    yield all([
        takeLatest(RISK_LIST_ACTION_TYPES.GET_RISK_LIST, getRiskListSaga),
        takeLatest(RISK_FORM_ACTION_TYPES.ADD_RISK, addRisk),

    ]);
}

export default watchRiskListSaga;
