import {Route, Router, Switch} from "react-router";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import RiskFormContainer from "../containers/RiskListContainer/RiskFormContainer";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";

function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ProjectListContainer} />
                    <Route exact path="/addRisktoavctivity/" component={RiskFormContainer}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default Routes;
