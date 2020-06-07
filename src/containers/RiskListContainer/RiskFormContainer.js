import React from 'react';
import {useDispatch} from "react-redux";
import {riskListActions} from "./redux/actions";
import RiskManagerForm from "../../components/RiskManager/RiskManagerForm";

function RiskFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(riskListActions.postRisk(vals));
    };

    return (
        <RiskManagerForm
            submitHandler={submitHandler}
        />
    );
}

export default RiskFormContainer;
