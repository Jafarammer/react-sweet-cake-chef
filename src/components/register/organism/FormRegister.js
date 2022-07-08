import React from "react";
import { Form, Button } from "react-bootstrap";
// import atom
import InputText from "../atom/InputText";
//import css
import styles from "../../../css/register.module.css";

const FormRegister = () => {
  return (
    <>
      <Form className={styles.form_register}>
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
        <Form.Group className={`mb-3 ${styles.form_group_register}`}>
          <Form.Check
            type="checkbox"
            id="custom-checkbox"
            label="I agree to terms & conditions"
          />
        </Form.Group>
        {/* Button */}
        <Form.Group className={`mb-4 ${styles.form_group_register}`}>
          <Button
            as="input"
            type="submit"
            value="Register Account"
            className={`btn-warning text-white mt-3 py-3 px-4 ${styles.btn_register}`}
          />
        </Form.Group>

        <p className="text-secondary">
          Already have account?
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
