import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function TriggerForm({ submitHandler }) {
    const formInitialState = {
        level : 0,
        condition : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "level":
                newFormState.level = newValue;
                break;
            case "condition":
                newFormState.condition = newValue;
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
                    <Form.Label>Niveau:</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        onBlur = {(e)=>handleUpdate("level",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Condition:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("condition",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Ajouter</Button>
        </Form>
    );
}
export default TriggerForm;
