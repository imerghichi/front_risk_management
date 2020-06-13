import Table from "react-bootstrap/Table";
import {Button} from "react-bootstrap";
import React from "react";

function TeamMemberListTable(teamMemberList, editAction, deleteAction) {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Id</th>
                <th>Prénom</th>
                <th>Nom</th>
            </tr>
            </thead>
            <tbody>
            {teamMemberList.map((element) =>{
                return(
                    <tr>
                        <td>{element.id_team_member}</td>
                        <td>{element.first_name}</td>
                        <td>{element.last_name}</td>
                        <td>
                            <Button variant="warning" onClick={editAction}>
                                <i className="fa fa-edit" />
                            </Button>
                            {' '}
                        </td>
                        <td>
                            <Button variant="danger">
                                <i className="fa fa-remove" onClick={deleteAction}/>
                            </Button>
                            {' '}
                        </td>
                    </tr>
                )
            })}

            </tbody>
        </Table>
    );
}

export default TeamMemberListTable;
