import React from 'react'

import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Container, Row, Col } from "react-bootstrap"

import Navbarpage from '../Components/Navbarpage'
export default function Contact() {
    return (
        <div>
          <Navbarpage />
        <Container>
          <Row>
            <Col xs={12} md={7} sm={12} lg={7} className="first-col">
            <h3 style={{ paddingTop: "20px", fontSize: "bold" }}>
                How to connect with me?
              </h3>

              <h4 style={{ paddingTop: "5px" }}>
                LinkedIn :&nbsp;
                <a
                  href="https://www.linkedin.com/in/junaid-rasheed-a546501b1/"
                  target="blank"
                >
                  <LinkedInIcon fontSize="large" color="primary" />
                </a>
              </h4>

              <h4 style={{ paddingTop: "1px" }}>
                Twitter &nbsp;&nbsp;:&nbsp;
                <a href="https://twitter.com/jaaay_aar?s=09" target="blank">
                  <TwitterIcon fontSize="large" />
                </a>
              </h4>

              <h4 style={{ paddingTop: "1px" }}>
                Gmail &nbsp;&nbsp;&nbsp;&nbsp;: junaidrasheed300@gmail.com
              </h4>
            </Col>
            <br />
  
           
          </Row>
        </Container>
      </div>
    )
}

