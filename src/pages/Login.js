import React from "react";
import styles from "../css/login.module.css";
import loginImg from "../images/login.png";
// molecules
import TextHeader from "../components/molecules/TextHeader";
// organism
import FormLogin from "../components/organism/FormLogin";

function Login() {
  return (
    <>
      <div className="overflow-hidden p-0 m-0">
        <div className="row">
          <div className={`col-6 px-5 border ${styles.col}`}>
            <TextHeader
              title="Welcome"
              desc="Log in into your exiting account"
            />
            <div className="card border-0 px-5">
              <FormLogin />
            </div>
          </div>
          <div className={`col-6 px-0 ${styles.col}`}>
            <img src={loginImg} className={styles.show_image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
