import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={7} sm={12} lg={7} className="first-col">
          <div className="about-info">
            <h1 className="home-field-tag">
              CODE IS READ MORE <br />
              THAN IT'S WRITTEN
            </h1>
            <h4 style={{ paddingBottom: "2%" }}>
              I’m Junaid Rasheed, but you can just call me Junaid.
            </h4>
            <h4>
              A Passionate Modern Full Stack Developer from Pakistan
              having Bachelor degree in Computer Science and learning AWS.
            </h4>
            <h4>
              My objective is to grow with the organization, not just as a
              professional but also as an individual, be mentored by the
              <br /> best, be valued and in return contribute significantly to
              the organization’s objectives everyday through sheer hard work <br />and
              dedication.
            </h4>
          </div>
        </Col>

       
      </Row>
    </Container>
  )
}

export default About
