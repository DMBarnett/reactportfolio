import React from "react"
import {Col, Row, Container, Card, CardText, CardBody, CardTitle, CardLink} from "reactstrap"
import "./style.css"

function Portfolio(props){
  return(
    <div>
      <Container>
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
        <Row>

        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  )
}

export default Portfolio