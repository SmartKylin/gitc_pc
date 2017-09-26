import React, {Component} from 'react'
import Strengths from './strengths'
import Topics from './topics'

export default class Home extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#000'}}>
        Home
        <Strengths/>
        <Topics/>
      </div>
    )
  }
}