import React from 'react';
import {activityListActions} from "./redux/actions";
import ActivityForm from "../../components/ActivityManager/ActivityForm";
import {useDispatch} from "react-redux";

function ActivityFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(activityListActions.postActivity(vals));
    };

    return (
        <ActivityForm
            submitHandler={submitHandler}
        />
    );
}

export default ActivityFormContainer;
