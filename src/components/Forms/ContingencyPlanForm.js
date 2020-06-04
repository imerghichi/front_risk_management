import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function ContingencyPlanForm({ submitHandler }) {
    const formInitialState = {
        contingency_name : "",
        triggers:{},
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "contingency_name":
                newFormState.contingency_name = newValue;
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
                    <Form.Label>Titre du plan:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        onBlur = {(e)=>handleUpdate("contingency_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
}
export default ContingencyPlanForm;
