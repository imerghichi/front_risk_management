import React from 'react';
import {useDispatch} from "react-redux";
import {portfolioListActions} from "./redux/actions";
import PortfolioForm from "../../components/PortfolioManager/PortfolioForm";

function PortfolioFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(portfolioListActions.postPortfolio(vals));
    };

    return (
        <PortfolioForm
            submitHandler={submitHandler}
        />
    );
}

export default PortfolioFormContainer;
