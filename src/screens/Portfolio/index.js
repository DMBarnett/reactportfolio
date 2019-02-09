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
                <CardTitle><h4>Book tracking database</h4></CardTitle>
                <CardText>This was a simple project to build an app that tracks a reading list for a user, and allows them to add and remove new books. </CardText>
                <CardLink href="https://infinite-atoll-67913.herokuapp.com/">Heroku Hosting</CardLink>
                <CardLink href="https://github.com/DMBarnett/searchgooglebooks">Code on Github</CardLink>
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
        <Row>
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