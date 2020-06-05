import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function MilestoneForm({ submitHandler }) {
    const formInitialState = {
        task : "",
        planned_start_date : "",
        actual_start_date : "",
        planned_completion_date : "",
        actual_completion_date : "",
        due_date: "",

    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "task":
                newFormState.task = newValue;
                break;
            case "planned_start_date":
                newFormState.planned_start_date = newValue;
                break;
            case "actual_start_date":
                newFormState.actual_start_date = newValue;
                break;
            case "planned_completion_date":
                newFormState.planned_completion_date = newValue;
                break;
            case "actual_completion_date":
                newFormState.actual_completion_date = newValue;
                break;
            case "due_date":
                newFormState.due_date = newValue;
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
                    <Form.Label>Titre de la tâche:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("task",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date du début plannifiée:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        onBlur = {(e)=>handleUpdate("planned_start_date",e.target.value)}
                    />
                </Form.Group>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date du début réelle:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        onBlur = {(e)=>handleUpdate("actual_start_date",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date de la fin plannifiée:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        onBlur = {(e)=>handleUpdate("planned_completion_date",e.target.value)}
                    />
                </Form.Group>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date de la fin réelle:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        onBlur = {(e)=>handleUpdate("actual_completion_date",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date dd'échéance:</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        onBlur = {(e)=>handleUpdate("due_date",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Ajouter</Button>
        </Form>
    );
}
export default MilestoneForm;
