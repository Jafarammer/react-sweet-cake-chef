// css
import styles from "../css/login.module.css";
// react bootstrap
import { Row, Col, Card } from "react-bootstrap";
//images
import loginImg from "../images/login.png";
import FormLogin from "../components/login/organism/FormLogin";

function Login() {
  return (
    <div className="tes">
      <Row>
        <Col>
          <img src={loginImg} className={styles.img_login} />
        </Col>
        <Col className={styles.col_right}>
          <Card className="d-flex justify-content-center border-0">
            {/* Form */}
            <FormLogin />
            {/* End Form */}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
