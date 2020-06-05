import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function OperatorForm({ submitHandler }) {
    const formInitialState = {
        operator : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "operator":
                newFormState.operator = newValue;
            default:
                break;
        }
        updateFormState(newFormState);
    };

    return (
        <Form noValidate validated={true}>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Operateur: </Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.operator}
                        onChange={(e) =>handleUpdate("operator", e.target.value)}
                    >
                        <option value="OR">OU</option>
                        <option value="AND">ET</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Valider</Button>
        </Form>
    );
}
export default OperatorForm;
