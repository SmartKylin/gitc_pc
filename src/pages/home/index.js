import React, {Component} from 'react'
import Strengths from './strengths'
import Topics from './topics'
import Agenda from './agenda'
import SpeechGuest from './speech-guest'
import CooperationPartner from './partner'
import Footer from './footer'
// import 'bootstrap/dist/css/bootstrap.min.css'

import {BackTop} from 'antd'
import './index.scss'

export default class extends Component {
  render() {
    return (

      <div style={{color: '#fff'}}>
        <Strengths/>
        <Topics/>
        <Agenda/>
        <SpeechGuest/>
        <CooperationPartner/>
        <Footer/>
        <BackTop/>
      </div>
    )
  }
}

/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#000'}}> */