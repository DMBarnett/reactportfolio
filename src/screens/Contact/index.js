import React, { Component} from "react"
import {Col, Row, Container, Form, FormGroup, Label, Input} from "reactstrap";
import axios from "axios";
import "./style.css"

class Contact extends Component{
  state={
    name: "",
    email:"",
    message:"",

  }

  handleSubmit=e=>{
    e.preventDefault()
    const { name, email, message } = this.state;

  }

  handleChange = event =>{
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render(){
    return(
      <div>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <Form>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input type="text" id="name" onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input type="email" id="email" onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message:</Label>
                  <Input type="message" id="email" onChange={this.handleChange}></Input>
                </FormGroup>

                <button>Submit</button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact