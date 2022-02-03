import React from "react";
import { Button, Card } from "react-bootstrap";
import "./checkout.css";

function CheckoutList({ item }) {
  return (
    <div>
      <Card className="card" key={item.id} style={{ margin: "0" }}>
        <div className="card-layout">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: "200px", width: "400px" }}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text style={{ fontSize: "2rem", color: "blue" }}>
              {item.price}$
            </Card.Text>
          </Card.Body>
          <Button>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default CheckoutList;
