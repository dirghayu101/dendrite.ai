import {Container, Row, Col} from "react-bootstrap";
import banner from "../../assets/images/banner.jpg";
import "./Banner.css"

const Banner = () => {
  return (
    <Container fluid>
        <Row id="bannerRow">
            <Col >
               <img src={banner} alt="banner"/>
            </Col> 
            <Col></Col>
        </Row>
    </Container>
  )
}
export default Banner