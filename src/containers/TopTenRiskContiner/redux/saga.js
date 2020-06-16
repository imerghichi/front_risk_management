import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {TOP_TEN_RISK_ACTIONS, topTenRiskActions} from "./action";

export function* getTopRisksSaga() {
    try{
        const response = yield call(fetchApi,"/topTen");
        yield put(topTenRiskActions.gettopTenSuccess(response));
    }catch (e) {
        yield put(topTenRiskActions.gettopTenError(e));
    }
}
function* watchTopRiskSaga() {
    yield all([
        takeLatest(TOP_TEN_RISK_ACTIONS.GET_TOP_TEN_RISK,getTopRisksSaga)
    ]);
}
export default getTopRisksSaga;
