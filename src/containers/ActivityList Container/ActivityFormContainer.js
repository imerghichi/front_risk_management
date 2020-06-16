import React from 'react';
import {activityListActions} from "./redux/actions";
import ActivityForm from "../../components/ActivityManager/ActivityForm";
import {useDispatch} from "react-redux";

function ActivityFormContainer({ idProject }) {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(activityListActions.postActivity(idProject, vals));
    };
    const formInitialState = {
        task_name : "",
        description : "",
        distribution: "",
        parametre1: 0,
        parametre2: 0,
        parametre3: 0,
    };

    return (
        <ActivityForm
            submitHandler={submitHandler}
            formInitialState={formInitialState}
        />
    );
}

export default ActivityFormContainer;
