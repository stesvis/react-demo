import "./App.css";

import { Col, Form, Row } from "react-bootstrap";

import AppDatePicker from "./components/DatePicker";

function App() {
  return (
    <Row className="mt-2 mb-2">
      <Col sm={3}>
        <Form.Control className="mb-2" />
      </Col>
      <Col sm={3}>
        <AppDatePicker />
      </Col>
    </Row>
  );
}

export default App;
