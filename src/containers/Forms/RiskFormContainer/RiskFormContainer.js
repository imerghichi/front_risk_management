import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import RiskForm from "../../components/RiskForm";
import {useHistory} from "react-router";
import {riskFormErrorSelector, riskFormSelector} from "./Redux/selectors";
import {riskFormActions} from "./Redux/actions";

function RiskManagerContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const loading = useSelector(riskFormSelector);
    const error = useSelector(riskFormErrorSelector);

    useEffect(() => {
        dispatch(riskFormActions.postRisk());
    }, [dispatch]);


    return (
        <Loader loading={loading} error={error}>
            <RiskForm/>
        </Loader>
    );
}

export default RiskManagerContainer;
