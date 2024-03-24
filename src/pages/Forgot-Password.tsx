import React, { useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import VerificationInput from "react-verification-input";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Link } from "react-router-dom";

const ForgotPw = () => {
  return (
    <Container fluid className={"h-100 forgotpw-bg"}>
      <Row className={"d-flex justify-content-center align-items-center h-100"}>
        <Col lg={4} md={6} xs={11}>
          <Card className={"px-5 py-4 shadow mb-3 position-relative"}>
            <div className={"d-flex justify-content-center mb-4"}>
              <img
                src={"/forgotpw-icon.png"}
                alt={"forgot password icon"}
                width={100}
                className={"user-select-none img-fluid nocursor"}
              ></img>
            </div>
            <h1 className={"mb-3 fs-3 text-primary"}>Reset account password</h1>
            <p className={"mb-5 text-body-secondary"}>
              Please enter the email address you'd like your password reset
              information sent to
            </p>
            <Form>
              <fieldset className="border border-primary-subtle border-2 mb-5 p-2">
                <legend className={"w-auto float-none text-primary"}>
                  Verification Code
                </legend>
                <VerificationInput
                  length={6}
                  autoFocus={false}
                  placeholder={"_"}
                  classNames={{
                    container: "w-100",
                    character: "form-control fs-4",
                    characterSelected: "character--selected",
                    characterInactive: "bg-gray",
                  }}
                />
              </fieldset>
              <FormGroup className="mb-3">
                <FormLabel visuallyHidden={true}>Enter email address</FormLabel>
                <FormControl
                  type={"email"}
                  placeholder={"Email address"}
                  required={true}
                ></FormControl>
              </FormGroup>
              <Button type={"button"} className={"w-100 py-2  mb-3"}>
                Send Verification Code
              </Button>
            </Form>
            <Link
              to={"/"}
              className={
                "d-flex justify-content-center position-absolute bg-white"
              }
              style={{ bottom: "2%", right: "-13px" }}
            >
              <TbArrowBackUpDouble
                className={
                  "rounded-circle border border-primary fs-2 text-primary cursor-pointer hover-scale-medium"
                }
              />
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPw;
