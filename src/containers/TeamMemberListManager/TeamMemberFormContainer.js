import React from 'react';
import {useDispatch} from "react-redux";
import {teamMemberListActions} from "./redux/actions";
import TeamMemberForm from "../../components/TeamMemberManager/TeamMemberForm";

function TeamMemberFormContainer() {
    const dispatch = useDispatch();

    const submitHandler = (vals) => {
        dispatch(teamMemberListActions.postTeamMember(vals));
    };

    return (
        <TeamMemberForm
            submitHandler={submitHandler}
        />
    );
}

export default TeamMemberFormContainer;
