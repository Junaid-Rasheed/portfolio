import React from "react"
// import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import About from "../pages/About"
import Work from "../pages/Work"
import Homepage from "../pages/Homepage"
import Tools from "../pages/Tools"
import Contact from "../pages/Contact"
import { Router } from "@reach/router"

function Routing() {
  return (
    <div>
    
      <Router>
        <Homepage exact path="/" />
        <Tools path="/Tools" />
        <About path="/About" />
        <Work path="/Work" />
        <Contact path="/Contact" />
      </Router>
    </div>
  )
}

export default Routing
