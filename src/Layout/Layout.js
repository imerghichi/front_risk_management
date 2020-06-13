import React, {useState} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, Nav, Navbar} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import FaultTreeAssess from "../components/ServiceOutput/FaultTreeAssess";

function Layout({ children }) {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Risk Manager</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Dashboard</Nav.Link>
                    <Nav.Link href="/configuration">Configuration</Nav.Link>
                    <Nav.Link href="/documentation">Documentation</Nav.Link>
                </Nav>
            </Navbar>

            <Container style={{marginTop: "30px"}}>
                {children}

            </Container>
        </Container>

    )
}

export default Layout;
