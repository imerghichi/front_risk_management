import { all, call, put, takeLatest } from 'redux-saga/effects';
import fetchApi from "../../../common/networking";
import {PORTFOILIO_FORM_ACTION_TYPES, portfolioFormActions} from "./actions";


export function* addPortfolio(action) {
    try {
        const {portfolio} = action;
        const portfolioDetails = yield call(fetchApi, "/portfolio",{
            method: "POST",
            body: JSON.stringify(portfolio),
        });
        yield put(portfolioFormActions.postPortfolioSuccess());
    } catch (e) {
        yield put(portfolioFormActions.postPortfolioError(e));
    }
}

function* watchPortfolioFormSaga() {
    yield all([
        takeLatest(PORTFOILIO_FORM_ACTION_TYPES.ADD_PORTFOLIO, addPortfolio)
    ]);
}

export default watchPortfolioFormSaga;
