import { all, fork } from 'redux-saga/effects'
import watchActivityListSaga from "../../../containers/ActivityList Container/redux/saga";
import watchPortfolioListSaga from "../../../containers/PortfolioListContainer/redux/saga";
import watchProjectListSaga from "../../../containers/ProjectListContainer/redux/saga";
import watchRiskListSaga from "../../../containers/RiskListContainer/redux/saga";

export default function* rootSaga() {
    yield all([
        fork(watchActivityListSaga),
        fork(watchPortfolioListSaga),
        fork(watchProjectListSaga),
        fork(watchRiskListSaga),

    ]);
}
