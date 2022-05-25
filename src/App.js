import "./App.css";

import { Col, Form, Row } from "react-bootstrap";

import AppDatePicker from "./components/DatePicker";
import AppDatePickers from "./components/dome";
import { css } from "@emotion/react";

function App() {
  return (
    <Row className="mt-2 mb-2">
      <Col sm={3}>
        <Form.Control className="mb-2" />
      </Col>
      <Col className="d-flex " sm={6}>
        <AppDatePickers/>
        <AppDatePicker />
      </Col>
    </Row>
  );
}

export default App;
