import React from "react";
// import atom
import InputText from "../atom/InputText";
import Checkbox from "../atom/Checkbox";
// import css
import styles from "../../css/login.module.css";
// axios
import axios from "axios";
// react router

const FormLogin = () => {
  return (
    <>
      <form className="px-5">
        {/* Email */}
        <InputText
          label="E-Mail"
          type="email"
          for="email"
          id="email"
          placeholder="exmplexxx@gmail.com"
        />
        {/* Password */}
        <InputText
          label="Password"
          type="password"
          for="password"
          id="password"
          placeholder="Password"
        />
        <Checkbox type="checkbox" label="I agree to terms & conditions" />
        <div className="d-grid gap-2 px-5">
          <button
            className="btn btn-warning text-white fw-bold mx-5 py-3"
            type="submit"
          >
            Login
          </button>
          <p className={`text-end text-muted px-5 ${styles.text_forgot}`}>
            Forgot Password ?
          </p>
          <p className="text-center mt-3">
            Don't have an account ?{" "}
            <a
              href="/register"
              className="text-warning fw-bold text-decoration-none ms-2"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
