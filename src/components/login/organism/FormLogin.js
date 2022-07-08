import React from "react";
import { Form, Button } from "react-bootstrap";
import InputText from "../atom/InputText";
import TextHeaderLogin from "../molecules/TextHeaderLogin";
import styles from "../../../css/login.module.css";

const FormLogin = () => {
  return (
    <>
      <Form className={styles.form_login}>
        <TextHeaderLogin
          title="Welcome"
          desc="Log in into your exiting account"
        />
        <InputText
          label="E-mail"
          type="email"
          placeholder="examplexxx@gmail.com"
        />
        <InputText label="Password" type="password" placeholder="Password" />
        <Form.Group className={`mb-3 ${styles.form_group_login}`}>
          <Form.Check
            type="checkbox"
            id="custom-checkbox"
            label="I agree to terms & conditions"
          />
        </Form.Group>

        <Form.Group className={`mb-3 ${styles.form_group_login}`}>
          <Button
            as="input"
            type="submit"
            value="Login"
            className={`btn-warning text-white mt-3 py-3 px-4 ${styles.btn_login}`}
          />
          <p className={`mt-3 text-secondary ${styles.text_right}`}>
            Forgot Password?
          </p>
        </Form.Group>
        <p className="text-secondary">
          Don't have an account?
          <a href="#" className="text-warning">
            Sign Up
          </a>
        </p>
      </Form>
    </>
  );
};

export default FormLogin;
