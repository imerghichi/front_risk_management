import {Button, Card, Col, Row} from "react-bootstrap";
import React from "react";
import OwnerLevelContainer from "../OwnerLevelContainer/OwnerLevelContainer";
import OwnerLevelPie from "../../components/ServiceOutput/OwnerLevelPie";
import InternalExternalPie from "../../components/ServiceOutput/InternalExternalPie";
import TaxonomieChart from "../../components/ServiceOutput/TaxonomyChart";
import {useHistory} from "react-router";

function DashboardContainer() {

    const history = useHistory();

    const blackRex = () => history.push("/rexBlack");
    const seiList = () =>history.push("/sei");
    const johnCList = () =>history.push("/caperJones");
    return (
        <div>
            <Row md={2}>
                <Card>
                <Card.Header>
                    Distribution Propriétaire
                </Card.Header>
                <Card.Body>
                <OwnerLevelPie/>
                </Card.Body>
            </Card>
                <Card>
                    <Card.Header>
                        Taxonomie
                    </Card.Header>
                    <Card.Body>
                        <TaxonomieChart/>
                    </Card.Body>
                </Card>
            </Row>
            <Row md={3}>
                <Card>
                    <Card.Header>
                        Distribution des origines
                    </Card.Header>
                    <Card.Body>
                        <InternalExternalPie/>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>
                        Les Top 10 risques
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>

                <Card>

                    <Card.Header>
                        liste des risques
                    </Card.Header>

                        <Button variant="dark" size="lg" block onClick={blackRex}> Black Rex</Button>


                            <Button variant="dark"  size="lg"block onClick={seiList}> SEI</Button>


                            <Button variant="dark" size="lg" block onClick={johnCList}> John Coper</Button>

                </Card>

            </Row>
        </div>
    )
}
export default DashboardContainer;
