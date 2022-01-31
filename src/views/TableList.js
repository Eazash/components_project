import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Weekly Orders</Card.Title>
                <p className="card-category">
                This week's ordered items
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Purchaser's Name</th>
                      <th className="border-0">Purchased Item</th>
                      <th className="border-0">Total Amount</th>
                      <th className="border-0">Country</th>
                      <th className="border-0">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>Gucci</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>John Doe</td>
                      <td>Dior</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>John Doe</td>
                      <td>car Appliance</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>John Doe</td>
                      <td>Printers</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>John Doe</td>
                      <td>Copy Machine</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>John Doe</td>
                      <td>Zara</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
}

export default TableList;
