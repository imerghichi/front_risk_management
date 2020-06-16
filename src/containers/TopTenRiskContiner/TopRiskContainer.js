import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {topRiskErrorSelector, topRiskLoadingSelector, topRiskSelector} from "./redux/selector";
import {topTenRiskActions} from "./redux/action";
import Loader from "../../components/Loader/Loader";
import {Card, ListGroup} from "react-bootstrap";

function TopRiskContainer() {
    const dispatch = useDispatch();

    const topRisk = useSelector(topRiskSelector);
    const loading = useSelector(topRiskLoadingSelector);
    const error = useSelector(topRiskErrorSelector);

    useEffect(()=>{
        dispatch(topTenRiskActions.gettopTen());
    }, dispatch);

    return(
        <Loader loading={loading}>
            <ListGroup >
                <ListGroup.Item>
                    {topRisk[0].risk_name}
                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[1].risk_name}

                </ListGroup.Item>

                <ListGroup.Item>
                    {topRisk[2].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[3].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[4].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[5].risk_name}

                </ListGroup.Item>

                <ListGroup.Item>
                    {topRisk[6].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[7].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[8].risk_name}

                </ListGroup.Item>
                <ListGroup.Item>
                    {topRisk[9].risk_name}
                </ListGroup.Item>
            </ListGroup>

        </Loader>
    )
}
