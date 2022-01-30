import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import ProductCard from "./productCard";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, setProducts } from "../../store/productSlice";

function Items() {
  const url = "https://61cebbc465c32600170c7ce8.mockapi.io/products";
  const products = useSelector((state) => state.products.value);
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

  // const postUpdate
  const updatePost = async (id, val) => {
    console.log("from items" + id + val);
    axios
      .put(`https://61cebbc465c32600170c7ce8.mockapi.io/products/${id}`, {
        name: val,
      })
      .then(() =>
        axios.get(url).then((response) => {
          dispatch(setProducts(response.data));
        })
      )
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
                <ProductCard
                  product={product}
                  postDelete={postDelete}
                  updatePost={updatePost}
                />
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
