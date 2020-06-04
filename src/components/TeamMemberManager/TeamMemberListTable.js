import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import React from "react";

function TeamMemberListTable(teamMemberList, editAction, deleteAction) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Prénom</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>@id</td>
                <td>nom</td>
                <td>h</td>
                <td>
                    <Button variant="warning" onClick={editAction}>
                        <i className="fa fa-edit" />
                    </Button>
                    {' '}
                    <Button variant="danger">
                        <i className="fa fa-remove" onClick={deleteAction}/>
                    </Button>
                    {' '}
                </td>
            </tr>
            </tbody>
        </Table>
    );
}

export default TeamMemberListTable;
