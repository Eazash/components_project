import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBasket } from "../../store/basket";

export default function NavBar() {
  const basket = useSelector(getBasket);
  return (
    <Navbar bg="warning" className="navbar">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>UPSHOP</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="d-flex">
          <LinkContainer to="/login">
            <Nav.Link>Log In</Nav.Link>
          </LinkContainer>
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
