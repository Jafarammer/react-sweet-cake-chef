import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import atom
import InputText from "../atom/InputText";
//import css
import styles from "../../../css/register.module.css";
// axios
import axios from "axios";
// react router
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isError, setIsError] = React.useState("");
  const history = useNavigate(); //route

  const handleRegister = () => {
    axios
      .post("http://localhost:8000/users/add", {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        setIsError(false);
        window.location.href = "/login";
      })
      .catch((err) => {
        setIsError(true);
        setErrorMessage(err?.response?.data);
      });
  };
  return (
    <>
      <Form
        className={styles.form_register}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Error message */}
        <Form.Group className={`mb-3 ${styles.form_group_register}`}>
          {isError ? <Alert variant="danger">{errorMessage}</Alert> : null}
        </Form.Group>
        {/* Name */}
        <InputText
          label="Name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Email */}
        <InputText
          label="Email address"
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Phone number */}
        <InputText
          label="Phone number"
          type="text"
          placeholder="08xxxxxxxxxxx"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {/* Create password */}
        <InputText
          label="Create new password"
          type="password"
          placeholder="Create new password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Confirm password */}
        <InputText
          label="Confirm password"
          type="password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handleRegister}
          />
        </Form.Group>

        <p className="text-secondary">
          Already have account?
          <a href="/login" className="text-warning">
            Log In Here
          </a>
        </p>
      </Form>
      {/* End Form */}
    </>
  );
}
export default FormRegister;
