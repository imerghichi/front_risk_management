import {Route, Router, Switch} from "react-router";
import ExampleComponent from "../components/ExampleComponent/ExampleComponent";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import RiskManagerContainer from "../containers/RiskManagerContainer/RiskManagerContainer";
import RiskManagerFormContainer from "../containers/RiskManagerContainer/RiskManagerFormContainer";

function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={RiskManagerContainer} />
                    <Route exact path="/edit" component={RiskManagerFormContainer} />
                    <Route exact path="/configuration" component={ExampleComponent} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default Routes;