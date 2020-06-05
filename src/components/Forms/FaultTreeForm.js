import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function FaultTreeForm({ submitHandler }) {
    const formInitialState = {
        event_name : "",
        type : "",
        probability: "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "event_name":
                newFormState.event_name = newValue;
                break;
            case "type":
                newFormState.type = newValue;
                break;
            case "probability":
                newFormState.probability = newValue;
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
                        onBlur = {(e)=>handleUpdate("event_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Type: </Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.type}
                        onChange={(e) =>handleUpdate("type", e.target.value)}
                    >
                        <option value= NULL>-----</option>
                        <option value="base_event">Evenement de base</option>
                        <option value="home_event">Evenement home</option>
                        <option value="non_developped_event">Evenement non développé</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Probabilité:</Form.Label>
                    <Form.Control
                        type="Range"
                        onBlur = {(e)=>handleUpdate("probability",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}
export default FaultTreeForm;
