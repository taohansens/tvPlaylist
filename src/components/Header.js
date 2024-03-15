import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">tvPlaylist</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/create">Adicionar Canal</Nav.Link>
                    <Nav.Link href="http://localhost:8080/api/channels/export">Gerar M3U</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
