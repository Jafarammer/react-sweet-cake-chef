import React from "react";
// import { Container, Form, Button } from "react-bootstrap";
import styles from "../css/addRecipe.module.css";
// axios
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const [title_recipe, setTitle_recipe] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [file, setFile] = React.useState(null);
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title_recipe", title_recipe);
    formData.append("ingredients", ingredients);
    formData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = "http://localhost:8000/recipe/add";
    axios
      .post(url, formData, config)
      .then((res) => {
        alert("success");
        navigate("/");
      })
      .catch((err) => {
        alert("failed upload");
        console.log(err);
      });
  };
  return (
    <>
      <div className={styles.content}>
        <div className="border container mt-5">
          <form onSubmit={onFormSubmit}>
            <input
              className="form-control form-control-lg mb-3"
              type="file"
              id="formFile"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              class="form-control mb-3 py-3"
              placeholder="Title"
              onChange={(e) => setTitle_recipe(e.target.value)}
            />
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                style={{ height: "200px" }}
                id="floatingTextarea2"
                placeholder="Leave a comment here"
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
              <label for="floatingTextarea2">Igredients</label>
            </div>
            <input
              className="form-control form-control-lg mb-5"
              type="file"
              id="formFile"
              disabled
            />
            <div className="text-center">
              <button
                className="btn btn-warning text-white fw-bold py-2 mt-4"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRecipe;
