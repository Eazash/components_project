import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useStateValue } from "../StateProvider";

export default function NavBar() {
  const [{ basket }] = useStateValue();

  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className=".align-middle">
          Delala
        </Navbar.Brand>
        <Nav className="me-auto .align-middle">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="d-flex">
          <LinkContainer to="/checkout">
            <Nav.Link>
              <Button variant="light">
                Cart <Badge bg="secondary">{basket?.length}</Badge>
                <span className="visually-hidden">cart</span>
              </Button>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}