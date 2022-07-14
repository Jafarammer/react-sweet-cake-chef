import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import atom
import InputText from "../atom/InputText";
// import molecules
import TextHeaderLogin from "../molecules/TextHeaderLogin";
// import css
import styles from "../../../css/login.module.css";
// axios
import axios from "axios";
// react router

const FormLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isError, setIsError] = React.useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
        // set token
      })
      .then((res) => {
        setIsError(false);
        localStorage.setItem("token", res?.data);
        window.location.href = "/";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err?.response?.data);
      });
  };

  return (
    <>
      <Form className={styles.form_login} onSubmit={(e) => e.preventDefault()}>
        {/* error message */}
        <Form.Group className={`mb-3 ${styles.form_group_register}`}>
          {isError ? <Alert variant="danger">{errorMessage}</Alert> : null}
        </Form.Group>
        {/* title */}
        <TextHeaderLogin
          title="Welcome"
          desc="Log in into your exiting account"
        />
        {/* email */}
        <InputText
          label="E-mail"
          type="email"
          placeholder="examplexxx@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* password */}
        <InputText
          label="Password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* checkbox */}
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
            onClick={handleLogin}
          />
          <p className={`mt-3 text-secondary ${styles.text_right}`}>
            Forgot Password?
          </p>
        </Form.Group>
        <p className="text-secondary">
          Don't have an account?
          <a href="/register" className="text-warning">
            Sign Up
          </a>
        </p>
      </Form>
    </>
  );
};

export default FormLogin;
