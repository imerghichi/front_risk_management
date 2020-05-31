import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import { portfolioListActions, PORTFOLIO_LIST_ACTION_TYPES } from './actions';
import {portfolioFormActions} from "../../Forms/PortfolioFormContainer/redux/actions";


export function* getPortfolioListSaga() {
    try {
        const response = yield call(fetchApi, "/portfolio");
        yield put(portfolioListActions.getPortfolioListSuccess(response));
    } catch (e) {
        yield put(portfolioListActions.getPortfolioListError(e));
    }
}
export function* addPortfolio(action) {
    try {
        const {portfolio} = action;
        const portfolioDetails = yield call(fetchApi, "/portfolio",{
            method: "POST",
            body: JSON.stringify(portfolio),
        });
        yield put(portfolioListActions.postPortfolioSuccess());
    } catch (e) {
        yield put(portfolioListActions.postPortfolioError(e));
    }
}

function* watchPortfolioListSaga() {
    yield all([
        takeLatest(PORTFOLIO_LIST_ACTION_TYPES.GET_PORTFOLIO_LIST, getPortfolioListSaga),
        takeLatest(PORTFOLIO_LIST_ACTION_TYPES.ADD_PORTFOLIO, addPortfolio),
    ]);
}

export default watchPortfolioListSaga;
