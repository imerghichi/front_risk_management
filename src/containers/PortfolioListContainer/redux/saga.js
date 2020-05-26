import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { portfolioListActions, PORTFOLIO_LIST_ACTION_TYPES } from './actions';


export function* getPortfolioListSaga() {
    try {
        const response = yield call(fetchApi, "/portfolio");
        yield put(portfolioListActions.getPortfolioListSuccess(response));
    } catch (e) {
        yield put(portfolioListActions.getPortfolioListError(e));
    }
}

function* watchPortfolioListSaga() {
    yield all([
        takeLatest(PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST, getPortfolioListSaga)
    ]);
}

export default watchPortfolioListSaga;