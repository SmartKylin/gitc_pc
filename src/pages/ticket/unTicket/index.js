import React, { Component } from 'react'
import './unTicket.scss'
export default class UnTicket extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentWillMount() {
  }
  render() {
    return (
      <div className="unticket-box">
        <div className="unticket-icon"></div>
        <p>您还没有门票,快去<a href="https://www.bagevent.com/event/768490">购买</a>吧~</p>
      </div>
    )
  }
}