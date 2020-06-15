import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory, useParams} from "react-router";
import {activityListErrorSelector, activityListLoadingSelector, activityListSelector} from "./redux/selectors";
import {activityListActions} from "./redux/actions";
import ActivityTable from "../../components/ActivityManager/ActivityTable";
import {render} from "react-dom";

function ActivityListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const activityList = useSelector(activityListSelector);
    const loading = useSelector(activityListLoadingSelector);
    const error = useSelector(activityListErrorSelector);

    useEffect(() => {
        dispatch(activityListActions.getActivityList());
    }, [dispatch]);

    const editAction = (id) => history.push("/editactivity/" + id);
    const deleteAction = (id) =>history.push("/'deleteactivity/"+id);
    const applyRejectionMethod = (id) =>history.push("/rejection/"+id);
    const addRisk = (id) =>history.push("/addRisktoactivity/");
    const showRisk = (id)=>history.push("/showRisk/"+id);

    return (
        <Loader loading={loading}>
            <ActivityTable
                activityList={activityList}
                editAction={editAction}
                deleteAction={deleteAction}
                applyRejectionMethod={applyRejectionMethod}
                addRisk={addRisk}
                showRisk={showRisk}
            />
        </Loader>
    );
}

export default ActivityListContainer;
