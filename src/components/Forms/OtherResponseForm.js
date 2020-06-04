import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function OtherResponseForm({ submitHandler }) {
    const formInitialState = {
        nonPlanResponseEnum : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "nonPlanResponseEnum":
                newFormState.nonPlanResponseEnum = newValue;
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
                    <Form.Label>Operateur: </Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.nonPlanResponseEnum}
                        onChange={(e) =>handleUpdate("nonPlanResponseEnum", e.target.value)}
                    >
                        <option value="avoid">Eviter</option>
                        <option value="transfer">Transferer</option>
                        <option value="acceptance">Accepter</option>
                        <option value="monitoring">Surveiller</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
export default OperatorForm;
