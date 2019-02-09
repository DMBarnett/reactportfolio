import React from "react"
import {Col, Row, Container, Card, CardText, CardBody, CardTitle, CardLink} from "reactstrap"
import "./style.css"

function Portfolio(props){
  return(
    <div>
      <Container fluid>
        <Row>
          <Col sm="6" md="3">
            <Card>
              <CardBody>
                <CardTitle><h4>Urza's Point of Sale</h4></CardTitle>
                <CardText>This is a point of sale system for a store that sells Magic the Gathering cards.  It draws pricing from <a href="tcgplayer.com">TCG Player</a>, and maintains a database of the stores inventory and sales history.  Also, it allows for tracking of repeat customers who generate and use store credit through winning tournements</CardText>
                <CardLink href="https://murmuring-shelf-36712.herokuapp.com/">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/pointofsale">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Google Book Search</h4></CardTitle>
                <CardText>This was a simple project to build an app that tracks a book list for a user, and allows them to add and remove new books. It pulls from the Google books API, and links into books.google.com.  Made with React, Reactstrap, and Mongoose.</CardText>
                <CardLink href="https://salty-forest-82379.herokuapp.com/">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/searchgooglebooks">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Memory Game</h4></CardTitle>
                <CardText>This is a memory click game, that tests users memory skill using an array of pups and dogs.  This was one of my earliest React apps, but it was good to get an understanding of how to break the dom into components and handle each independently.</CardText>
                <CardLink href="https://aqueous-savannah-77755.herokuapp.com/">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/theclickgame">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Friend Finder</h4></CardTitle>
                <CardText>This is an app that compares your answers to a series of personality questions to other people that have joined the service, and suggests friends based upon the users interests.</CardText>
                <CardLink href="https://polar-citadel-33844.herokuapp.com/">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/friendFinder">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="3">
            <Card>
              <CardBody>
                <CardTitle><h4>Fridge 2 Table</h4></CardTitle>
                <CardText>This was our second prject in class, it gives users recipes based on what they have in their fridge.  We had a lot of trouble initially with the many-to-many relationship in MySQL, but once understood it worked really smoothly. I handled a lot of the api calls and worked on the database calls, and spent a lot of time pair programming, which was a first, and turned out to be really helpful.  We built this before learning React, but it would have worked wonders for how difficult some of the api calls became.</CardText>
                <CardLink href="https://radiant-fortress-59044.herokuapp.com/index.html">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/project2">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Wine Cellar</h4></CardTitle>
                <CardText>This was the first group project, it allows a user to create their own online wine cellar, and track it from anywhere, thus they can know what they have at home. It uses firebase to track the data and users can login with their own username and password, or use google or facebooks login api.</CardText>
                <CardLink href="https://lylekarim.github.io/wine-cellar/index.html">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/wine-cellar">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Clash of Thrones</h4></CardTitle>
                <CardText>One of the earliest projects we did, this is a jQuery based app.  This uses hide/show tricks to emulate page changes during gameplay.  The characters have slightly different stats, and the enemies are randomly generated each time you defeat a wave, in order to increase difficulty as the game progresses.</CardText>
                <CardLink href="https://dmbarnett.github.io/unit-4-game/">Website</CardLink>
                <CardLink href="https://github.com/DMBarnett/unit-4-game">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>My Github</h4></CardTitle>
                <CardText>See below for a link to my overall github page, I have numerous other minor projects for perusal, some of which are other webpages and others are Node scripts.  Most of the recent repos are from class, but I have some projects that I've developed on my own in order to expand my skills as well.</CardText>
                <CardLink href="https://github.com/DMBarnett">Github</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Portfolio