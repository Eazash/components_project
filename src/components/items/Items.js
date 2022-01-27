import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductCard from "./productCard";

function Items() {
  const url = "https://61cebbc465c32600170c7ce8.mockapi.io/products";
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setproducts(response.data);
    });
  }, [url]);

  const postDelete =id=> {
    axios
      .delete(`https://61cebbc465c32600170c7ce8.mockapi.io/products/${id}`)
      .then((res) => axios.get(`https://61cebbc465c32600170c7ce8.mockapi.io/products`).then((response) => {
        setproducts(response.data);
      }))
      .catch((err) => console.log(err));
  };

  if (products && products.length !== 0) {
    return (
      <>
        <div style={{ margin: "3rem 8rem" }}>
          <h1 style={{ marginBottom: "4rem" }}> Products Page</h1>
          <Row xs={1} md={4} className="g-4">
            {products.map((product, idx) => (
              <Col key={idx}>
                <ProductCard product={product} postDelete={postDelete}/>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
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
