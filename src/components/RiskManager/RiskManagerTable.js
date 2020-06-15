import {Accordion, Button, Card, DropdownItem, ListGroup, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, {useState} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import ResponseForm from "../Forms/ResponseForm";

function RiskManagerTable({ riskList, editAction, deleteAction,addResponse, showResponse }) {
    const mock = [{
        "id_risk": 1,
    },{
        "id_risk": 2,
    }
    ];

    const [responsemodal, setresponsemodal] = useState(false);
    const handleshowresponse = () => setresponsemodal(true);
    const handlecloseresponse = () => setresponsemodal(false);

    const [responseForm,setResponseForm] = useState(false);
    const handleShowForm = () => setResponseForm(true);
    const handleCloseForm = () => setResponseForm(false);

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Conséquences</th>
                <th>Date de risque</th>
                <th>Categorisation</th>
                <th>Actif?</th>
                <th>Détecté?</th>
            </tr>
            </thead>
            <tbody>
            {mock.map((element) =>(
                <tr>
                    <td>{element.id_risk}</td>
                    <td>{element.risk_name}</td>
                    <td>{element.description}</td>
                    <td>
                    <Accordion >
                        <Accordion.Toggle as={Button} eventKey="1" variant ="link">
                            Voir
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" >
                            <ListGroup >
                                <ListGroup.Item>
                                    probabilité : {element.probability}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    difficulté de detection : {element.detection_difficulty}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Vulnérabilité: {element.vulnerability}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Impact: {element.impact}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description des conséquences: {element.consquence_description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                            </Accordion>
                    </td>
                    <td>{element.date_risk}</td>
                    <td>
                    <Accordion >
                        <Accordion.Toggle as={Button} eventKey="2" variant ="link">
                            Voir
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" >
                            <ListGroup >
                                <ListGroup.Item>
                                    Origine : {element.origin_risk}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                     Nature : {element.nature_risk}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Type: {element.type_risk}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Catégorie: {element.category}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    visibilité: {element.visibility}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Niveau Propriétaite: {element.ownerLevel}
                                </ListGroup.Item>
                            </ListGroup>
                        </Accordion.Collapse>
                    </Accordion>
                    </td>
                    <td>{element.active}</td>
                    <td>{element.detected}</td>
                    <td>
                        <Button variant="warning" onClick={() => editAction(element.id_risk)}>
                            <i className="fa fa-edit" />
                        </Button>
                        {' '}
                    </td>
                    <td>
                        <Button variant="danger">
                            <i className="fa fa-remove" onClick={() =>deleteAction(element.id_risk)}/>
                            {' '}
                        </Button>
                    </td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="Reponse">
                            <DropdownItem as = "button" onClick ={handleshowresponse}>
                                Voir
                            </DropdownItem>
                            <DropdownItem as = "button" onClick ={handleshowresponse}>
                            <Modal show = {responsemodal}  onHide={handlecloseresponse}>
                                <Modal.Title>Reponse </Modal.Title>
                                <Modal.Body>
                                    salaam
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={handlecloseresponse}>Fermer</Button>
                                </Modal.Footer>
                            </Modal>
                            </DropdownItem>
                            <DropdownItem as = "button" onClick ={handleShowForm}>
                                Ajouter
                            </DropdownItem>
                                <DropdownItem as="button" onClick={handleShowForm}>
                                    <Modal show={responseForm}  onHide ={handleCloseForm}>
                                        <Modal.Title>ajouter </Modal.Title>
                                        <Modal.Body>
                                        <ResponseForm/>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button onClick={handleCloseForm}>Fermer</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </DropdownItem>
                        </DropdownButton>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default RiskManagerTable;
