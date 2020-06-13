import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ProjectManagerForm({ submitHandler }) {
    const formInitialState = {
        project_name : "",
        project_description : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "project_name":
                newFormState.task_name = newValue;
                break;
            case "project_description":
                newFormState.description = newValue;
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
                    <Form.Label>Nom du projet:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Entrer un nom au projet"
                        onBlur = {(e)=>handleUpdate("project_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer une description"
                        onBlur = {(e)=>handleUpdate("project_description",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}

export default ProjectManagerForm;
