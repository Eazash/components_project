import { Card, Button } from "react-bootstrap";
import React from "react";
import { Navigate } from "react-router-dom";

function HomeCards(props) {
	return (
		<div>
			<Card className="home-card">
				<Card.Img className="home-card-img" variant="top" src={props.product.image} />
				<Card.Body>
					<Card.Title>{props.product.name}</Card.Title>
					<Card.Text>
                    {props.product.description}
					</Card.Text>
					<Button variant="warning" className="rounded-pill" onClick={<Navigate to="/login" />}>
						Buy Now
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default HomeCards;
