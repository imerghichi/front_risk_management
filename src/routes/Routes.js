import {Route, Router, Switch} from "react-router";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import RiskFormContainer from "../containers/RiskListContainer/RiskFormContainer";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";
import ActivityListContainer from "../containers/ActivityList Container/ActivityListContainer";
import FaultTreeFormContainer from "../containers/FaultTreeContainer/FaultTreeFormContainer";
import TaxonomieChart from "../components/ServiceOutput/TaxonomyChart";

function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/taxo/" component={TaxonomieChart}/>
                    <Route exact path="/faultTreeForm/" component={FaultTreeFormContainer}/>
                    <Route exact path="/project/" component={ProjectListContainer} />
                    <Route exact path="/showTasks/" component={ActivityListContainer}/>
                    <Route exact path="/addRisktoavctivity/" component={RiskFormContainer}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default Routes;
