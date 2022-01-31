import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./productCard.css";

export default function ProductCard({ product, postDelete, updatePost }) {
  const onDelete = (id) => (e) => {
    postDelete(id);
  };
  const onUpdate = (id, val) => (e) => {
    updatePost(id, val);
    console.log(id + val);
  };
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
        <div className="button-container">
          <Button color="error" onClick={onDelete(product.id)}>
            Delete
          </Button>
          {/* <Link to={location => ({ ...field, pathname: "/products/update/:${}" })}> */}
          <Link to={`/Products/update/${product.id}`}>
            <Button
              color="error"
              onClick={onUpdate(product.id, `${product.name}`)}
            >
              update
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
