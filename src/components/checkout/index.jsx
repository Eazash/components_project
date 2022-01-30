import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutList from "./checkoutlist";
import { Row, Col } from "react-bootstrap";
import "./checkout.css";
import { getBasketTotal } from "../../reducer";

function Checkout() {
  const [{ basket }] = useStateValue();
  let value=getBasketTotal(basket);
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
        <h1>total price is {value}</h1>
      </Row>
    </>
  );
}

export default Checkout;
