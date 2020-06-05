import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function RiskMatrixForm({ submitHandler }) {
    const formInitialState = {
        probability_interval_division : 4,
        capacity: 4,

    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "probability_interval_division":
                newFormState.probability_interval_division = newValue;
                break;
            case "capacity":
                newFormState.capacity = newValue;
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
                    <Form.Label>Entrer le nombre des divisions :</Form.Label>
                    <Form.Control
                        type="number"
                        onBlur = {(e)=>handleUpdate("probability_interval_division",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Entrer la capacité:</Form.Label>
                    <Form.Control
                        type="number"
                        onBlur = {(e)=>handleUpdate("capacity",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Etablir matrice du risque</Button>
        </Form>
    );
}
export default RiskMatrixForm;
