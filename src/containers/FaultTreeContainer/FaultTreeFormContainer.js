import React from 'react';
import {useDispatch} from "react-redux";
import {faultTreeActions} from "./redux/actions";
import FaultTreeForm from "../../components/Forms/FaultTreeForm";

function FaultTreeFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(faultTreeActions.postFaultTree(vals));
    };

    return (
        <FaultTreeForm
            submitHandler={submitHandler}
        />
    );
}

export default FaultTreeFormContainer;
