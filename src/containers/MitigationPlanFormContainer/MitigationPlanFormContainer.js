import React from 'react';
import {useDispatch} from "react-redux";
import {contingencyPlanListActions} from "./redux/actions";
import {mitigationPlanListActions} from "./redux/action";
import MitigationPlanForm from "../../components/Forms/MitigationPlanForm";

function MitigationPlanFormContainer() {
    const dispatch= useDispatch();
    const submitHandler= (vals) => {
        dispatch(mitigationPlanListActions.postMitigationPlan(vals));
    };
    return(
        <MitigationPlanForm
            submitHandler={submitHandler}
        />
    );
}
export default MitigationPlanFormContainer;
