import {
    Navbar, Container,
    Nav, Offcanvas
} from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import "../App.css";

function NavBar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

    return(
        <>
            <Navbar 
                bg="success" 
                sticky="top" 
                className="home-navbar"
                expand="lg"
            >
                <Container>
                    {/* <Navbar.Brand className="navbar-brand d-lg-block d-none">
                        <Image 
                            src='logo192.png' 
                            height={50}
                            width={80}
                            fluid 
                        />
                    </Navbar.Brand> */}
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        className="navbar-toggler" 
                        onClick={handleOffcanvasToggle} 
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-lg-flex d-none justify-content-end">
                            <NavLink to="#home" className="fw-bold fs-4 text-white me-3 nav-link">
                                <FaHome className="mb-1" />
                                &nbsp;Home
                            </NavLink>
                            <NavLink to="#pricing" className="fw-bold fs-4 text-white me-3 nav-link">
                                <FaPeopleGroup className="mb-1" />
                                &nbsp;About
                            </NavLink>
                            <NavLink to="#pricing" className="fw-bold fs-4 text-white me-3 nav-link">
                                <MdRateReview className="mb-1" />
                                &nbsp;Contact
                            </NavLink>
                            <NavLink to="#pricing" className="fw-bold fs-4 text-white me-3 nav-link">
                                <IoLogOut size={28} className="mb-1" />
                                &nbsp;Logout
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

                <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <NavLink to="#home" className="fs-4 text-black me-3 nav-link">
                                Home
                            </NavLink>
                            <NavLink to="#pricing" className="fs-4 me-3 nav-link">
                                About
                            </NavLink>
                            <NavLink to="#pricing" className="fs-4 me-3 nav-link">
                                Contact
                            </NavLink>
                            <NavLink to="#pricing" className="fs-4 me-3 nav-link">
                                Logout
                            </NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    );
}

export default NavBar;