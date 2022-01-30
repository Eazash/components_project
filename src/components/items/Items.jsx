import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductCard from "./productCard";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getProducts,
  setProducts,
} from "../../store/productSlice";

function Items() {
  const url = "https://61cebbc465c32600170c7ce8.mockapi.io/products";
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch(setProducts(response.data));
    });
  }, [url]);

  const postDelete = (id) => {
    axios
      .delete(`https://61cebbc465c32600170c7ce8.mockapi.io/products/${id}`)
      .then((res) => dispatch(deleteProduct({ id })))
      .catch((err) => console.log(err));
  };

  if (products && products.length !== 0) {
    return (
      <>
        <div style={{ margin: "3rem 8rem" }}>
          <Row xs={1} md={4} className="g-4">
            {products.map((product, idx) => (
              <Col key={idx}>
                <ProductCard product={product} postDelete={postDelete} />
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
  return (
    <>
      <div style={{ margin: "3rem 8rem" }}>
        <h2>No Products Available</h2>
      </div>
    </>
  );
}

export default Items;
