import React from "react";
// css
import styles from "../css/home.module.css";
// react bootstrap
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  InputGroup,
  NavDropdown,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
//images
import homeImg from "../images/pancake2.jpg";
import homeImg2 from "../images/belgian.jpg";
import homeImg3 from "../images/apple-pie3.jpg";
import homeImg4 from "../images/apple-pie2.jpg";
// atom
import NavLink from "../components/home/atom/NavLink";
// organism
import NavLeft from "../components/home/organism/NavLeft";
import NavRight from "../components/home/organism/NavRight";
// axios
import axios from "axios";

function Home() {
  const [listImg, setListImg] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/recipe")
      .then((res) => setListImg(res.data.data));
  });

  return (
    <>
      {/* Navbar */}
      <Navbar
        bg="light"
        variant="light"
        className={`fixed-top px-5 ${styles.d_nav}`}
      >
        {/* Nav Left */}
        <NavLeft />
        {/* Nav Right */}
        <NavRight />
      </Navbar>
      {/* End Navbar */}
      {/* body */}
      <div className={styles.d_parent}>
        <Row>
          <Col lg={9} className={styles.col_left}>
            <Card
              className={`d-flex justify-content-center border-0 px-3 ${styles.card_left}`}
            >
              <span>
                <p>Discover Recipe</p>
                <p>
                  <b className="text-warning">&</b> Delicious Food
                </p>
              </span>
              <InputGroup className="mb-3 mt-3" size="lg">
                <Form.Control
                  placeholder="Search Restaurant, Food"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="py-3 px-5"
                />
                <Button variant="warning text-white" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Card>
          </Col>
          <Col lg={3} className={`bg-warning mb-5 ${styles.col_right}`}>
            <Card className={`border-0 ${styles.card_tes}`}>
              <Row>
                <Col className="bg-warning"></Col>
                <Col lg={11}>
                  <h1 className="py-5 px-3">Populer For You !</h1>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Card className={styles.card_style_img}>
          <Card.Img crossorigin="anonymous" src={homeImg} />
        </Card>

        {/* article 1 */}
        <div className={styles.d_article}>
          <Row>
            <Col lg={8}>
              <Card
                className={`border-warning border-5 ${styles.card_img_article1}`}
              >
                <Card.Img src={homeImg2} />
              </Card>
            </Col>
            <Col
              lg={3}
              className={`d-flex align-items-center mb-5 ${styles.col_right}`}
            >
              <div className={styles.box_article1}>
                <h1 className="text-center">
                  Healthy Belgian Waffle (Quick & Easy)
                </h1>
                <hr className="mt-4 mb-4" />
                <p className="mb-5 text-secondary">
                  Belgian Waffle has a crunchy texture and is rectangular in
                  shape
                </p>
                <Button variant="warning px-5 py-3 text-white">
                  Learn More
                </Button>
              </div>
              <Card className={`border-0 ${styles.card_tes}`}>
                <Row>
                  <Col className="bg-warning"></Col>
                  <Col lg={11}>
                    <h1 className="py-5 px-3">New Reicpe</h1>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
        {/* End article 1 */}

        {/* article 2 */}
        <div className={styles.d_article}>
          <Row>
            <Col lg={3} className="bg-warning">
              <Card className={styles.card_style_img_article2}>
                <Card.Img crossorigin="anonymous" src={listImg[0]?.photo} />
              </Card>
              <Card className={`border-0 ${styles.card_tes}`}>
                <Row>
                  <Col className="bg-warning"></Col>
                  <Col lg={11}>
                    <h1 className="py-5 px-3">Populer Recipe</h1>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col
              lg={9}
              className={`d-flex justify-content-end ml-5 ${styles.col_right_article2}`}
            >
              <div className={styles.box_article1}>
                <h1 className="text-center">
                  Healthy {listImg[0]?.title_recipe} (Quick & Easy)
                </h1>
                <hr className="mt-4 mb-4" />
                <p className="mb-5 text-secondary text-center">
                  Quick + Easy {listImg[0]?.title_recipe} <br />
                  Healthy {listImg[0]?.title_recipe} in a hurry ? That's right!
                </p>
                <Button variant="warning px-5 py-3 text-white">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        {/* end article 2 */}

        {/* article 3 */}
        <div className={styles.d_article}>
          <Row md={3} className={`g-5 ${styles.row_article3}`}>
            {listImg.map((item) => (
              <Col>
                <Card className={styles.card_style_img_article3}>
                  <Card.Img crossorigin="anonymous" src={item?.photo} />
                  <Card.Text className="text-secondary px-3">
                    {item?.title_recipe}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        {/* end article 3 */}

        {/* Footer */}
        <div className={`bg-warning ${styles.d_footer}`}>
          <h1>Eat, Cook, Repeat</h1>
          <p className="text-secondary mt-4">
            Share Your Best Recipe By Uploading Here
          </p>
          <Row className={styles.row_footer}>
            <Col>
              <p className="text-secondary">Product</p>
            </Col>
            <Col>
              <p className="text-secondary">Company</p>
            </Col>
            <Col>
              <p className="text-secondary">Learn More</p>
            </Col>
            <Col>
              <p className="text-secondary">Get In Touch</p>
            </Col>
          </Row>
        </div>
        {/* End Footer */}
      </div>
    </>
  );
}

export default Home;
