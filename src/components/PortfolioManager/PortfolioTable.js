import {Button} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React from "react";

function PortfolioMangerTable({ portfolioList, editAction, deleteAction, simulate }) {
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
                <th>Titre du projet</th>
            </tr>
            </thead>
            <tbody>
            {portfolioList.map((element) =>{
                return(
                    <tr>
                        <td>{element.id_portfolio}</td>
                        <td>{element.description}</td>
                        <td>{element.initialInvestment}</td>
                        <td>{element.inflationRate}</td>
                        <td>{element.mean}</td>
                        <td>{element.standardDeviation}</td>
                        <td>{element.project.project_name}</td>
                        <td>
                            <Button variant="warning" onClick={() =>editAction(element.id_portfolio) }>
                                <i className="fa fa-edit" />
                            </Button>
                            {' '}
                        </td>
                        <td>
                            <Button variant="danger">
                                <i className="fa fa-remove" onClick={()=> deleteAction(element.id_portfolio)}/>
                            </Button>
                        </td>
                        <td>
                        <Button variant="primary" onClick={()=> simulate(element.id_portfolio)}>
                            Simuler
                        </Button>
                        </td>

                    </tr>

                )
            })}

            </tbody>
        </Table>
    );
}

export default PortfolioMangerTable;
