import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory} from "react-router";
import {portfolioListErrorSelector, portfolioListLoadingSelector, portfolioListSelector} from "./redux/selectors";
import {portfolioListActions} from "./redux/actions";
import PortfolioMangerTable from "../../components/PortfolioManager/PortfolioTable";

function PortfolioListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const portfolioList = useSelector(portfolioListSelector);
    const loading = useSelector(portfolioListLoadingSelector);
    const error = useSelector(portfolioListErrorSelector);

    useEffect(() => {
        dispatch(portfolioListActions.getPortfolioList());
    }, [dispatch]);

    const editAction = (id) => history.push("/editportfolio/"+id);
    const deleteAction = (id) =>history.push("/deleteportfolio/"+id);
    const simulate = (id) =>history.push("/simulateprotfolio/"+id);
    return (
        <Loader loading={loading} error={error}>
            <PortfolioMangerTable
                portfolioList = {portfolioList}
                editAction = {editAction}
                deleteAction = {deleteAction}
                simulate = {simulate}
            />
        </Loader>
    );
}

export default PortfolioListContainer;
