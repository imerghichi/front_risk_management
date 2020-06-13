import {Route, Router, Switch} from "react-router";
import ExampleComponent from "../components/ExampleComponent/ExampleComponent";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import ProjectFormContainer from "../containers/ProjectListContainer/ProjectFormContainer";
import RiskFormContainer from "../containers/RiskListContainer/RiskFormContainer";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";
import RiskListContainer from "../containers/RiskListContainer/RiskListCintainer";
import ActivityListContainer from "../containers/ActivityList Container/ActivityListContainer";
import ActivityForm from "../components/ActivityManager/ActivityForm";

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
