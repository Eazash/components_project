import { Card, Button, Nav } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomeCards(props) {
	return (
		<div>
			<Card className="home-card">
				<Card.Img
					className="home-card-img"
					variant="top"
					src={props.product.image}
				/>
				<Card.Body>
					<Card.Title>{props.product.name}</Card.Title>
					<Card.Text>{props.product.description}</Card.Text>
					<Button variant="warning" className="rounded-pill">
						<LinkContainer to="/products">
							<Nav.Link className="home-link">Buy Now</Nav.Link>
						</LinkContainer>
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default HomeCards;
