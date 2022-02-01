import { Button, Card } from "react-bootstrap";
import "./productCard.css";

export default function ProductCard(props) {
  const onDelete =id=>e => {
    props.postDelete(id); 
  };
  return (
    <Card className="product-card" key={props.product.id}>
      <Card.Img
        variant="top"
        src={props.product.image}
        style={{ borderRadius: "30px 30px 0 0" }}
      />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.description}</Card.Text>
        <Card.Text style={{ fontSize: "2rem", color: "blue" }}>
          {props.product.price}$
        </Card.Text>
        <Button color="error" className="rounded-pill" onClick={onDelete(props.product.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
