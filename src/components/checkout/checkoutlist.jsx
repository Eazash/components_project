import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../store/basket";
import "./checkout.css";

function CheckoutList({ item }) {
  const dispatch = useDispatch();
  const removeItemCard = () => {
    dispatch(removeFromBasket({ id: item.id }));
  };
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
          <Button onClick={removeItemCard}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

export default CheckoutList;
