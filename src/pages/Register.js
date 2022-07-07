// React bootstrap
import { Row, Col } from "react-bootstrap";

// Images
import registerImg from "../images/register.png";

// Organism
import FormRegister from "../components/register/organism/FormRegister";

// Molecules
import TextHeader from "../components/register/molecules/TextHeader";

function Register() {
  return (
    <div className="App">
      <Row>
        <Col className="col">
          <img src={registerImg} className="img-register" />
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
