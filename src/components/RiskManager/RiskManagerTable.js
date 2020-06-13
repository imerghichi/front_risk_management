import {Button, DropdownItem} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";

function RiskManagerTable({ riskList, editAction, deleteAction,addResponse, showResponse }) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Description</th>
                <th>probabilité</th>
                <th>Difficulté de détection</th>
                <th>Vulérabilité</th>
                <th>Impact</th>
                <th>Description des conséquences</th>
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
            {riskList.map((element) =>(
                <tr>
                    <td>{riskList.id_risk}</td>
                    <td>{riskList.risk_name}</td>
                    <td>{riskList.description}</td>
                    <td>{riskList.probability}</td>
                    <td>{riskList.detection_difficulty}</td>
                    <td>{riskList.vulnerability}</td>
                    <td>{riskList.impact}</td>
                    <td>{riskList.consquence_description}</td>
                    <td>{riskList.date_risk}</td>
                    <td>{riskList.origin_risk}</td>
                    <td>{riskList.nature_risk}</td>
                    <td>{riskList.type_risk}</td>
                    <td>{riskList.category}</td>
                    <td>{riskList.visibility}</td>
                    <td>{riskList.ownerLevel}</td>
                    <td>{riskList.active}</td>
                    <td>{riskList.detected}</td>
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
