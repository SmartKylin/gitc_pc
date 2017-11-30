import React, {Component} from 'react'
import Strengths from './strengths'
import Topics from './topics'
import Agenda from './agenda'
import CooperationPartner from './partner'
import Footer from './footer'

import Expert from './expert'
import Presidium from './presidium'
import SpeechGuest from './speech-guest'
import {getLiveUrl} from "../../services/home";


import {BackTop} from 'antd'
import './index.scss'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liveUrl: '',
    }
  }
  
  async componentWillMount() {
    let data = await getLiveUrl().then(res => res.json());
    let liveUrl = data.data[0].url;
    console.log(data, 'live');
    this.setState({
      liveUrl
    });
  }
  render() {
    return (

      <div style={{color: '#fff',background:'#0d1427'}}>
        <Strengths/>
        <Topics/>
        <Agenda/>
        
        <Presidium/>
        <Expert/>
        <SpeechGuest/>
        
        <CooperationPartner/>
        <Footer/>
        <BackTop/>
        {/*{
          this.state.liveUrl
            ? <a className="bj-banner-btn bottom" href={this.state.liveUrl}>
              <div>大会</div>
              <div>直播</div>
            </a>
          : null
        }*/}
      </div>
    )
  }
}

