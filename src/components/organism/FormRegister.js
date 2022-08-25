import React from "react";
// atom
import InputText from "../atom/InputText";
import Checkbox from "../atom/Checkbox";
//axios
import axios from "axios";

const FormRegister = () => {
  return (
    <>
      <form className="px-5">
        {/* Name*/}
        <InputText
          label="Name"
          type="text"
          for="name"
          id="name"
          placeholder="Name"
        />
        {/* Email */}
        <InputText
          label="Email"
          type="email"
          for="email"
          id="email"
          placeholder="Enter email address"
        />
        {/* Phone number */}
        <InputText
          label="Phone number"
          type="number"
          for="number"
          id="number"
          placeholder="08xxxxxxxxxxx"
        />
        {/* Create new password */}
        <InputText
          label="Create new password"
          type="password"
          for="password"
          id="password"
          placeholder="Create new password"
        />
        {/* Confirm password */}
        <InputText
          label="Confirm password"
          type="password"
          for="confpass"
          id="confpass"
          placeholder="Confirm password"
        />
        <Checkbox type="checkbox" label="I agree to terms & conditions" />
        <div className="d-grid gap-2 px-5">
          <button
            className="btn btn-warning text-white fw-bold mx-5 py-3"
            type="submit"
          >
            Register account
          </button>
          <p className="text-center mt-3">
            Already have account ?
            <a
              href="/register"
              className="text-warning fw-bold text-decoration-none ms-2"
            >
              Login in here
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
