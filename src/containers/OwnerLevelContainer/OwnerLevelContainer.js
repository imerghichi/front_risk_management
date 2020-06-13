import {ownerLevelErrorSelector, ownerLevelLoadingSelector, ownerLevelSelector} from "./redux/selector";
import React, {useEffect} from "react";
import {ownerLevelActions} from "./redux/action";
import Loader from "../../components/Loader/Loader";
import OwnerLevelPie from "../../components/ServiceOutput/OwnerLevelPie";
import {useDispatch, useSelector} from "react-redux";

function OwnerLevelContainer() {
    const dispatch = useDispatch();

    const frequencies = useSelector(ownerLevelSelector);
    const loading = useSelector(ownerLevelLoadingSelector);
    const error = useSelector(ownerLevelErrorSelector);

    useEffect(() => {
        dispatch(ownerLevelActions.getOwnerLevel());
    },[dispatch]);

    return(
        <Loader loading={loading} error={error}>
            <OwnerLevelPie
                frequencies={frequencies}
            />
        </Loader>
    )
}
export default OwnerLevelContainer;
