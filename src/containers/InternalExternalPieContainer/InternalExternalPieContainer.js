import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {originSelector, originSelectorError, originSelectorLoading} from "./redux/selector";
import {useEffect} from "react";
import {originActions} from "./redux/actions";
import Loader from "../../components/Loader/Loader";
import InternalExternalPie from "../../components/ServiceOutput/InternalExternalPie";

function InternalExternalPieContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const frequencies = useSelector(originSelector);
    const loading = useSelector(originSelectorLoading);
    const error = useSelector (originSelectorError);

    useEffect(()=>{
        dispatch(originActions.getOrigin());
        }, [dispatch]);

    return(
        <Loader loading={loading} error={error}>
            <InternalExternalPie
                frequencies={frequencies}
            />
        </Loader>
    )
}
