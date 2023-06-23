import {Container, Row, Col} from "react-bootstrap";
import Sidebar from './components/Sidebar/Sidebar';
import Main from "./components/Main/Main";

// className="border border-danger"
function App() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={2} className="p-0">
          <Sidebar/>
        </Col>
        <Col className="p-0">
          <Main/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
