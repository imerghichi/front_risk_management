import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory, useLocation} from "react-router";
import RiskManagerTable from "../../components/RiskManager/RiskManagerTable";
import {riskforactivityLoadingSelector, riskforactivitySelector} from "./redux/selectors";
import {activityListActions} from "./redux/actions";

function RiskListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const riskList = useSelector(riskforactivitySelector);
    const loading = useSelector(riskforactivityLoadingSelector);
    const error = useSelector(riskforactivityLoadingSelector);

    useEffect(() => {
        dispatch(activityListActions.getRiskforActivity());
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
