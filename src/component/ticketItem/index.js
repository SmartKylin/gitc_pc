import React, { Component } from 'react'
import './ticketItem.scss'
export default class TicketItem extends Component {
  render() {
    return (

      <div className="ticket-box">
        <div className="ticket-content">
          <div className="ticket-content-left">
            <h3 className="content-left-title">GITC2017全球互联网技术大会</h3>
            <p className="content-left-showname">GITC2017 GLOBLAL INTERENET TECHNOLOGY CONFERENCE</p>
                <div className="pople-name-box"><span className="pople-name">参会人</span>李立峰</div>
                <div><span className="ticket-name">门票类型</span>VIP票</div>
                <div className="tiem-addr clearfix">
                  <span className="ticket-time-icon fl"></span><span className="fl ">2017.11.23-2017.11.24</span>
                  <span className="ticket-add-icon fl "></span><span className="fl">北京·国家会议中心</span>
                </div>
                <div className="logo-content-box"> 
                  <div className="logo-icon-zzs"></div>
                  <div>
                    <p className="ticket-content-left-p">白云山科技集团提醒您:到展位抽奖赢汽车</p>
                    <p className="ticket-content-left-p">展位地址:3F 38Q展位</p>
                  </div>
                </div>
          </div>
          <div className="ticket-content-right">
            <img src="www.baidu.com" alt="" className="er-code"/>
            <p className="code-font">6841984994264614988888</p>
            <p className="ticket-content-right-title">使用说明</p>
            <p className="ticket-content-right-p">1、本活动凭票入场,一人一票一次性使用;</p>
            <p className="ticket-content-right-p">2、请截屏保存次条形码,保持条形码清晰,以及作为入场凭证。</p>
          </div>
        </div>
        <div className="ticket-bottpm-positon">
          <div className="ticket-box-bottom">
          <div className="ticket-bottom-left"></div>
          <div className="ticket-bottom-right"></div>
        </div>
        </div>
      </div>


    )
  }
}