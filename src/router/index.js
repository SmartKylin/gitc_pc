import React, {Component} from 'react'

import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Awards from '../pages/awards/index'
import Hotel from '../pages/hotel/index'
import Layout from '../component/layout'
import News from '../pages/news'


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
              <Route  path="/hotel" component={Hotel}/>
              <Route  path="/news" component={News}/>
          </Switch>

      </Router>
    </div>
    )
  }
}