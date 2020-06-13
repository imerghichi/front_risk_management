import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer'
import logger from "./middleware/logger";
import {applyMiddleware, compose, createStore} from "redux";
import monitorReducerEnhancer from "./middleware/monitorReducer";
import isProduction from "../../environement";
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "../sagas/rootSaga";
import history from "../../history";

export default function configureAppStore() {

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware, logger];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];

    const composeFunc = isProduction() ? compose : composeWithDevTools;

    const composeEnhancers = composeFunc(...enhancers);
    const store = createStore(rootReducer(history), composeEnhancers);


    sagaMiddleware.run(rootSaga);

    return store
};
