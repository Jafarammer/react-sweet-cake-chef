import React, { useState, useEffect } from "react";
import axios from "axios";
// molecules
import HeadSection from "../molecules/HeadSection";
import ShowProductPicture from "../molecules/ShowPrductPicture";
// css
import styles from "../../css/home.module.css";

const PopulerRecipe = () => {
  const [listImg, setListImg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => setListImg(res.data.data));
  });
  return (
    <>
      <div className={`mb-5 ${styles.content}`}>
        <HeadSection
          className={`row ${styles.row_heading_article3}`}
          label="Populer Recipe"
        />
        <div className={`container py-3 ${styles.container_card}`}>
          {listImg.map((item) => (
            <ShowProductPicture src={item?.photo} title={item?.title_recipe} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopulerRecipe;
