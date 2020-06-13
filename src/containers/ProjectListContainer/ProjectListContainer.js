import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory, useLocation} from "react-router";
import { projectListSelector, projectListLoadingSelector, projectListErrorSelector } from './redux/selectors';
import { projectListActions } from './redux/actions';
import ProjectManagerTable from "../../components/ProjectManager/ProjectManagerTable";

function ProjectListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const {} = useLocation();

    const projectList = useSelector(projectListSelector);
    const loading = useSelector(projectListLoadingSelector);
    const error = useSelector(projectListErrorSelector);

    useEffect(() => {
        dispatch(projectListActions.getProjectList());
    }, [dispatch]);

    const editAction = (id) => history.push("/editproject/"+id);
    const deleteAction = (id) =>history.push("/'deleteproject/"+id);
    const showTasks =(id) =>history.push("/showTasks/");
    const addTeamMember = (id) =>history.push("/addTM/"+id);
    const addTasks =(id) =>history.push("/addTask/"+id);
    const addPortfolio = (id) =>history.push("/addPortfolio/"+id);
    const simulatePortfolio = (id) => history.push("/simulate/"+id)

    return (
        <Loader loading={loading} >
            <ProjectManagerTable
                projectList={projectList}
                editAction={editAction}
                deleteAction = {deleteAction}
                showTasks = {showTasks}
                addTeamMember={addTeamMember}
                addTasks = {addTasks}
                addPortfolio = {addPortfolio}
                simulate = {simulatePortfolio}
            />
        </Loader>
    );
}

export default ProjectListContainer;
