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

function ProjectManagerTable({ projectList, editAction, deleteAction, showTasks, addTeamMember, addTasks, addPortfolio, simulate}) {
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
    ]

    const [modalTeamMember, setModalTeamMember] = useState(false);
    const handleCloseTM = () => setModalTeamMember(false);
    const handleShowTM = () =>setModalTeamMember(true);

    const [modalPortfolio, setmodalPortFolio] = useState(false);
    const handleClosePF = () => setmodalPortFolio(false);
    const handleShowPF = () =>setmodalPortFolio(true);
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Titre</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {mock.map((element) =>{
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
                                    <Button variant="primary" onClick={()=> addTeamMember(element.id_project)}>
                                        Ajouter un membre
                                    </Button>
                                    <Button color="primary" onClick={handleCloseTM}>Fermer</Button>
                                </Modal.Footer>
                            </Modal>
                        </td>

                        <td>
                            <DropdownButton id="dropdown-basic-button" title="Tache">
                                <DropdownItem as = "button" onClick ={()=>  showTasks(element.id_project)}>
                                    Voir
                                </DropdownItem>
                                <DropdownItem as = "button" onClick ={()=>  addTasks(element.id_project)}>
                                    Ajouter
                                </DropdownItem>
                            </DropdownButton>
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
                                        <Button color = "primary" onClick = {() => simulate(element.id_project)}>Simuler</Button>
                                        <Button color="primary" onClick={handleClosePF}>Fermer</Button>
                                    </Modal.Footer>
                                </Modal>
                                <DropdownItem as = "button" onClick ={()=>  addPortfolio(element.id_project)}>
                                    Ajouter
                                </DropdownItem>
                            </DropdownButton>
                        </td>
                    </tr>

                );
            })}

            </tbody>
        </Table>
    );
}

export default ProjectManagerTable;
