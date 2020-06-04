import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import riskListReducer from "../../../containers/RiskListContainer/redux/reducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    riskList: riskListReducer,
});

export default rootReducer;
