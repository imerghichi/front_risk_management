import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function strategicPlanForm({ submitHandler }) {
    const formInitialState = {
        mitigation_name : "",
        active : false,
        complete: false,
        milstones:{},
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "mitigation_name":
                newFormState.mitigation_name = newValue;
                break;
            case "active":
                newFormState.active = newValue;
                break;
            case "complete":
                newFormState.complete = newValue;
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
                    <Form.Label>Titre du plan:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("mitigation_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Actif:</Form.Label>
                    <Form.Control
                        type="radio"
                        onBlur = {(e)=>handleUpdate("active",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Complet:</Form.Label>
                    <Form.Control
                        type="radio"
                        onBlur = {(e)=>handleUpdate("complete",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}
export default MitigationPlanForm;
