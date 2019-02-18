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
import gbooks from "../../images/GoogleBooks.png"
import dogs from "../../images/doggos.png"
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
          <br />
          <Row>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <h2>Urza's Point of Sale</h2>
              <p>This is a point of sale system for a store that sells Magic the Gathering cards.  It draws pricing from <a href="tcgplayer.com">TCG Player</a>, and maintains a database of the stores inventory and sales history.  Also, it allows for tracking of repeat customers who generate and use store credit through winning tournements</p>

              <p>Built using Reactstrap, a bootstrap library for React, this simple front end is utilitarian, and easy to read for those who are using it.  The backend is a MySQL database, I've used a SQL database to handle multi-row transactions, and to ensure accountability in the accounting for sales and tracking of inventory.</p>

              <p>This was the final project in class, and consisted of about a three week sprint.  We hadn't fully learned the concepts used in React, so our time was split between lectures and coding.</p>

              <p>Built with MySQL, Express, React, Node.js, as well as body-parser, Sequelize ORM, bcrypt, passport, and axios.</p>

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
            <Col xs="12" sm="4" className="portfolioImgCol">
              <a href="https://salty-forest-82379.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="gbooksImg" src={gbooks} alt="Google Book Search"></img>
              </a>
            </Col>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <h2>Google Bookshelf</h2>
              <p>This program allows a user to search for books, using Google's extensive Books API, and save selected books into a bookshelf.  Then, users can delete and add to their bookshelf.  I experimented with mongo and mongoose building this in preparation for the final project, but ultimately went with simple models for this and moved back to MySQL for the final project.</p>

              <p>Built with Mongoose, Express, React, Node.js, as well as body-parser and axios.</p>
            </Col>            
            <Col xs="0" sm="1"></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <h2>Memory Game</h2>
              <p>This is a memory click game, that tests users memory skill using an array of pups and dogs. This was one of my earliest React apps, but it was good to get an understanding of how to break the dom into components and handle each independently.</p>

              <p>Build using React</p>
            </Col>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="4" className="portfolioImgCol">
              <a href="https://aqueous-savannah-77755.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="portImg" src={dogs} alt="Memory click game"></img>
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col xs="12" sm="4" className="portfolioImgCol">
              <a href="https://radiant-fortress-59044.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
                <img className="gbooksImg" src={food} alt="Food To Table"></img>
              </a>
            </Col>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <h2>Fridge 2 Table</h2>
              <p>This was our second prject in class, it gives users recipes based on what they have in their fridge. We had a lot of trouble initially with the many-to-many relationship in MySQL, but once understood it worked really smoothly. I handled a lot of the api calls and worked on the database calls, and spent a lot of time pair programming, which was a first, and turned out to be really helpful. We built this before learning React, but it would have worked wonders for how difficult some of the api and database calls became.</p>

              <p>Built with MySQL, Express, Sequelize ORM, Twilio, Node.js, and Handlebars.</p>
            </Col>
            <Col xs="0" sm="1"></Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="6" className="portfolioText">
              <h2>Github</h2>
              <p>Please peruse my github, along with the projects listed above I have several other projects I've featured on my profile.</p>
              <p>I have experience with the MERN stack, with both NoSQL and SQL databases, and I've tinkered with Python/Django web development, and I look forward to putting these skills to use advancing your companies goals.</p>
            </Col>
            <Col xs="0" sm="1"></Col>
            <Col xs="12" sm="4" className="portfolioImgCol">
              <a href="https://github.com/DMBarnett" target="_blank" rel="noopener noreferrer">
                <img className="portImg" src={vsc} alt="Github"></img>
              </a>
            </Col>
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