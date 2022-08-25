import React, { useState, useEffect } from "react";
import axios from "axios";
// molecules
import HeadSection from "../molecules/HeadSection";
// css
import styles from "../../css/home.module.css";
const NewRecipe = () => {
  const [newImg, setNewImg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => setNewImg(res.data.data));
  });
  return (
    <>
      <div className={`pt-5 mb-5 ${styles.content}`}>
        <HeadSection className="row mt-5 mb-5" label="New Recipe" />
        <div className="row mt-5">
          <div className="col-3 p-0">
            <div
              className={`card bg-warning py-5 ${styles.card_left_article2}`}
            >
              <img
                src={newImg[0]?.photo}
                className="card-img-top mt-3"
                alt="image"
                crossorigin="anonymous"
              />
            </div>
          </div>
          <div className={`col-9 ${styles.col_right_article2}`}>
            <h1 className="text-center">Healthy {newImg[0]?.title_recipe}</h1>
            <h1 className="text-center border-bottom border-2 border-warning mb-4 py-3 px-5">
              (Quick & Easy)
            </h1>
            <p className="text-muted">Quick + Easy {newImg[0]?.title_recipe}</p>
            <p className="text-muted">
              Healthy {newImg[0]?.title_recipe} in a hurry ? That's right!
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

export default NewRecipe;
