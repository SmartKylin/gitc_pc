import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../pages/home'
import Ticket from '../pages/ticket/index'
import Issue from '../pages/issue/index'
import Layout from '../component/layout'
export default class RouterMap extends Component {
  render() {
    return (
    <div>
      <Router>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route  path="/home" component={Home}/>
          <Route  path="/ticket" component={Ticket}/>
          <Route  path="/issue" component={Issue}/>
        </Layout>
      </Router>
    </div>
    )
  }
}