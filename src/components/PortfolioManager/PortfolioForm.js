/* eslint-disable react/react-in-jsx-scope */
import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function PortfolioForm({ submitHandler }) {
    const formInitialState = {
        description : "",
        initialInvestment: "",
        mean: 0,
        standardDeviation: 0,
        inflationRate: 0,
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "description":
                newFormState.description = newValue;
                break;
            case "initialInvestment":
                newFormState.initialInvestment = newValue;
                break;
            case "mean":
                newFormState.mean = newValue;
                break;
            case "standardDeviation":
                newFormState.standardDeviation = newValue;
                break;
            case "inflationRate":
                newFormState.inflationRate = newValue;
                break;
            default:
                break;
        }
        updateFormState(newFormState);
    };

    return (
        <Form noValidate validated={true}>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer une description"
                        onBlur = {(e)=>handleUpdate("description",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Investissement Initiale</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Entrer l'investissement initial"
                        onBlur = {(e)=>handleUpdate("initialInvestment",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Moyenne:</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Entrer la moyenne"
                        onBlur = {(e)=>handleUpdate("mean",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Deviation Standard:</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Standard Deviation"
                        onBlur = {(e)=>handleUpdate("standardDeviation",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Taux d'inflation</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Entrer le taux d'inflation"
                        onBlur = {(e)=>handleUpdate("inflationRate",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}

export default PortfolioForm;
