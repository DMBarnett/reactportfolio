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
                <CardLink href="https://murmuring-shelf-36712.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/pointofsale">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Google book tracking database</h4></CardTitle>
                <CardText>This was a simple project to build an app that tracks a book list for a user, and allows them to add and remove new books. It pulls from the Google books API, and links into books.google.com.  Made with React, Reactstrap, and Mongoose.</CardText>
                <CardLink href="https://salty-forest-82379.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/searchgooglebooks">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle><h4>Memory Game</h4></CardTitle>
                <CardText>This is a memory click game, that tests users memory skill using an array of pups and dogs.  This was one of my earliest React apps, but it was good to get an understanding of how to break the dom into components and handle each independently.</CardText>
                <CardLink href="https://aqueous-savannah-77755.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/theclickgame">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle>Friend Finder</CardTitle>
                <CardText>This is an app that compares your answers to a series of personality questions to other people that have joined the service, and suggests friends based upon the users interests.</CardText>
                <CardLink href="https://polar-citadel-33844.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/friendFinder">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="6" md="3">
            <Card>
              <CardBody>
                <CardTitle>Fridge 2 Table</CardTitle>
                <CardText>This was our second prject in class, it gives users recipes based on what they have in their fridge.  We had a lot of trouble initially with the many-to-many relationship in MySQL, but once understood it worked really smoothly. I handled a lot of the api calls and worked on the database calls, and spent a lot of time pair programming, which was a first, and turned out to be really helpful.  We built this before learninig React, but it would have worked wonders for how difficult some of the api calls became.</CardText>
                <CardLink href="https://radiant-fortress-59044.herokuapp.com/index.html">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/project2">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle>Urza's Point of Sale</CardTitle>
                <CardText>This is a point of sale system for a store that sells Magic the Gathering cards.  It draws pricing from <a href="tcgplayer.com">TCG Player</a>, and maintains a database of the stores inventory and sales history.  Also, it allows for tracking of repeat customers who generate and use store credit through winning tournements</CardText>
                <CardLink href="https://murmuring-shelf-36712.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/pointofsale">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle>Urza's Point of Sale</CardTitle>
                <CardText>This is a point of sale system for a store that sells Magic the Gathering cards.  It draws pricing from <a href="tcgplayer.com">TCG Player</a>, and maintains a database of the stores inventory and sales history.  Also, it allows for tracking of repeat customers who generate and use store credit through winning tournements</CardText>
                <CardLink href="https://murmuring-shelf-36712.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/pointofsale">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="3">
          <Card>
              <CardBody>
                <CardTitle>Urza's Point of Sale</CardTitle>
                <CardText>This is a point of sale system for a store that sells Magic the Gathering cards.  It draws pricing from <a href="tcgplayer.com">TCG Player</a>, and maintains a database of the stores inventory and sales history.  Also, it allows for tracking of repeat customers who generate and use store credit through winning tournements</CardText>
                <CardLink href="https://murmuring-shelf-36712.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/pointofsale">Code on Github</CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Portfolio