import React from "react";
import CheckoutList from "./checkoutlist";
import { Row, Col } from "react-bootstrap";
import "./checkout.css";
import { getBasket, getBasketTotal } from "../../store/basket";
import { useSelector } from "react-redux";

function Checkout() {
  const basket = useSelector(getBasket);
  const value = useSelector(getBasketTotal);
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
