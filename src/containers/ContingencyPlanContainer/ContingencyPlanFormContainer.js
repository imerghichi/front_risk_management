import React from 'react';
import {useDispatch} from "react-redux";
import {contingencyPlanListActions} from "./redux/actions";
import ContingencyPlanForm from "../../components/Forms/ContingencyPlanForm";

function ContingencyPlanFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(contingencyPlanListActions.postContingencyPlan(vals));
    };

    return (
        <ContingencyPlanForm
            submitHandler={submitHandler}
        />
    );
}

export default ContingencyPlanFormContainer;
