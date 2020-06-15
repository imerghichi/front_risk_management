import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory, useLocation, useParams} from "react-router";
import RiskManagerTable from "../../components/RiskManager/RiskManagerTable";
import {id_activitySelector, riskforactivityLoadingSelector, riskforactivitySelector} from "./redux/selectors";
import {activityListActions} from "./redux/actions";

function RiskforActivityContainer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const riskList = useSelector(riskforactivitySelector);
    const loading = useSelector(riskforactivityLoadingSelector);
    const error = useSelector(riskforactivityLoadingSelector);

    useEffect(() => {
        if (id) dispatch(activityListActions.getRiskforActivity(id));
    }, [dispatch]);

    const editAction = (id) => history.push("/editrisk/"+id);
    const addResponse = (id) => history.push("/addresponse/"+id);
    const showResponse = (id) => history.push("/showresponse/"+id);

    return (
        <Loader loading={loading} error={error} noData={!Number(id)}>
            <RiskManagerTable
                riskList={riskList}
                editAction={editAction}
                showResponse={showResponse}
                addResponse={addResponse}
            />
        </Loader>
    );
}

export default RiskforActivityContainer;
