import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function PortfolioMangerTable({ portfolioList, editAction, deleteAction }) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Investissement inititial</th>
                <th>Taux d'inflation</th>
                <th>Moyenne</th>
                <th>Déviation Standard</th>
                <th>Taux d'inflation</th>
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
