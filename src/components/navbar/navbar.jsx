import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavBar() {
	return (
		<Navbar bg="warning" className="navbar">
			<Container>
				<Navbar.Brand href="#home" className=".align-middle">
					UPSHOP
				</Navbar.Brand>
				<Nav className="me-auto .align-middle">
					<LinkContainer to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/products">
						<Nav.Link>Products</Nav.Link>
					</LinkContainer>
				</Nav>
				<Nav className="d-flex">
					<Button variant="light">
						Cart <Badge bg="dark">9</Badge>
						<span className="visually-hidden">cart</span>
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
