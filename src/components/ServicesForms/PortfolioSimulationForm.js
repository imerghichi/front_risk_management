import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function PortfolioSimulationForm({ submitHandler }) {
    const formInitialState = {
        number_of_simulations : 3,
        number_of_years:1,

    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "number_of_simulations":
                newFormState.number_of_simulations = newValue;
                break;
            case "number_of_years":
                newFormState.number_of_years = newValue;
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
                    <Form.Label>Entrer le nombre de simulations:</Form.Label>
                    <Form.Control
                        type="number"
                        onBlur = {(e)=>handleUpdate("number_of_simulations",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Entrer le nombre des années:</Form.Label>
                    <Form.Control
                        type="number"
                        onBlur = {(e)=>handleUpdate("number_of_years",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Simuler</Button>
        </Form>
    );
}
export default PortfolioSimulationForm;
