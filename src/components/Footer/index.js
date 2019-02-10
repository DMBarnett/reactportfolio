import React from "react"
import {Container, Row, Col} from 'reactstrap';
import "./style.css"

function Footer (){
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col className="leftCol justify-content-start" xs="12" sm="6">
            <a href="https://www.linkedin.com/in/davidmbarnett/"><h4>LinkedIn</h4></a>
            <a href="https://github.com/DMBarnett"><h4>Github</h4></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer