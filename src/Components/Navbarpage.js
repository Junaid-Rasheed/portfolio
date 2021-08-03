import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
function Navbarpage() {
  return (
    <div>
      <>
        <Navbar style={{backgroundColor:"#91b655"}} >
          <Container>
            <Nav >
            <Navbar.Brand href="/"><img alt='img' src='/vector.png'/></Navbar.Brand>
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
      </>
    </div>
  )
}

export default Navbarpage
