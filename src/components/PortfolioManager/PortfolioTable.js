import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function PortfolioMangerTable({ portfolioList, editAction, deleteAction }) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>Probabilité</th>
                <th>Vuhura</th>
                <th>S impact</th>
                <th>Origin</th>
                <th>Type</th>
                <th>Carte ?</th>
                <th>Owner level ?</th>
                <th>Visibilité</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                    <Button variant="warning" onClick={editAction}>
                        <i className="fa fa-edit" />
                    </Button>
                    {' '}
                    <Button variant="danger">
                        <i className="fa fa-remove" onClick={deleteAction}/>
                    </Button>
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default PortfolioMangerTable;
