import {Container, Row, Col} from "react-bootstrap";
import Sidebar from './components/Sidebar/Sidebar';

// className="border border-danger"
function App() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col md={2} >
          <Sidebar/>
        </Col>
        <Col >
        </Col>
      </Row>
    </Container>
  );
}

export default App;
