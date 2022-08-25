import React from "react";
// molecules
import HeadSection from "../molecules/HeadSection";
// css
import styles from "../../css/home.module.css";
// images
import homeImg from "../../images/foryou.jpg";

const PupulerForYou = () => {
  return (
    <>
      <div className={`mb-5 ${styles.content}`}>
        {/* <HeadArticle className="row" label="Pupuler For You!" /> */}
        <HeadSection className="row" label="Populer For You!" />
        <div className="row mt-5">
          <div className="col-1">1</div>
          <div className="col-6 py-5 px-5">
            <div
              className={`card border border-3 border-warning mt-3 ${styles.card_article1}`}
            >
              <img src={homeImg} className="card-img-top" alt="image" />
            </div>
          </div>
          <div className={`col-5 px-5 ${styles.col_right_article1}`}>
            <h1 className="text-center">Healthy Waffle</h1>
            <h1 className="text-center border-bottom border-2 border-warning mb-4 py-3 px-5">
              (Quick & Easy)
            </h1>
            <p className="text-muted">Quick + Easy Waffle</p>
            <p className="text-muted">
              Healthy Waffle in a hurry ? That's right!
            </p>
            <button
              type="button"
              className="btn btn-warning text-white py-3 px-5 fw-bold mt-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PupulerForYou;
