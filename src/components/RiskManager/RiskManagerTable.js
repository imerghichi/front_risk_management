import {Accordion, Button, Card, DropdownItem, ListGroup} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";

function RiskManagerTable({ riskList, editAction, deleteAction,addResponse, showResponse }) {
    const mock = [{
        "id_risk": 1,
    },{
        "id_risk": 2,
    }
    ];
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Conséquences</th>
                <th>Date de risque</th>
                <th>Origine</th>
                <th>Nature</th>
                <th>Type</th>
                <th>Catégorie</th>
                <th>Visibilité</th>
                <th>Niveau du proprietaire</th>
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
                    <td>{element.origin_risk}</td>
                    <td>{element.nature_risk}</td>
                    <td>{element.type_risk}</td>
                    <td>{element.category}</td>
                    <td>{element.visibility}</td>
                    <td>{element.ownerLevel}</td>
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
                            <DropdownItem as = "button" onClick ={()=>  showResponse(element.id_risk)}>
                                Voir
                            </DropdownItem>
                            <DropdownItem as = "button" onClick ={()=>  addResponse(element.id_risk)}>
                                Ajouter
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
