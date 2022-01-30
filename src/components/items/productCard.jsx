import { Button, Card } from "react-bootstrap";
import { useStateValue } from "../../StateProvider";
import "./productCard.css";

export default function ProductCard({ product }) {
  const [state ,dispatch]=useStateValue();

  const addToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id: product.id,
        name: product.name,
        image:product.image,
        price:product.price,
        description:product.description,
      }
    })
  }
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
        <Button color='error' onClick={addToBasket}>Buy Now</Button>
      </Card.Body>
    </Card>
  );
}
