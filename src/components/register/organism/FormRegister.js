import React from "react";
import { Form, Button } from "react-bootstrap";
import InputText from "../atom/InputText";

const FormRegister = () => {
  return (
    <>
      <Form className="form-register">
        {/* Name */}
        <InputText label="Name" type="text" placeholder="Name" />
        {/* Email */}
        <InputText
          label="Email address"
          type="email"
          placeholder="Enter email address"
        />
        {/* Phone number */}
        <InputText
          label="Phone number"
          type="text"
          placeholder="08xxxxxxxxxxx"
        />
        {/* Create password */}
        <InputText
          label="Create new password"
          type="password"
          placeholder="Create new password"
        />
        {/* Confirm password */}
        <InputText
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
        />
        {/* Form check */}
        <Form.Group className="mb-3 form-group-register">
          <Form.Check
            type="checkbox"
            id="custom-checkbox"
            label="I agree to terms & conditions"
          />
        </Form.Group>
        {/* Button */}
        <Form.Group className="mb-4 form-group-register">
          <Button
            as="input"
            type="submit"
            value="Register Account"
            className="btn-block btn-warning text-white mt-3 py-3 px-4"
          />
        </Form.Group>

        <p className="text-secondary">
          Already have account?{" "}
          <a href="#" className="text-warning">
            Log In Here
          </a>
        </p>
      </Form>
      {/* End Form */}
    </>
  );
};
export default FormRegister;
