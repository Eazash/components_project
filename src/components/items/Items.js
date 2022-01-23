import { Button } from "bootstrap";
import React, {useState,useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
import { ItemsData } from "./ItemsData";
import './items.css'
import axios from "axios";

function  Items() {
  const url='https://61cebbc465c32600170c7ce8.mockapi.io/products'
  const [products, setproducts] = useState(null)
  
  useEffect(() => {
    return () => {
      axios.get(url).then(response=>{
        setproducts(response.data)
      })
    };
  }, [url])
  
  if(products){
    return(<>
      <div style={{margin:'8rem'}}>
      <Row xs={1} md={4} className="g-4">
        {products.map((product, idx) => (
          <Col>
            <Card className="card" key={idx}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ borderRadius:'30px 30px 0 0' }}
              />
              <Card.Body className="card-body">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text style={{fontSize:'2rem', color:'blue'}}>{product.price}$</Card.Text>
                <h4>Buy Now</h4>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </>)
  }
  return (
    <>
    <div>
      <h2>no Products avaliable</h2>
      </div>
    </>
  );
}

export default Items;
