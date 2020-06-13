import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import {riskListActions} from "./redux/actions";
import {riskListErrorSelector, riskListSelector, riskListLoadingSelector} from "./redux/selectors";
import Loader from "../../components/Loader/Loader";
import {useHistory} from "react-router";
import RiskManagerTable from "../../components/RiskManager/RiskManagerTable";

function RiskListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const riskList = useSelector(riskListSelector);
    const loading = useSelector(riskListLoadingSelector);
    const error = useSelector(riskListErrorSelector);

    useEffect(() => {
        dispatch(riskListActions.getRiskList());
    }, [dispatch]);

    const editAction = (id) => history.push("/editrisk/"+id);
    const addResponse = (id) => history.push("/addresponse/"+id);
    const showResponse = (id) => history.push("/showresponse/"+id);

    return (
        <Loader loading={loading} error={error}>
            <RiskManagerTable
                riskList={riskList}
                editAction={editAction}
                showResponse={showResponse}
                addResponse={addResponse}
            />
        </Loader>
    );
}

export default RiskListContainer;
