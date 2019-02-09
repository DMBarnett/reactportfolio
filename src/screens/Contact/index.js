import React, { Component} from "react"
import {Col, Row, Container, Card, CardText, CardBody, CardTitle, CardLink} from "reactstrap";
import axios from "axios";
import "./style.css"

class Contact extends Component{
  state={
    name: "",
    email:"",
    message:"",

  }
  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col xs="12" md="6">Hello World</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact