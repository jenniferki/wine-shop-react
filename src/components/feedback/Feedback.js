import React from "react";
import Button from "@material-ui/core/Button";
import { Col } from "react-bootstrap";
import styles from "./Feedback.module.css";
import { Link } from 'react-router-dom'

export default function Feedback(rest) {

  function handleReset() {
    rest.doReset();
  }

  return (
    <Col md={12} className={styles.offset}>
      <h1>Feedback</h1>
      <Button className={styles.link} variant="contained" color="primary" component={Link} to="/" onClick={handleReset}>
        Reset
      </Button>
    </Col>
  );
}
