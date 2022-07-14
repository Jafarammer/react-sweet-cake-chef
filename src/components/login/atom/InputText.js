import React from "react";
import { Form } from "react-bootstrap";
// import css
import styles from "../../../css/login.module.css";

const InputText = (props) => {
  const {
    label: labelInput,
    type: inputType,
    placeholder: inputPlaceholder,
    onChange: onChangeInput,
    value: valueInput,
  } = props;
  return (
    <>
      <Form.Group className={`mb-3 ${styles.form_group_login}`}>
        <Form.Label>{labelInput}</Form.Label>
        <Form.Control
          type={inputType}
          className="py-3 px-4"
          placeholder={inputPlaceholder}
          onChange={onChangeInput}
          value={valueInput}
        />
      </Form.Group>
    </>
  );
};

export default InputText;
