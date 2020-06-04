import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function CausalTreeForm({ submitHandler }) {
    const formInitialState = {
        name_event : "",
        description_event : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "name_event":
                newFormState.name_event = newValue;
                break;
            case "description_event":
                newFormState.description_event = newValue;
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
                    <Form.Label>Titre de l'évenement:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Entrer un titre à l'évenement"
                        onBlur = {(e)=>handleUpdate("name_event",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Description de l'évenement:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("description_event",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>


        </Form>
    );
}
export default CausalTreeForm;
