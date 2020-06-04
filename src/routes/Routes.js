import {Route, Router, Switch} from "react-router";
import ExampleComponent from "../components/ExampleComponent/ExampleComponent";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import RiskListContainer from "../containers/RiskListContainer/RiskListCintainer";

function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={RiskListContainer} />
                    <Route exact path="/configuration" component={ExampleComponent} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default Routes;
