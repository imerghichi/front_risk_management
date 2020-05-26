import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import ProjectListTable from "../../components/Project/ProjectListTable";
import {useHistory} from "react-router";
import { projectListSelector, projectListLoadingSelector, projectListErrorSelector } from './redux/selectors';
import { projectListActions } from './redux/actions';

function ProjectListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const projectList = useSelector(projectListSelector);
    const loading = useSelector(projectListLoadingSelector);
    const error = useSelector(projectListErrorSelector);

    useEffect(() => {
        dispatch(projectListActions.getProjectList());
    }, [dispatch]);

    const editAction = (id) => history.push("/edit");
    const deleteAction = (id) =>history.push("/'delete");

    return (
        <Loader loading={loading} error={error}>
            <ProjectListTable
                projectList={projectList}
                editAction={editAction}
                deleteAction = {deleteAction}
            />
        </Loader>
    );
}

export default ProjectListContainer;
