import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Spinner } from "react-bootstrap";
import "./updateform.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateForm() {
  const params = useParams();
  const [loading, setloading] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://61cebbc465c32600170c7ce8.mockapi.io/products/${params.id}`)
      .then(({ data: product }) => {
        setProduct(product);
        setloading(false);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .put(
        `https://61cebbc465c32600170c7ce8.mockapi.io/products/${params.id}`,
        { ...product }
      )
      .then(({ data: updatedProduct }) => {
        setloading(false);
        navigate(-1);
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const newProduct = { ...product };
    newProduct[name] = e.target.value;
    setProduct(newProduct);
  };
  const cancel = () => {
    navigate(-1);
    setloading(false);
  };
  return (
    <div className="form-container">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary"></Spinner>
        </div>
      ) : (
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={product.name}
              type="string"
              placeholder="Add New Name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formprice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              placeholder="Add New Price"
              value={product.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={product.description}
              type="string"
              placeholder="Add New Description"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formimagelink">
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              name="imagelink"
              value={product.image}
              type="string"
              placeholder="Add New Image Link"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit" onClick={submit}>
              Submit
            </Button>
            <Button variant="outline-primary" type="submit" onClick={submit}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default UpdateForm;
