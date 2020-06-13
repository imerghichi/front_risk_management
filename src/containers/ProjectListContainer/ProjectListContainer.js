import React, {useEffect} from 'react';
import '../../assets/css/App.css';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {useHistory} from "react-router";
import { projectListSelector, projectListLoadingSelector, projectListErrorSelector } from './redux/selectors';
import { projectListActions } from './redux/actions';
import ProjectManagerTable from "../../components/ProjectManager/ProjectManagerTable";

const mock =[
    {
        "id_project": 1,
        "teamMember":[
            {
                id:1
            }
        ]
    },
    {
        "id_project": 2,

    }
];
function ProjectListContainer() {
    const dispatch = useDispatch();
    const history = useHistory();

    const projectList = mock;
    // const projectList = useSelector(projectListSelector);
    const loading = useSelector(projectListLoadingSelector);
    const error = useSelector(projectListErrorSelector);

    useEffect(() => {
        dispatch(projectListActions.getProjectList());
    }, [dispatch]);

    const deleteAction = (id) => {
        const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?");
        if (confirmed) {
            dispatch(projectListActions.deleteProject(id));
        }
    };

    const editAction = (id) => history.push("/editproject/"+id);
    const showTasks =(id) =>history.push("/showTasks/"+id);
    const addTeamMember = (id) =>history.push("/addTM/"+id);
    const addTasks =(id) =>history.push("/addTask/"+id);
    const addPortfolio = (id) =>history.push("/addPortfolio/"+id);
    const simulatePortfolio = (id) => history.push("/simulate/"+id);

    return (
        <Loader loading={loading} noData={projectList && projectList.length === 0}>
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
