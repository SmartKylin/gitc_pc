import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '@/pages/home'
import Ticket from '../pages/ticket/index'
export default class RouterMap extends Component {
  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ticket" component={Ticket}/>
        </Switch>
      </Router>
    </div>
    )
  }
}