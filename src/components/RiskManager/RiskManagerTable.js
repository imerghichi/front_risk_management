import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function RiskManagerTable({ riskMatrix, editAction, deleteAction,addResponse, showResponse }) {
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
                <th>niveau du partenaire</th>
                <th>Actif?</th>
                <th>Détecté?</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>@id</td>
                <td>nom</td>
                <td>desciption</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>h</td>
                <td>
                    <Button variant="warning" onClick={editAction}>
                        <i className="fa fa-edit" />
                    </Button>
                    {' '}
                    <Button variant="danger">
                        <i className="fa fa-remove" onClick={deleteAction}/>
                        {' '}
                        <Button variant="primary" onClick={showResponse}>
                            Réponses
                        </Button>
                        {' '}
                        <Button variant="primary" onClick={addResponse}>
                            Ajouter Réponse
                        </Button>
                    </Button>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default RiskManagerTable;
