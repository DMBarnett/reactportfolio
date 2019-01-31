import React from "react"
import {Col, Row, Container} from "reactstrap"
import headshot1 from "../../images/headshot2.jpg"
import "./style.css"

function Welcome(props){
  return(
    <div>
      <Container fluid className="welcomeContainer">
        <Row>
          <Col xs="12" lg="5">
            <Row>
              <Col>
                <div className="text-center">
                  <img className="headshot" src={headshot1} width="400px" alt="head-shot-img"></img>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs="12" lg="7">
            <p><h6>Hello, and welcome!</h6>I'm David Mitchell Barnett, an aspiring web developer.  I'm beginning my new career in full stack development, and I look forward to joining your team!</p>
            <br/>
            <p>I chose to work in the restaurant industry for the past 15 years because I enjoy being the person that people look to when they need aid, either with planning and executing difficult events, or as the person who can address and fix their problems.  During my tenure in kitchens and tending bars, I’ve always had a passion for computers and the IT world, and so I always acted as the unofficial in-house IT support wherever I worked.  </p>
          </Col>
        </Row>
 
      </Container>
    </div>
  )
}

export default Welcome