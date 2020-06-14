import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function TeamMemberForm({ submitHandler }) {
    const formInitialState = {
        first_name : "",
        last_name : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "first_name":
                newFormState.first_name = newValue;
                break;
            case "last_name":
                newFormState.last_name = newValue;
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
                    <Form.Label>Prénom: </Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("first_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Nom:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("last_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}

export default TeamMemberForm;
