import React, {useState} from "react";
import {Button, Container, Modal, ModalBody, ModalFooter, Nav, Navbar} from "react-bootstrap";


function Layout({ children }) {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Risk Manager</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/project">Projets</Nav.Link>
                    <Nav.Link href="/risks/">Risques</Nav.Link>
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
