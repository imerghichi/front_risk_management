import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import {riskListActions} from "./redux/actions";
import {riskListErrorSelector, riskListSelector, riskListoadingSelector} from "./redux/selectors";
import Loader from "../../components/Loader/Loader";
import RiskListTable from "../../components/RiskManager/RiskListTable";
import {useHistory} from "react-router";

function RiskListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const riskList = useSelector(riskListSelector);
    const loading = useSelector(riskListoadingSelector);
    const error = useSelector(riskListErrorSelector);

    useEffect(() => {
        dispatch(riskListActions.getRiskList());
    }, [dispatch]);

    const editAction = (id) => history.push("/'edit'");
    const addResponse = (id) => history.push("/response/{id}");

    return (
        <Loader loading={loading} error={error}>
            <RiskListTable
                riskList={riskList}
                editAction={editAction}
                addResponse={addResponse}
            />
        </Loader>
    );
}

export default RiskListContainer;