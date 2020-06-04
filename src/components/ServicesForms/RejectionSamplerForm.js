import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function RejectionSamplerForm({ submitHandler }) {
    const formInitialState = {
        threshold : 0.0,
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "threshold":
                newFormState.threshold = newValue;
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
                    <Form.Label>Probabilité:</Form.Label>
                    <Form.Control
                        type="number"
                        step="0.01"
                        onBlur = {(e)=>handleUpdate("threshold",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
export default FaultTreeForm;
