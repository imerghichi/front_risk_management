import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function ResponseForm({ submitHandler }) {
    const formInitialState = {
        type : "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "type":
                newFormState.type = newValue;
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
                        value={formState.type}
                        onChange={(e) =>handleUpdate("type", e.target.value)}
                    >
                        <option value="ContingencyPlan">Plan d'urgence</option>
                        <option value="MitigationPlan">Plan d'atténuation</option>
                        <option value="StrategicPlan">Plan stratégique</option>
                        <option value="NonPlanResponse">Autres/sans plan</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
export default ResponseForm;
