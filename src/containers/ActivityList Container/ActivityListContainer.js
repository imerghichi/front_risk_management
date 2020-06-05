import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory} from "react-router";
import {activityListErrorSelector, activityListLoadingSelector, activityListSelector} from "./redux/selectors";
import {activityListActions} from "./redux/actions";
import ActivityTable from "../../components/ActivityManager/ActivityTable";

function ActivityListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const activityList = useSelector(activityListSelector);
    const loading = useSelector(activityListLoadingSelector);
    const error = useSelector(activityListErrorSelector);

    useEffect(() => {
        dispatch(activityListActions.getActivityList());
    }, [dispatch]);

    const editAction = (id) => history.push("/'edit'");
    const deleteAction = (id) =>history.push("/'delete");
    const applyRejectionMethod = (id) =>history.push("/rejection");
    const addRisk = (id) =>history.push("/addRisk");
    const showRisk = (id)=> history.push("/showRisk");

    return (
        <Loader loading={loading} error={error}>
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
