import React, {Component} from 'react'

import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Awards from '../pages/awards/index'
import Layout from '../component/layout'


let history = createBrowserHistory()
export default class RouterMap extends Component {
  render() {
    return (
    <div>
      <Router history={history}>
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