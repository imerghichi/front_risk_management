import React, {useState} from 'react';
import {Button, Col, Form} from "react-bootstrap";

function RiskManagerForm({submitHandler}) {

    const formInitialState = {
        risk_name:"",
        description : "",
        probability: 0,
        detection_difficulty: 0,
        vulnerability: 0,
        consquence_description: "",
        date_risk:"",
        active: false,
        detected: false,
        impact: "",
        nature_risk: "",
        origin_risk: "",
        type_risk: "",
        category: "",
        ownerLevel: "",
        visibility: "",
        taxonomy: "",
    };

    const [formState, updateFormState] = useState(formInitialState);
    const handleUpdate = (fieldKey, newValue) => {
        const newFormState = { ...formState};
        switch (fieldKey) {
            case "risk_name":
                newFormState.risk_name = newValue;
                break;
            case "description":
                newFormState.description = newValue;
                break;
            case "probability":
                newFormState.probability = newValue;
                break;
            case "detection_difficulty":
                newFormState.detection_difficulty = newValue;
                break;
            case "vulnerability":
                newFormState.vulnerability = newValue;
                break;
            case "consequence_description":
                newFormState.consequence_description = newValue;
                break;
            case "date_risk":
                newFormState.date_risk = newValue;
                break;
            case "active":
                newFormState.active = newValue;
                break;
            case "detected":
                newFormState.detected = newValue;
                break;
            case "impact":
                newFormState.impact = newValue;
                break;
            case "nature_risk":
                newFormState.nature_risk = newValue;
                break;
            case "origin_risk":
                newFormState.origin_risk = newValue;
                break;
            case "type_risk":
                newFormState.type_risk = newValue;
                break;
            case "categoty":
                newFormState.category = newValue;
                break;
            case "ownerLevel":
                newFormState.ownerLevel = newValue;
                break;
            case "visibility":
                newFormState.visibility = newValue;
                break;
            case "taxonomy":
                newFormState.taxonomy = newValue;
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
                    <Form.Label>Titre du risque:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Entrer un titre au risque"
                        onBlur = {(e)=>handleUpdate("risk_name",e.target.value)}
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
                    <Form.Label>Probabilité:</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="probabilité du risque"
                        onBlur = {(e)=>handleUpdate("probability",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Difficulté de détection:</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Difficulté de détection du risque"
                        onBlur = {(e)=>handleUpdate("detection_difficulty",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Vulnérabilité:</Form.Label>
                    <Form.Control
                        type="Range"
                        placeholder="Vunlérabilité du risuqe"
                        onBlur = {(e)=>handleUpdate("vulnerability",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Description des conséquences:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entrer une description des conséquences"
                        onBlur = {(e)=>handleUpdate("consequence_description",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Date de detection:</Form.Label>
                    <Form.Control
                        type="date"
                        onBlur = {(e)=>handleUpdate("date_risk",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Actif:</Form.Label>
                    <Form.Control
                        type="radio"
                        onBlur = {(e)=>handleUpdate("active",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Detecté:</Form.Label>
                    <Form.Control
                        type="radio"
                        onBlur = {(e)=>handleUpdate("detected",e.target.value)}
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Impact:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.impact}
                        onChange={(e) =>handleUpdate("impact", e.target.value)}
                    >
                        <option value="ACCEPTABLE">Acceptable</option>
                        <option value="TOLERABLE">Tolérable</option>
                        <option value="UNACCEPTABLE">Non-acceptable</option>
                        <option value="INTOLERABLE">Intolérable</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Nature du risque:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.nature_risk}
                        onChange={(e) =>handleUpdate("nature_risk", e.target.value)}
                    >
                        <option value="hazard">Hasard</option>
                        <option value="constraint">Contrainte</option>
                        <option value="nominal">Nominal</option>
                        <option value="trivial">Trivial</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Origine du risque:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.origin_risk}
                        onChange={(e) =>handleUpdate("origin_risk", e.target.value)}
                    >
                        <option value="external">Externe</option>
                        <option value="internal">Interne</option>
                        <option value="vendor">Vendeur</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Type du risque:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.type_risk}
                        onChange={(e) =>handleUpdate("type_risk", e.target.value)}
                    >
                        <option value="strategic_risk">Stratégique</option>
                        <option value="compliance_and_regulatory_risk">conformité et réglementation</option>
                        <option value="financial_risk">Finacier</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            /* todo name for ui */
            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Categorie du risque:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.category}
                        onChange={(e) =>handleUpdate("category", e.target.value)}
                    >
                        <option value="engineering_process_risk">process ingenieur</option>
                        <option value="support_process_risk">process du support </option>
                        <option value="project_management_process_risk,">Finacier</option>
                        <option value="process_management__process_risk">Operationnel</option>
                        <option value="corporate_management_process_risk">Stratégique</option>
                        <option value="product_risk">conformité et réglementation</option>
                        <option value="organization_growth_risk,">Finacier</option>
                        <option value="project_performance_risk">Operationnel</option>
                        /* extern now */
                        <option value="customer_risk">conformité et réglementation</option>
                        <option value="competitor_risk,">Finacier</option>
                        <option value="society_risk">Operationnel</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Niveau du propriétaire:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.ownerLevel}
                        onChange={(e) =>handleUpdate("ownerLevel", e.target.value)}
                    >
                        <option value="Enterprise_Level">Entreprise</option>
                        <option value="SBU_Level">Domaine d'activité stratégique</option>
                        <option value="Program_Level">Programme</option>
                        <option value="Project_Level">Projet</option>
                        <option value="process_level">Procédure</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Visibilité:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.visibility}
                        onChange={(e) =>handleUpdate("visibility", e.target.value)}
                    >
                        <option value="very_high">Très forte</option>
                        <option value="high">Forte</option>
                        <option value="normal">Normal</option>
                        <option value="low">Faible</option>
                        <option value="very_low">Très faible</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as = {Col} md="4">
                    <Form.Label>Taxonomie:</Form.Label>
                    <Form.Control
                        as="select"
                        value={formState.taxonomy}
                        onChange={(e) =>handleUpdate("taxonomy", e.target.value)}
                    >
                        <option value="Requirement">Exigence</option>
                        <option value="Design">Design</option>
                        <option value="Code_and_unit_test">Code et tests unitaires</option>
                        <option value="Integration_and_test">Intégration et tests</option>
                        <option value="Engineering_specialities">Ingénieurie</option>

                        <option value="Development_process">Procédure de développement</option>
                        <option value="Development_system">Système de développement</option>
                        <option value="Management_process">Procédure de gestion</option>
                        <option value="Management_methods">Méthodes de gestion</option>
                        <option value="Work_environment">Environnement du travail</option>

                        <option value="Ressources">Ressources</option>
                        <option value="Contract">Contract</option>
                        <option value="Program_interface">Interface du programme</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button onClick={() => submitHandler(formState)}>Envoyer</Button>
        </Form>
    );
}

export default RiskManagerForm;
