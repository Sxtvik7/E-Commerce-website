import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>

        <Button type="submit" variant="primary" className="my-2">
            Sign In
        </Button>
        </Form.Group>
      </Form>
    <Row className="py-3">
        <Col>
            New Customer? <Link to='/register'>Register</Link>
        </Col>
    </Row>

    </FormContainer>
  );
};

export default LoginScreen;
