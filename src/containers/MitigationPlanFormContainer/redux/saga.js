import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {MITIGATION_PLAN_ACTION_TYPES, mitigationPlanListActions} from "./action";


export function* addMitigationPlan(action) {
    try {
        const {mitigationPlan} = action;
        const mitigationPlanDetails = yield call(fetchApi, "/cp",{
            method: "POST",
            body: JSON.stringify(mitigationPlan),
        });
        yield put(mitigationPlanListActions.postMitigationPlan);
    } catch (e) {
        yield put(mitigationPlanListActions.postMitigationPlanError(e));
    }
}


function* watchMitigationPlanSaga() {
    yield all([
        takeLatest(MITIGATION_PLAN_ACTION_TYPES.ADD_MITIGATION_PLAN, addMitigationPlan)
    ]);
}

export default watchMitigationPlanSaga;
