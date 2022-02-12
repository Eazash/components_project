import { Card, Button, Nav } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { public_url } from "../../config";
function HomeCards(props) {
  return (
    <div>
      <Card className="home-card py-2 px-2">
        <Card.Img
          className="home-card-img"
          variant="top"
          height="150"
          src={`${public_url}/${props.product.image}`}
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
