import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import About from './About'
import Work from './Work'
import Homepage from './Homepage'
import Navbarpage from './Navbarpage'
import Tools from './Tools'
import Contact from './Contact'

function Routing() {
    return (
       <Router>
           <Navbarpage />
           <Switch>
               <Route path='/' exact component={Homepage} />
               <Route path='/About' component={About}/>
               <Route path="/Tools" component={Tools}/>
               <Route path='/Work' component={Work}/>
               <Route path='/Contact' component={Contact} />
           </Switch>
       </Router>
    )
}

export default Routing
