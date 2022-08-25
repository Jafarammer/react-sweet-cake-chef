import React from "react";
// css
import styles from "../../css/home.module.css";
const ShowProductPicture = (props) => {
  const { src: inputSrc, title: inputTitle } = props;
  return (
    <>
      <div className={`card mx-2 my-2 ${styles.card_article3}`}>
        <img
          crossorigin="anonymous"
          src={inputSrc}
          className="card-img-top"
          alt="image"
        />
        <p className="fixed-bottom ms-3 text-light fw-bold">{inputTitle}</p>
      </div>
    </>
  );
};
export default ShowProductPicture;
