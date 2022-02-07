import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBasket } from "../../store/basket";
import { isAdmin, isLoggedIn, removeUser } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const basket = useSelector(getBasket);
  const loggedIn = useSelector(isLoggedIn);
  const admin = useSelector(isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(removeUser());
    navigate("/");
  }
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
          {admin ? (
            <LinkContainer to="/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
          ) : null}
        </Nav>
        <Nav className="d-flex">
          {!loggedIn ? (
            <LinkContainer to="/login">
              <Nav.Link>
                <Button variant="light">Log In</Button>
              </Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link onClick={logout}>
              <Button variant="light">Log Out</Button>
            </Nav.Link>
          )}
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
