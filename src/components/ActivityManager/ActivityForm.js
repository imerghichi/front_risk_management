/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ActivityForm({ formInitialState,submitHandler }) {


    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "task_name":
                newFormState.task_name = newValue;
                break;
            case "description":
                newFormState.description = newValue;
                break;
            case "distribution":
                newFormState.distribution = newValue;
                break;
            case "parametre1":
                newFormState.parametre1 = newValue;
                break;
            case "parametre2":
                newFormState.parametre2 = newValue;
                break;
            case "parametre3":
                newFormState.parametre3 = newValue;
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
                    <Form.Label>Titre de l'activité:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Entrer un titre à l'activité"
                        onBlur = {(e)=>handleUpdate("task_name",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer une description"
                        onBlur = {(e)=>handleUpdate("description",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Distribution:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.distribution}
                        onChange={(e) =>handleUpdate("distribution", e.target.value)}
                    >
                        <option value="Uniform">Uniforme</option>
                        <option value="Triangular">Triangulaire</option>
                        <option value="Gaussian">Gaussienne/Normale</option>
                        <option value="Exponential">Exponentielle</option>
                        <option value="Beta">Bêta</option>
                        <option value="Gamma">Gamma</option>
                        <option value="Chi_square">Chi-deux</option>
                        <option value="Log_normal">Normale logarithmique</option>
                        <option value="Student">Student</option>
                        <option value="Laplace">Laplace</option>
                        <option value="Gumbel">Gumbel</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Parametre:</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="parametres de la distribution"
                        onBlur = {(e)=>handleUpdate("parametre1",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as = {Col} md="4">
                <Form.Label>Parametre:</Form.Label>
                <Form.Control
                    type="Number"
                    placeholder="parametres de la distribution"
                    onBlur = {(e)=>handleUpdate("parametre2",e.target.value)}
                />
            </Form.Group>
        </Form.Row>
            <Form.Row>
            <Form.Group as = {Col} md="4">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    type="Number"
                    placeholder="parametres de la distribution"
                    onBlur = {(e)=>handleUpdate("parametre3",e.target.value)}
                />
            </Form.Group>
        </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}

export default ActivityForm;
