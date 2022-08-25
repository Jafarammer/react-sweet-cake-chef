import React from "react";

import styles from "../../css/home.module.css";
import homeImg from "../../images/1.jpg";

const Header = () => {
  return (
    <>
      <div className={styles.content}>
        <div className="row">
          <div className={`col-9 ${styles.col_left_header}`}>
            <p>Discover Recipe</p>
            <p>
              <b className="text-warning">&</b> Delicious Food
            </p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control mt-5 py-3 px-5"
                placeholder="Search Restaurant, Food"
                aria-label="Search Restaurant, Food"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-lg btn-warning text-white fw-bold mt-5"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <div className={`col-3 bg-warning ${styles.col_right_header}`}>
            <div className="card">
              <img src={homeImg} className="card-img-top" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
