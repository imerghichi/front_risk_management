import React,{useState} from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FaultTreeAnalysisForm({ submitHandler }) {
    const formInitialState = {
        usedMethod : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "usedMethod":
                newFormState.usedMethod = newValue;
            default:
                break;
        }
        updateFormState(newFormState);
    };

    return (
        <Form noValidate validated={true}>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Méthode Utilisée: </Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.usedMethod}
                        onChange={(e) =>handleUpdate("usedMethod", e.target.value)}
                    >
                        <option value="Zadeh">Zadeh</option>
                        <option value="Prod_probor">PROD/PROBOR</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Choisir</Button>
        </Form>
    );
}
export default FaultTreeAnalysisForm;
