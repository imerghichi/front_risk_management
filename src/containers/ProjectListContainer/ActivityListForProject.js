import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory, useLocation, useParams} from "react-router";
import {
    projectListSelector,
    projectListLoadingSelector,
    projectListErrorSelector,
    activitiesforporjectSelector, activitiesforprojectErrorSelector
} from './redux/selectors';
import { projectListActions } from './redux/actions';
import ProjectManagerTable from "../../components/ProjectManager/ProjectManagerTable";
import {activityListLoadingSelector} from "../ActivityList Container/redux/selectors";
import ActivityTable from "../../components/ActivityManager/ActivityTable";
import {contingencyPlanListActions} from "../ContingencyPlanContainer/redux/actions";

function ActivityListForProject() {
    const dispatch = useDispatch();
    const project_id = useParams();
    const history = useHistory();

    const activitiesforProject = useSelector(activitiesforporjectSelector);
    const loading = useSelector(activityListLoadingSelector);
    const error = useSelector(activitiesforprojectErrorSelector);

    useEffect(() => {
        dispatch(projectListActions.getActivitiesforProject());
    }, [dispatch]);

    const editAction = (id) => history.push("/editactivity/" + id);
    const deleteAction = (id) =>history.push("/'deleteactivity/"+id);
    const applyRejectionMethod = (id) =>history.push("/rejection/"+id);
    const addRisk = (id) =>history.push("/addRisktoavctivity/");
    const showRisk = (id)=>history.push("/showRisk/"+id);
    return (
        <Loader loading={loading} >
            <ActivityTable
                activityList={activitiesforProject}
                editAction={editAction}
                deleteAction={deleteAction}
                applyRejectionMethod={applyRejectionMethod}
                addRisk={addRisk}
                showRisk={showRisk}
            />
        </Loader>
    );
}

export default ActivityListForProject;
