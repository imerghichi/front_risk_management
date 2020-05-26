import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import riskMatrixReducer from "../../../containers/RiskManagerContainer/redux/reducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    riskMatrix: riskMatrixReducer,
});

export default rootReducer;