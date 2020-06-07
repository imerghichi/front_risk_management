import React from 'react';
import {useDispatch} from "react-redux";
import {causalTreeActions} from "./redux/actions";
import CausalTreeForm from "../../components/Forms/CausalTreeForm";

function CausalTreeFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(causalTreeActions.postCausalTree(vals));
    };

    return (
        <CausalTreeForm
            submitHandler={submitHandler}
        />
    );
}

export default CausalTreeFormContainer;
