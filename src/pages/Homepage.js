
import React from "react"
import {  Link } from "@reach/router";
import { Container, Row, Col, Button } from "react-bootstrap"
import Navbarpage from '../Components/Navbarpage'

// xs (for phones)
// sm (for tablets)
// md (for desktops)
// lg (for larger desktops)

function Homepage() {
  return (
    <div>
      <Navbarpage />
      <Container>
        <Row>
          <Col xs={12} md={7} sm={12} lg={7} className="first-col">
            <h3 className="home-name-tag">Hi, I'm,</h3>
            <h1 className="home-field-tag">Junaid Rasheed</h1>
            <h3 className="home-name-tag">
              Modern Full Stack Developer from Pakistan <br />
              having Bachelor degree in Computer Science.
            </h3>
          
            <Link to="/Contact">
              <Button className="btn" variant="outline-success">
                
                  Contact me
                
              </Button>
            </Link>
          </Col>
          <br />

          <Col>
            <div style={{ paddingTop: "12%" }}>
              <img  src="/mypic.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
