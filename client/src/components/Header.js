import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faRightFromBracket,
  faRightToBracket,
  faUserPlus,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const isAuth = localStorage.getItem("auth-token");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuth && isAuth !== "") {
      setLoggedIn(true);
    }
  }, [isAuth]);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    setLoggedIn(false);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">AMGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Nav.Link>
            {loggedIn && (
              <>
                <Nav.Link href="/profile">
                  <FontAwesomeIcon icon={faUser} /> My Profile
                </Nav.Link>
                <Nav.Link href="/appointment">
                  <FontAwesomeIcon icon={faCalendarCheck} /> Appointment
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {loggedIn === false && (
              <>
                <Nav.Link href="/login">
                  <FontAwesomeIcon icon={faRightToBracket} /> Login
                </Nav.Link>
                <Nav.Link href="/register">
                  <FontAwesomeIcon icon={faUserPlus} /> Register
                </Nav.Link>
              </>
            )}
            {loggedIn === true && (
              <>
                <Nav.Link onClick={handleLogout}>
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
