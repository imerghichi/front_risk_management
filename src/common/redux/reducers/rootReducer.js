import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import riskListReducer from "../../../containers/RiskListContainer/redux/reducer";
import activityListReducer from "../../../containers/ActivityList Container/redux/reducer";
import projectListReducer from "../../../containers/ProjectListContainer/redux/reducer";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    riskList: riskListReducer,
    activityList: activityListReducer,
    projectList:projectListReducer,

});

export default rootReducer;
