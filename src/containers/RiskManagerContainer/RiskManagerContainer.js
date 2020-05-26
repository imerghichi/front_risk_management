import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import {riskMatrixActions} from "./redux/actions";
import {riskMatrixErrorSelector, riskMatrixLoadingSelector, riskMatrixSelector} from "./redux/selectors";
import Loader from "../../components/Loader/Loader";
import RiskManagerTable from "../../components/RiskManager/RiskManagerTable";
import {useHistory} from "react-router";

function RiskManagerContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const riskMatrix = useSelector(riskMatrixSelector);
    const loading = useSelector(riskMatrixLoadingSelector);
    const error = useSelector(riskMatrixErrorSelector);

    useEffect(() => {
        dispatch(riskMatrixActions.getRiskMatrix());
    }, [dispatch]);

    const editAction = (id) => history.push("/edit");

    return (
        <Loader loading={loading} error={error}>
            <RiskManagerTable
                riskMatrix={riskMatrix}
                editAction={editAction}
            />
        </Loader>
    );
}

export default RiskManagerContainer;
