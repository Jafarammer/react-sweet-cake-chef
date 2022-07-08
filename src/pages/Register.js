import { Row, Col } from "react-bootstrap";
// import css
import styles from "../css/register.module.css";
// Images
import registerImg from "../images/home.png";
// Molecules
import TextHeader from "../components/register/molecules/TextHeader";
// Organism
import FormRegister from "../components/register/organism/FormRegister";

function Register() {
  return (
    <div className="App">
      <Row>
        <Col>
          <img src={registerImg} className={styles.img_register} />
        </Col>
        <Col>
          <TextHeader
            title="Let's Get Started!"
            desc="Create new account to access all features"
          />
          <FormRegister />
        </Col>
      </Row>
    </div>
  );
}

export default Register;
