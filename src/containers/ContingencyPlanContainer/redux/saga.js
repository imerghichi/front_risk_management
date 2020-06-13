import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {CONTINGENCY_PLAN_ACTION_TYPES, contingencyPlanListActions} from "./actions";


export function* addContingencyPlan(action) {
    try {
        const {contingencyPlan} = action;
        const contingencyPlandetail = yield call(fetchApi, "/cp",{
            method: "POST",
            body: JSON.stringify(contingencyPlan),
        });
        yield put(contingencyPlanListActions.postContingencyPlan());
    } catch (e) {
        yield put(contingencyPlanListActions.postContingencyPlanError(e));
    }
}


function* watchContingencyPlanSaga() {
    yield all([
        takeLatest(CONTINGENCY_PLAN_ACTION_TYPES.ADD_CONTINGENCY_PLAN, addContingencyPlan)
    ]);
}

export default watchContingencyPlanSaga;
