import React from "react";
import { Container, Form, Button } from "react-bootstrap";
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
        console.log(err);
      });
  };

  const onInputFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      {/* <Form onSubmit={onFormSubmit}>
        <Form.Control
          type="file"
          size="lg"
          className="mb-5 py-3"
          onChange={onInputChange}
        />

        <Button
          variant="warning"
          size="lg"
          className={`py-3 text-white ${styles.btn_add_recipe}`}
          type="submit"
        >
          Post
        </Button>
      </Form> */}
      <Container className="px-5 py-5 my-5">
        <Form onSubmit={onFormSubmit}>
          <Form.Group controlId="formFileLg" className="mb-3 px-5 mx-5">
            <Form.Control
              type="file"
              size="lg"
              className="mb-5 py-3"
              onChange={onInputFile}
            />
            <Form.Control
              type="text"
              size="lg"
              placeholder="Title"
              className="mb-5 py-3"
              onChange={(e) => setTitle_recipe(e.target.value)}
            />
            <textarea
              className="form-control mb-5 py-3"
              rows="8"
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            <Button
              variant="warning"
              size="lg"
              className={`py-3 text-white ${styles.btn_add_recipe}`}
              type="submit"
            >
              Post
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default AddRecipe;
