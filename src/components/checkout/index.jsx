import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutList from "./checkoutlist";
import { Row, Col } from "react-bootstrap";
import "./checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Row xs={1} md={1} className="g-4">
        {basket.map((item, idx) => (
          <Col>
            <div>
              <CheckoutList item={item} key={idx} />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Checkout;
