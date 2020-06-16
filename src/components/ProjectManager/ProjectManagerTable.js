import {
    Accordion,
    Button,
    Card,
    DropdownItem,
    ListGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalTitle
} from "react-bootstrap";

import Table from "react-bootstrap/Table";
import React, {useState} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import PortfolioFormContainer from "../../containers/PortfolioListContainer/PortfolioFormContainer";
import PortfolioSimulationForm from "../ServicesForms/PortfolioSimulationForm";
import TeamMemberForm from "../TeamMemberManager/TeamMemberForm";
import TeamMemberFormContainer from "../../containers/TeamMemberListManager/TeamMemberFormContainer";
import ActivityFormContainer from "../../containers/ActivityList Container/ActivityFormContainer";

function ProjectManagerTable({ projectList, editAction, deleteAction, showTasks, addTeamMember, addTasks, addPortfolio, simulate}) {
    const list = projectList;
    const [modalTeamMember, setModalTeamMember] = useState(false);
    const handleCloseTM = () => setModalTeamMember(false);
    const handleShowTM = () =>setModalTeamMember(true);

    const [modalPortfolio, setmodalPortFolio] = useState(false);
    const handleClosePF = () => setmodalPortFolio(false);
    const handleShowPF = () =>setmodalPortFolio(true);

    const [modalPortfolio2, setmodalPortFolio2] = useState(false);
    const handleClosePF2 = () => setmodalPortFolio2(false);
    const handleShowPF2 = () =>setmodalPortFolio2(true);

    const [projectFormModal, setProjectFormModal]= useState(false);
    const handleShowForm = () =>setProjectFormModal(true);
    const handleCloseForm = () => setProjectFormModal(false);


    const [pfsModal, setpfsModal]= useState(false);
    const handleShowpfs = () =>setpfsModal(true);
    const handleClosepfs = () => setpfsModal(false);

    const [modalAddTM, setmodalAddTM] =useState(false);
    const handleCloseAddTM = ()=> setmodalAddTM(false);
    const handleShowAddTM = () =>setmodalAddTM(true);

    const [modalAddTask,setmodalAddTask] =useState(false);
    const handleCloseAddTask = () =>setmodalAddTask (false);
    const handleShowAddTask =() => setmodalAddTask(true);

    return (
        <div>
            <div>
                <Button variant="primary" onClick={handleShowForm}>Entrer Projet</Button>
            </div>

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {list.map((element) =>{
                return (
                    <tr>
                        <td>{element.id_project}</td>
                        <td>{element.project_name}</td>
                        <td>{element.description}</td>
                        <td>
                            <Button variant="warning" onClick={() => editAction(element.id_project)}>
                                <i className="fa fa-edit" />
                            </Button>
                            {' '}
                        </td>
                        <td>
                            <Button variant="danger">
                                <i className="fa fa-remove" onClick={()=> deleteAction(element.id_project)}/>
                            </Button>
                        </td>
                        <td>
                            <Button variant="primary" onClick={handleShowTM}>Membres</Button>
                            <Modal show = {modalTeamMember} onHide ={handleCloseTM}>
                                <Modal.Title>Membres</Modal.Title>
                                <Modal.Body>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {element.teamMember && element.teamMember.map((membres)=>{
                                            return(
                                                <tr>
                                                    <td>{membres.id_team_member}</td>
                                                    <td>{membres.last_name}</td>
                                                    <td>{membres.first_name}</td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="primary" onClick={handleShowAddTM}>
                                        Ajouter un membre
                                    </Button>
                                    <Modal show = {modalAddTM} onHide ={handleCloseAddTM}>
                                        <Modal.Title>Ajouter Membre</Modal.Title>
                                        <Modal.Body>
                                            <TeamMemberFormContainer/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                    <Button color="primary" onClick={handleCloseTM}>Fermer</Button>
                                </Modal.Footer>
                            </Modal>
                                </Modal.Footer>
                            </Modal>

                        </td>

                        <td>
                            <DropdownButton id="dropdown-basic-button" title="Tache">
                                <DropdownItem as = "button" onClick={()=> showTasks(element.id_project)}>
                                    Voir
                                </DropdownItem>
                                <DropdownItem as = "button" onClick ={handleShowAddTask}>
                                    Ajouter
                                </DropdownItem>
                            </DropdownButton>
                            <Modal show = {modalAddTask} onHide ={handleCloseAddTask}>
                                <div style={{padding: "30px"}}>
                                    <Modal.Title>Ajouter Tache</Modal.Title>
                                    <Modal.Body>
                                        <ActivityFormContainer idProject={element.id_project} />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button color="primary" onClick={handleCloseAddTask}>Annuler</Button>
                                    </Modal.Footer>
                                </div>
                            </Modal>
                        </td>
                        <td>
                            <DropdownButton id="dropdown-basic-button" title="Portfolio">
                                <DropdownItem as = "button" onClick ={handleShowPF} >
                                    Voir
                                </DropdownItem>
                                <Modal show = {modalPortfolio} onHide ={handleClosePF}>
                                    <Modal.Title>Portfolio</Modal.Title>
                                    <Modal.Body>
                                        <ListGroup >
                                            <ListGroup.Item>
                                                id : {element.portfolio && element.portfolio.id_portfolio}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                description : {element.portfolio && element.portfolio.description}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                moyenne: {element.portfolio && element.portfolio.mean}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Deviation Standard: {element.portfolio && element.portfolio.standardDeviation}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Investissement Initial: {element.portfolio && element.portfolio.initialInvestment}
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                Taux d'inflation: {element.portfolio && element.portfolio.inflationRate}
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button color = "primary" onClick = {handleShowpfs}>Simuler</Button>
                                        <Modal show = {pfsModal} onHide ={handleClosepfs}>
                                            <Modal.Title>Paramètres de simulation</Modal.Title>
                                            <Modal.Body>
                                                <PortfolioSimulationForm/>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button color="primary" onClick={handleClosepfs}>Annuler</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Button color="primary" onClick={handleClosePF}>Fermer</Button>
                                    </Modal.Footer>
                                </Modal>
                                <DropdownItem as = "button" onClick ={handleShowPF2}>
                                    Ajouter
                                </DropdownItem>
                                <Modal show = {modalPortfolio2} onHide ={handleClosePF2}>
                                    <Modal.Title>Ajouter Portfolio</Modal.Title>
                                    <Modal.Body>
                                       <PortfolioFormContainer/>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button color="primary" onClick={handleClosePF2}>Annuler</Button>
                                    </Modal.Footer>
                                </Modal>
                            </DropdownButton>
                        </td>
                    </tr>

                );
            })}

            </tbody>
        </Table>
        </div>
    );
}

export default ProjectManagerTable;
