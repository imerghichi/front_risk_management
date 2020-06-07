import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {FAULT_TREE_ACTION_TYPES, faultTreeActions} from "./actions";


export function* getFaultTreeSaga() {
    try {
        const response = yield call(fetchApi, "/project");
        yield put(faultTreeActions.getFaultTreeSuccess(response));
    } catch (e) {
        yield put(faultTreeActions.getFaultTreeError(e));
    }
}

export function* addFaultTree(action) {
    try {
        const {faultTree} = action;
        const faultTreeDetails = yield call(fetchApi, "/project",{
            method: "POST",
            body: JSON.stringify(project),
        });
        yield put(faultTreeActions.postFaultTree());
    } catch (e) {
        yield put(faultTreeActions.postFaultTreetError(e));
    }
}


function* watchFaultTreeSaga() {
    yield all([
        takeLatest(FAULT_TREE_ACTION_TYPES.GET_FAULT_TREE, getFaultTreeSaga),
        takeLatest(FAULT_TREE_ACTION_TYPES.ADD_FAULT_TREE, addFaultTree)
    ]);
}

export default watchFaultTreeSaga;
