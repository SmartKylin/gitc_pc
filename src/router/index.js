import React, {Component} from 'react'

import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../pages/home'
import Ticket from '../pages/ticket/index'
import Awards from '../pages/awards/index'
import Issue from '../pages/issue/index'
import Layout from '../component/layout'


let history = createBrowserHistory()
export default class RouterMap extends Component {
  render() {
    return (
    <div>
      <Router history={history}>
          {/*<Layout history={history}>
              <Route exact path="/" component={Home}/>
            <Route  path="/home" component={Home}/>
            <Route  path="/ticket" component={Ticket}/>
            <Route  path="/issue" component={Issue}/>
            <Route  path="/awards" component={Awards}/>
          </Layout>*/}
          <Switch>
              <Route exact path='/' component={Layout}/>

              <Route path='/layout' component={Layout}/>
              <Route  path="/awards" component={Awards}/>
          </Switch>

      </Router>
    </div>
    )
  }
}