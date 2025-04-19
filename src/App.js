import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import "bootstrap/dist/css/bootstrap.min.css";

const firstName = ""; 

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Card style={{ width: "18rem", textAlign: "center" }} className="p-3 shadow-lg">
        {/* Fixed: Use img instead of Image component */}
        <img src="/Assets/image.jpg" alt="Product" className="card-img-top" />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h3 className="mt-3">Hello, {firstName ? firstName : "there"}!</h3>

      {firstName && (
        <img
          src="/Assets/image.jpg" 
          alt="User avatar"
          className="mt-2 rounded-circle"
          width="100"
        />
      )}
    </Container>
  );
}

export default App;
