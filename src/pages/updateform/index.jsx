import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./updateform.css";

function UpdateForm() {
  const [field, setField] = useState([
    {
      price: 0,
      name: " ",
      description: "",
      imagelink: " ",
    },
  ]);
  const submit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    console.log(e.target.name)
    const values= [...field]
    values[0][e.target.name]=e.target.value;
    setField(values);
  };
console.log(field)
  return (
    <div className="form-container">
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formprice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="Add New Price"
            value={field.price}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formname">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            vlaue={field.name}
            type="string"
            placeholder="Add New Name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formdescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={field.description}
            type="string"
            placeholder="Add New Description"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formimagelink">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            name="imagelink"
            value={field.imagelink}
            type="string"
            placeholder="Add New Image Link"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateForm;
