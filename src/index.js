import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import * as serviceWorker from './serviceWorker';
import configureAppStore from "./common/redux/store/configureStore";
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import history from "./common/history";
import Routes from "./routes/Routes";

const store = configureAppStore();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <Routes />
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
