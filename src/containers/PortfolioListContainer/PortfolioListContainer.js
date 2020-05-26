import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import PortfolioListTable from "../../components/portfoliolioListTable";
import {useHistory} from "react-router";
import {portfolioListErrorSelector, portfolioListLoadingSelector, portfolioListSelector} from "./redux/selectors";
import {portfolioListActions} from "./redux/actions";

function PortfolioListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const portfolioList = useSelector(portfolioListSelector);
    const loading = useSelector(portfolioListLoadingSelector);
    const error = useSelector(portfolioListErrorSelector);

    useEffect(() => {
        dispatch(portfolioListActions.getPortfolioList());
    }, [dispatch]);

    const editAction = (id) => history.push("/'edit'");
    const deleteAction = (id) =>history.push("/delete");
    return (
        <Loader loading={loading} error={error}>
            <PortfolioListTable
                portfolioList = {portfolioList}
                editAction = {editAction}
                deleteAction = {deleteAction}
            />
        </Loader>
    );
}

export default PortfolioListContainer;
