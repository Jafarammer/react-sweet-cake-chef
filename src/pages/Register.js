import React from "react";
// css
import styles from "../css/register.module.css";
// image
import registerImg from "../images/register.png";
// molecules
import TextHeader from "../components/molecules/TextHeader";
// organism
import FormRegister from "../components/organism/FormRegister";

function Register() {
  return (
    <>
      <div className="overflow-hidden p-0 m-0">
        <div className="row">
          <div className={`col-6 px-5 ${styles.col}`}>
            <TextHeader
              title="Let's Get Started"
              desc="Create new account to access all features"
            />
            <div className="card border-0 px-5">
              <FormRegister />
            </div>
          </div>
          <div className={`col-6 px-0 ${styles.col}`}>
            <img src={registerImg} className={styles.show_image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
