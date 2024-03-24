import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/main");
  };

  return (
    <Container fluid className="h-100 w-100 p-0">
      <Row className="h-100 g-0">
        <Col lg={7} md={6} className="d-md-block d-none">
          <div className="lgsu-background d-flex justify-content-center align-content-center flex-column h-100 text-white text-center">
            <h1 className="display-1 fw-medium user-select-none">Planto</h1>
            <p className="fs-4 user-select-none">Beyond your imagination</p>
          </div>
        </Col>
        <Col lg={5} md={6}>
          <div className="lgsu-wrapper">
            <h1 className="fw-bold text-primary">Welcome</h1>
            <h2 className="mb-5 text-body-tertiary fs-3">
              Log in to your account
            </h2>
            <Form className="w-100" onSubmit={handleLogin}>
              <Form.Group className="mb-2 w-100">
                <Form.Label visuallyHidden={true}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="py-2 bg-gray"
                  required={true}
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100">
                <Form.Label visuallyHidden={true}>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="py-2 bg-gray"
                  required={true}
                />
              </Form.Group>
              <Link
                to="/forgot-pw"
                className="mb-5 link-underline link-opacity-75-hover float-end"
              >
                Forgot password?
              </Link>
              <Button
                type={"submit"}
                className="w-100 rounded-5 py-3 fs-4 mb-2"
              >
                Login
              </Button>
              <div className="text-center">
                Dont have an account?
                <Link
                  to=""
                  className="ms-1 link-underline link-opacity-75-hover"
                >
                  Sign Up
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
