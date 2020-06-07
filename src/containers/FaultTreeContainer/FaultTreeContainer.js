import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory} from "react-router";
import {faultTreeSelector, faultTreeLoadingSelector, faultTreeErrorSelector} from './redux/selectors';
import {faultTreeActions, projectListActions} from './redux/actions';

function FaultTreeContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const faultTree = useSelector(faultTreeSelector);
    const loading = useSelector(faultTreeLoadingSelector);
    const error = useSelector(faultTreeErrorSelector);

    useEffect(() => {
        dispatch(faultTreeActions.getFaultTree());
    }, [dispatch]);

    const editAction = (id) => history.push("/edit");
    const deleteAction = (id) =>history.push("/'delete");

    return (
        <Loader loading={loading} error={error}>
            <FaultTreeView
                faultTree={faultTree}
                editAction={editAction}
                deleteAction = {deleteAction}
            />
        </Loader>
    );
}

export default FaultTreeContainer;
