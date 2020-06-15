import {Route, Router, Switch} from "react-router";
import React from "react";
import history from "../common/history";
import Layout from "../Layout/Layout";
import RiskFormContainer from "../containers/RiskListContainer/RiskFormContainer";
import ProjectListContainer from "../containers/ProjectListContainer/ProjectListContainer";
import ActivityListContainer from "../containers/ActivityList Container/ActivityListContainer";
import FaultTreeFormContainer from "../containers/FaultTreeContainer/FaultTreeFormContainer";
import TaxonomieChart from "../components/ServiceOutput/TaxonomyChart";
import ActivityListForProject from "../containers/ProjectListContainer/ActivityListForProject";
import RiskListContainer from "../containers/RiskListContainer/RiskListCintainer";
import RiskforActivityContainer from "../containers/ActivityList Container/RiskForActivityContainer";
import DashboardContainer from "../containers/DashboardContainer/DashboardContainer";
import CaperJones from "../containers/Artefacts/CaperJones";
import ResponseForm from "../components/Forms/ResponseForm";
import RexBlack from "../containers/Artefacts/RexBlack";
import SeiTaxonomieList from "../containers/Artefacts/SeiTaxonomieList";

function Routes() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={DashboardContainer}/>
                    <Route exact path="/showprojects" component={ProjectListContainer} />
                    <Route exact path="/showrisks" component={RiskListContainer}/>
                    <Route exact path="/showtasks" component={ActivityListContainer}/>
                    <Route exact path="/caperJones" component={CaperJones}/>
                    <Route exact path="/rexBlack" component={RexBlack}/>
                    <Route exact path="/sei" component={SeiTaxonomieList}/>
                    <Route exact path="/taxo/" component={TaxonomieChart}/>
                    <Route exact path="/faultTreeForm/" component={FaultTreeFormContainer}/>
                    <Route exact path="/showTasks/" component={ActivityListContainer}/>
                    <Route exact path="/addRisktoavctivity/" component={RiskFormContainer}/>
                    <Route exact path= "/activities/*" component={ActivityListForProject}/>
                    <Route exact path="/risks/" component={RiskListContainer}/>
                    <Route exact path="/showRisk/*" component={RiskforActivityContainer}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default Routes;
