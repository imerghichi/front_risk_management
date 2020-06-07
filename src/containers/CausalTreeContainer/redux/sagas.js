import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {CAUSAL_TREE_ACTION_TYPES, causalTreeActions} from "./actions";

export function* getCausalTreeSaga() {
    try {
        const response = yield call(fetchApi, "http://localhost:9000/v1/intervenants?requestId=wr");
        yield put(causalTreeActions.getCausalTree(response));
    } catch (e) {
        yield put(causalTreeActions.getCausalTreeError(e));
    }
}

export function* postCausalTreeSaga(action) {
    const formValues = action.formValues;
    try {
        yield call(fetchApi, "http://localhost:9000/v1/intervenants?requestId=wr", {
            method: "POST",
            body: JSON.stringify(formValues)
        });
        yield put(causalTreeActions.postCausalTreeSuccess());
    } catch (e) {
        yield put(causalTreeActions.postCausalTreexError(e))
    }
}

function* watchCausalTreeSaga() {
    yield all([
        takeLatest(CAUSAL_TREE_ACTION_TYPES.GET_CAUSAL_TREE, getCausalTreeSaga),
        takeLatest(CAUSAL_TREE_ACTION_TYPES.POST_CAUSAL_TREE, postCausalTreeSaga),
    ]);
}

export default watchCausalTreeSaga;
