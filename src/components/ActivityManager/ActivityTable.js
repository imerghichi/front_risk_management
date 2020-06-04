import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function ActivityTable({ activityList, editAction,deleteAction, applyRejectionMethod, addRisk, showRisk }) {
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
            <tr>
                <td>@id</td>
                <td>nom</td>
                <td>desciption</td>
                <td>normal</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>
                    <Button variant="warning" onClick={editAction}>
                        <i className="fa fa-edit" />
                    </Button>
                    {' '}
                    <Button variant="danger" onClick={deleteAction}>
                        <i className="fa fa-remove"/>
                        Supprimer
                    </Button>
                    {' '}
                    <Button variant="primary" onClick={showRisk}>
                        Risques
                    </Button>
                    {' '}
                    <Button variant="primary" onClick={addRisk}>
                        Ajouter Risque
                    </Button>
                    {' '}
                    <Button variant="secondary" onClick={applyRejectionMethod}>
                        Rejection
                    </Button>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default ActivityTable;
