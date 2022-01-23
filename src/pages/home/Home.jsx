import React from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";

export default function Home() {
	return (
		<Navbar bg="secondary" variant="dark">
			<Container>
				<Navbar.Brand href="#home" className=".align-middle">Delala</Navbar.Brand>
				<Nav className="me-auto .align-middle">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#products">Products</Nav.Link>
				</Nav>
				<Nav className="d-flex">
					<Button variant="light">
						Cart <Badge bg="secondary">9</Badge>
						<span className="visually-hidden">cart</span>
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
