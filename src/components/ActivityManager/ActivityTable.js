import {Button, DropdownItem, Modal} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, {useState} from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import {useSelector} from "react-redux";
import ActivityFormContainer from "../../containers/ActivityList Container/ActivityFormContainer";
import RiskFormContainer from "../../containers/RiskListContainer/RiskFormContainer";

function ActivityTable({ activityList, editAction,deleteAction, applyRejectionMethod, addRisk, showRisk }) {
    const mock = [{
            "id_task_project": 1,
        "risk_id": 1,
        "risk_name": "riskk",

        }
        ];
    const [riskformmodal, setriskmodal]= useState(false);
    const handleShowrisk = () =>setriskmodal(true);
    const handleCloserisk = ()=> setriskmodal(false);

    return (
        <Table >
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom de l'activité</th>
                <th>Description</th>
                <th>Distribution</th>
                <th>Parametre 1</th>
                <th>Parametre 2</th>
                <th>Parametre 2</th>
                <th>Services</th>
            </tr>
            </thead>
            <tbody>
            {mock.map((element) => {
                return (
                    <tr>
                        <td>{element.id_task_project}</td>
                        <td>{element.task_name}</td>
                        <td>{element.description}</td>
                        <td>{element.distribution}</td>
                        <td>{element.parametre1}</td>
                        <td>{element.parametre2}</td>
                        <td>{element.parametre3}</td>
                        <td>
                            <Button variant="warning" onClick={() => editAction(element.id_task_project)}>
                                <i className="fa fa-edit" />
                            </Button>
                            {' '}
                        </td>
                            <td>
                            <Button variant="danger" onClick={() => deleteAction(element.id_task_project)}>
                                <i className="fa fa-remove"/>
                            </Button>
                            </td>
                        <td>
                            <DropdownButton id="dropdown-basic-button" title="Risques">
                                <DropdownItem as = "button" onClick ={()=>  showRisk(element.id_task_project)}>
                                    Voir
                                </DropdownItem>
                                <DropdownItem as = "button" onClick={handleShowrisk}>
                                    Ajouter
                                </DropdownItem>
                                <DropdownItem as = "button" onClick ={handleShowrisk}>
                                <Modal show = {riskformmodal} onHide ={handleCloserisk}>
                                        <Modal.Title>Ajouter Risque</Modal.Title>
                                        <Modal.Body>
                                            <RiskFormContainer/>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button color="primary" onClick={handleCloserisk}>Annuler</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </DropdownItem>
                            </DropdownButton>
                        </td>
                        <td>
                            <Button variant="secondary" onClick={() => applyRejectionMethod(element.id_task_project)}>
                                Rejection
                            </Button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </Table>
    );
}

export default ActivityTable;
