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
            <p><strong>Hello,</strong> I'm David Mitchell Barnett, an aspiring web developer.  I'm beginning my new career in full stack development, and I look forward to joining your team!</p>
            <br/>
            <p>I chose to work in the restaurant industry for the past 15 years because I enjoy being the person that people look to when they need aid, either with planning and executing difficult events, or as the person who can address and fix their problems.  During my tenure in kitchens and tending bars, I’ve always had a passion for computers and the IT world, and so I always acted as the unofficial in-house IT support wherever I worked.  I began learning web development when I began updating a simple wordpress website for a restaurant in college, and integrating the daily special into the menu section before we opened each day.</p>
            <br />
            <p>I expanded the knowledge I gained by studting on my own, using Free Code Camp and Codecademy, but it wasn't until this past year that I had the opportunity to study programming in a professional setting. When the University offered a bootcamp for this past fall, I jumped on the chance to change career.  This course challenged me, and pushed me to learn things that I hadn't come across while teaching myself.  Dimitri, our teacher, and the staff pushed me and the class at every opportunity and encouraged us in every way they could.</p>
            <br />
            <p>I look forward to applying the skills I've developed in advancing the goals of your company.</p>
          </Col>
        </Row>
 
      </Container>
    </div>
  )
}

export default Welcome