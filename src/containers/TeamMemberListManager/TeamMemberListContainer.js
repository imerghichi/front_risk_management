import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import React, {useEffect} from "react";
import Loader from "../../components/Loader/Loader";
import {teamMemberListErrorSelector, teamMemberListLoadingSelector, teamMemberListSelector} from "./redux/selectors";
import {teamMemberListActions} from "./redux/actions";
import TeamMemberListTable from "../../components/TeamMemberManager/TeamMemberListTable";

function TeamMemberListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const teamMemberList = useSelector(teamMemberListSelector);
    const loading = useSelector(teamMemberListLoadingSelector);
    const error = useSelector(teamMemberListErrorSelector);

    useEffect(() => {
        dispatch(teamMemberListActions.getTeamMemberList());
    }, [dispatch]);

    const editAction = (id) => history.push("/editTM/"+id);
    const deleteAction = (id) =>history.push("/deleteTM/"+id);

    return (
        <Loader loading={loading} error={error}>
            <TeamMemberListTable
                teamMemberList={teamMemberList}
                editAction={editAction}
                deleteAction={deleteAction}
            />
        </Loader>
    );
}

export default TeamMemberListContainer;
