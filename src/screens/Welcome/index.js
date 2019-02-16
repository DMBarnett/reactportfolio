import React, { Component } from "react"
import {Col, Row, Container} from "reactstrap"
import headshot1 from "../../images/headshot2.jpg"
import html5 from "../../images/skills/html5.png"
import css3 from "../../images/skills/css3.png"
import javasc from "../../images/skills/javascript_logo.png"
import mysql from "../../images/skills/mysql.png"
import mongo from "../../images/skills/mongoDB.png"
import expr from "../../images/skills/express.png"
import reac from "../../images/skills/react.png"
import node from "../../images/skills/nodejs.png"
import bootst from "../../images/skills/bootstrap.png"
import urza from "../../images/Urza.png"
import vsc from "../../images/VSC.png"
import food from "../../images/F2T.png"
import "./style.css"

class Welcome extends Component{
  render(){
    return(
      <div>
        <Container fluid className="welcomeContainer">
          <Row className="opener">
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
              <p>I expanded the knowledge I gained by studying on my own, using Free Code Camp and Codecademy, but it wasn't until this past year that I had the opportunity to study programming in a professional setting. When the University offered a bootcamp for this past fall, I jumped on the chance to change career.  This course challenged me, and pushed me to learn things that I hadn't come across while teaching myself.  Dimitri, our teacher, and the staff pushed me and the class at every opportunity and encouraged us in every way they could.</p>
              <br />
              <p>I look forward to applying the skills I've developed in advancing the goals of your company.</p>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row className="justify-content-md-center nameplate">
            <Col xs="12" sm="4">
              <h1>Skill Set</h1>
            </Col>
          </Row>
          <Row className="skills">
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={mysql} alt="MYSQL"></img>
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={mongo} alt="mongoDB"></img>
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={expr} alt="ExpressJS"></img>
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={reac} alt="ReactJS"></img>
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={node} alt="Nodejs"></img>
            </Col>
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={bootst} alt="BootStrap"></img>
            </Col>
          </Row>
          <Row className="skills justify-content-md-center">
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={javasc} alt="JavaScript"></img>
            </Col>  
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={html5} alt="HTML5"></img>
            </Col>  
            <Col xs="6" sm="4" md="3" lg="2" className="align-self-center">
              <img className="skillset" src={css3} alt="CSS3"></img>
            </Col>  
          </Row>
          <br />
          <br />
          <br />
          <Row className="justify-content-md-center nameplate">
            <Col xs="12" sm="4">
              <h1>Portfolio</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <p>1: Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business; but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide.</p>

              <p>2: Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two thirds, expel a Member.</p>

              <p>3: Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy; and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one fifth of those Present, be entered on the Journal.</p>
            </Col>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="4" className="portfolioImgCol">
              <a href="https://murmuring-shelf-36712.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="portImg" src={urza} alt="Urzas Point Of Sale"></img></a>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col xs="12" sm="4" className="portfolioImgCol" id="github">
              <a href="https://github.com/DMBarnett" target="_blank" rel="noopener noreferrer">
                <img className="portImg" src={vsc} alt="Github"></img>
              </a>
            </Col>
            <Col xs="0" sm="1"></Col>

            <Col xs="12" sm="6" className="portfolioText">
              <p>3: If, at the time fixed for the beginning of the term of the President, the President elect shall have died, the Vice President elect shall become President. If a President shall not have been chosen before the time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice President elect shall act as President until a President shall have qualified; and the Congress may by law provide for the case wherein neither a President elect nor a Vice President elect shall have qualified, declaring who shall then act as President, or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or Vice President shall have qualified. </p>
              <p>4: The Congress may by law provide for the case of the death of any of the persons from whom the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for the case of the death of any of the persons from whom the Senate may choose a Vice President whenever the right of choice shall have devolved upon them.   </p>
            </Col>
            <Col xs="0" sm="1"></Col>

          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </div>
    )
  }
}

export default Welcome