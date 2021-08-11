import React from "react"
import { Navbar, Container, Nav ,Image} from "react-bootstrap"
// import { Link } from "react-router-dom"
import {  Link } from "@reach/router";

function Navbarpage() {
  return (
    <div>
      
        <Navbar style={{backgroundColor:"#91b655"}} >
          <Container>
            <Nav >
            <Navbar.Brand href="/"><Image  src="/port.png"/></Navbar.Brand>
            </Nav>

            <Nav>
              <Link to='/' className="nav-bar-link">
                <Nav.Link href="/">Home&nbsp;&nbsp;&nbsp;</Nav.Link>
              </Link>

              <Link to='/About' className="nav-bar-link">
                <Nav.Link href="/About">About&nbsp;&nbsp;&nbsp;</Nav.Link>
              </Link>

              <Link to='/Tools' className="nav-bar-link">
                <Nav.Link href="/Tools">Tools&nbsp;&nbsp;&nbsp;</Nav.Link>
              </Link>

              <Link to='/Work' className="nav-bar-link">
                <Nav.Link href="/Work">Work&nbsp;&nbsp;&nbsp;</Nav.Link>
              </Link>

              <Link to='/Contact' className="nav-bar-link">
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Link>

            </Nav>
          </Container>
        </Navbar>
      
    </div>
  )
}

export default Navbarpage
