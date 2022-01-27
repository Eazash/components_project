import { Button, Card } from "react-bootstrap";
import "./productCard.css";

export default function ProductCard({ product }) {
  return (
    <Card className="card" key={product.id}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ borderRadius: "30px 30px 0 0" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text style={{ fontSize: "2rem", color: "blue" }}>
          {product.price}$
        </Card.Text>
        <Button color='error'>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}
