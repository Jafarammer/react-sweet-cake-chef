import React from "react";
import { Form } from "react-bootstrap";
// import css
import styles from "../../../css/register.module.css";

const InputText = (props) => {
  const {
    label: labelInput,
    type: typeInput,
    placeholder: placeholderInput,
  } = props;
  return (
    <>
      {/* <Col> */}
      {/* <Form className="form-register"> */}
      <Form.Group className={`mb-3 ${styles.form_group_register}`}>
        <Form.Label>{labelInput}</Form.Label>
        <Form.Control
          type={typeInput}
          className="py-3 px-4"
          placeholder={placeholderInput}
        />
      </Form.Group>
      {/* </Form> */}
      {/* </Col> */}
    </>
  );
};

export default InputText;
